import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { liffPath } from "../../LiffPath";
import AddressMember from "../member/AddressMember";
import AddressShow from "../show/AddressShow";
import AddressDestination from "../destination/AddressDestination";
import AddressConfirm from "../confirm/AddressConfirm";
import {
  AddressMemberData,
  AddressMemberDataDefault,
} from "../../../../model/liff/address/data/AddressMemberData";
import {
  AddressDestinationData,
  AddressDestinationDataDefault,
} from "../../../../model/liff/address/data/AddressDestinationData";
import { useAddressIndexPresenter } from "./presenter/UseAddressIndexPresenter";
import {} from "../member/viewData/AddressMemberFormViewData";
import { AddressDestinationFormData } from "../destination/viewData/AddressDesitinationData";
import { useAddressIndexHandler } from "./handler/UseAddressIndexHandler";
import { AddressMemberFormData } from "../member/viewData/AddressMemberFormData";
import {
  AddressDeliveryTimeData,
  AddressDeliveryTimeDataDefault,
} from "../../../../model/liff/address/data/AddressDeliveryTimeData";
import { AddressIndexViewData } from "./viewData/AddressIndexViewData";
import {
  AddressOptionsData,
  AddressOptionsDataDefault,
} from "../../../../model/liff/address/data/AddressOptionsData";
import { AddressConfirmFormData } from "../confirm/viewData/AddressConfirmFormData";
import { AddressDestinationDataInputStatusType } from "../../../../model/liff/address/data/enum/AddressDestinationDataInputStatusType";
import ErrorResponse, {
  DefaultErrorResponse,
} from "../../../../model/api/response/shared/ErrorResponse";
import { cloneDeep } from "lodash";

// ----------------------------------------
// component
// ----------------------------------------

const AddressIndex = () => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const [_memberData, setMemberData] = useState<AddressMemberData>(
    AddressMemberDataDefault()
  );
  const [_destData, setDestData] = useState<AddressDestinationData>(
    AddressDestinationDataDefault()
  );
  const [_timeData, setTimeData] = useState<AddressDeliveryTimeData>(
    AddressDeliveryTimeDataDefault()
  );
  const [_optionsData, setOptionsData] = useState<AddressOptionsData>(
    AddressOptionsDataDefault()
  );
  const [_errorResponse, setErrorResponse] = useState<ErrorResponse>(
    DefaultErrorResponse()
  );

  const [_loaded, setLoaded] = useState<boolean>(false);

  // ----------------------------------------
  // callbacks
  // ----------------------------------------
  const shouldRenewMember = (formData: AddressMemberFormData) => {
    const memberData = presenter.memberFormDataToData(formData, _memberData);
    setMemberData(memberData);

    if (_destData.input_status === AddressDestinationDataInputStatusType.None) {
      const destData = presenter.mergeMemberFormDataWithDestinationData(
        formData,
        _destData
      );
      setDestData(destData);
    }
  };
  const shouldRenewDestination = (formData: AddressDestinationFormData) => {
    const data = presenter.destinationFormDataToData(formData);
    // TODO:input_statusではなく、別途フラグを追加するか要検討
    //  -> 現状、input_statusはサーバー側で更新する（フロント側の値を無視する）が、て手入力による変更有無を示すフラグとして利用している
    data.input_status = AddressDestinationDataInputStatusType.Registered;
    setDestData(data);
  };
  const shouldRenewDeliveryTime = (formData: AddressConfirmFormData) => {
    const data = presenter.deliveryTimeFormDataToData(formData);
    setTimeData(data);
  };
  const shouldClearResponseError = (model: string, attrName: string): void => {
    const errorResponse = cloneDeep(_errorResponse);
    if (
      _errorResponse &&
      errorResponse.errorStruct &&
      errorResponse.errorStruct[model]
    ) {
      const attr = attrName.replace(/([A-Z])/g, "_$1").toLowerCase();
      delete errorResponse.errorStruct[model][attr];
      setErrorResponse(errorResponse);
    }
  };
  const onError = (errorResponse: ErrorResponse | null): void => {
    setErrorResponse(errorResponse || DefaultErrorResponse);
  };
  const onLoad = (viewData: AddressIndexViewData) => {
    setMemberData(viewData.member);
    setDestData(viewData.dest);
    setTimeData(viewData.time);
    setLoaded(true);
  };
  const onOptionsLoad = (options: AddressOptionsData) => {
    setOptionsData(options);
    setLoaded(true);
  };
  const callback = {
    shouldRenewMember: shouldRenewMember,
    shouldRenewDestination: shouldRenewDestination,
    shouldRenewDeliveryTime: shouldRenewDeliveryTime,
    shouldClearResponseError: shouldClearResponseError,
    onLoad: onLoad,
    onError: onError,
    onOptionsLoad: onOptionsLoad,
  };

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = useAddressIndexHandler(callback);
  const presenter = useAddressIndexPresenter(
    _memberData,
    _destData,
    _timeData,
    _optionsData,
    _loaded,
    _errorResponse
  );
  const rootPath = `${liffPath}`;

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <Router>
      <Route
        path={rootPath}
        element={() =>
          _destData.input_status ===
          AddressDestinationDataInputStatusType.None ? (
            <AddressMember
              viewData={presenter.memberFormViewData()}
              callback={handler.memberCallback()}
            />
          ) : _destData.input_status ===
            AddressDestinationDataInputStatusType.Registered ? (
            // AddressShowからAddressConfirmにデザイン変更
            <AddressConfirm
              viewData={presenter.confirmViewData()}
              callback={handler.confirmCallback()}
            />
          ) : null
        }
      />
      {/* デザイン変更により、AddressShow -> AddressConfirmに統一 */}
      <Route
        path={"/address/show"}
        element={() => <AddressShow viewData={presenter.showViewData()} />}
      />
      <Route
        path={"/address/member"}
        element={() => (
          <AddressMember
            viewData={presenter.memberFormViewData()}
            callback={handler.memberCallback()}
          />
        )}
      />
      <Route
        path={"/address/destination"}
        element={() => (
          <AddressDestination
            viewData={presenter.destFormViewData()}
            callback={handler.destCallback()}
          />
        )}
      />
      <Route
        path={"/address/confirm"}
        element={() => (
          <AddressConfirm
            viewData={presenter.confirmViewData()}
            callback={handler.confirmCallback()}
          />
        )}
      />
    </Router>
  );
};

export default AddressIndex;
