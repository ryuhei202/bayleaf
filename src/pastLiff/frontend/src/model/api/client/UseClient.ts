import { useContext } from "react";
import axios, { AxiosError, AxiosResponse, AxiosInstance } from "axios";
import ErrorResponse, {
  DefaultErrorResponse
} from "../response/shared/ErrorResponse";
import { MemberAuthContext } from "../../liff/shared/context/MemberAuthContext";
import { useSession } from "../../shared/Session/UseSession";
import {ResponseStatusType} from "../../shared/ResponseStatusType";

export interface ClientHeader {
  [key: string]: string;
}
export interface Client<T> {
  defaultTimeout: number;
  createHeaders(): ClientHeader;
  createApi(headers: ClientHeader, timeout: number): AxiosInstance;
  execute(method: Promise<AxiosResponse<T>>): Promise<T>;
}

export const useClient = <T>(): Client<T> => {
  const defaultTimeout = 10000;
  const memberAuthContext = useContext(MemberAuthContext);
  const session = useSession();

  const createHeaders = (): ClientHeader => {
    return {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Token ${memberAuthContext.token}`,
      uid: memberAuthContext.uid || ""
    };
  };

  const createApi = (headers: ClientHeader, timeout: number): AxiosInstance => {
    const api = axios.create();
    Object.keys(headers).forEach(key => {
      api.defaults.headers.common[key] = headers[key];
    });
    api.defaults.timeout = timeout;
    return api;
  };

  const execute = (method: Promise<AxiosResponse<T>>): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      method
        .then((results: AxiosResponse) => {
          const error: ErrorResponse = results.data;
          if (error.errors) {
            reject(error);
          } else {
            resolve(results.data);
          }
        })
        .catch((error: AxiosError) => {
          const response = error.response;
          if (response && response.status === ResponseStatusType.Unauthorized) {
            session.clearMemberAuth();
          }
          reject(crateErrorResponse(error));
        });
    });
  };

  const crateErrorResponse = (error: AxiosError): ErrorResponse => {
    let errorResponse: ErrorResponse = DefaultErrorResponse();
    //console.debug(error.response);
    if (error.response) {
      errorResponse = {
        status: error.response.status,
        messages: error.response.data.message,
        errors: error.response ? error.response.data.errors : null,
        errorStruct: error.response ? error.response.data.error_struct : null
      };
    } else {
      errorResponse = {
        status: errorResponse.status,
        messages: [error.message],
        errors: null,
        errorStruct: null
      };
    }
    return errorResponse;
  };

  return { defaultTimeout, createHeaders, createApi, execute };
};
