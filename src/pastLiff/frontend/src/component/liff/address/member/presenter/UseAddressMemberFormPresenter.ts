import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";
import { TextInputViewData } from "../../../../shared/inputs/text/viewData/TextInputViewData";
import { AddressLabelData } from "../../../../../model/liff/address/data/label/AddressLabelData";
import { SelectInputViewData } from "../../../../shared/inputs/select/viewData/SelectInputViewData";
import { AddressPrefListData } from "../../../../../model/liff/address/data/AddressPrefListData";
import { AddressMemberFormData } from "../viewData/AddressMemberFormData";
import { ModelType } from "../../../../../model/shared/Mapper/ModelType";

export interface UseAddressMemberFormPresenter {
  zipTextInputViewData: () => TextInputViewData;
  prefSelectInputViewData: () => SelectInputViewData;
  addr1TextInputViewData: () => TextInputViewData;
  addr2TextInputViewData: () => TextInputViewData;
  addr3TextInputViewData: () => TextInputViewData;
  company1TextInputViewData: () => TextInputViewData;
  company2TextInputViewData: () => TextInputViewData;
  telTextInputViewData: () => TextInputViewData;
  yamatoCenterCodeTextInputViewData: () => TextInputViewData;
}

export const useAddressMemberFormPresenter = (
  defaultFormData: AddressMemberFormData,
  prefList: AddressPrefListData,
  errorResponse: ErrorResponse | null,
  zipError: boolean,
  zipHelperText: string,
  addr1Error: boolean,
  addr1HelperText: string,
  addr2Error: boolean,
  addr2HelperText: string,
  addr3Error: boolean,
  addr3HelperText: string,
  company1Error: boolean,
  company1HelperText: string,
  company2Error: boolean,
  company2HelperText: string,
  telError: boolean,
  telHelperText: string,
  yamatoCenterCodeError: boolean,
  yamatoCenterCodeHelperText: string
): UseAddressMemberFormPresenter => {
  const errorFromResponse = (attrName: string): string | null => {
    const error =
      errorResponse &&
      errorResponse.errorStruct &&
      errorResponse.errorStruct[ModelType.AddressMember];

    //const attr = snakeCase(attrName); // attr1 - > attr_1になってしまう
    const attr = attrName.replace( /([A-Z])/g, "_$1" ).toLowerCase();
    if (error && error[attr]) {
      const messages = error[attr].map(message => {
        return `${AddressLabelData[attrName]} ${message}`;
      });
      return messages[0];
    } else {
      return null;
    }
  };

  const zipTextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.zip,
      label: AddressLabelData.zip,
      placeholder: "例）5500012（ハイフンなし）",
      required: true,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("zip") || zipError,
      helperText: errorFromResponse("zip") || zipHelperText || ""
    };
  };
  const prefSelectInputViewData = (): SelectInputViewData => {
    return {
      listData: prefList,
      defaultValue: defaultFormData.pref,
      label: AddressLabelData.pref,
      placeholder: "",
      required: true,
      fullWidth: true
    };
  };
  const addr1TextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.addr1,
      label: AddressLabelData.addr1,
      placeholder: "例）大阪市西区",
      required: true,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("addr1") || addr1Error,
      helperText: errorFromResponse("addr1") || addr1HelperText || ""
    };
  };
  const addr2TextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.addr2,
      label: AddressLabelData.addr2,
      placeholder: "例）立売堀1丁目3-13",
      required: true,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("addr2") || addr2Error,
      helperText: errorFromResponse("addr2") || addr2HelperText || ""
    };
  };
  const addr3TextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.addr3,
      label: AddressLabelData.addr3,
      placeholder: "例）第三富士ビル10F",
      required: false,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("addr3") || addr3Error,
      helperText: errorFromResponse("addr3") || addr3HelperText || ""
    };
  };
  const company1TextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.company1,
      label: AddressLabelData.company1,
      placeholder: "例）株式会社キーザンキーザン　スタイリスト部",
      required: false,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("company1") || company1Error,
      helperText: errorFromResponse("company1") || company1HelperText || ""
    };
  };
  const company2TextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.company2,
      label: AddressLabelData.company2,
      placeholder: "例）株式会社キーザンキーザン　スタイリスト部",
      required: false,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("company2") || company2Error,
      helperText: errorFromResponse("company2") || company2HelperText || ""
    };
  };
  const telTextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.tel,
      label: AddressLabelData.tel,
      placeholder: "例）08012345678（ハイフンなし)",
      required: true,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("tel") || telError,
      helperText: errorFromResponse("tel") || telHelperText || ""
    };
  };
  const yamatoCenterCodeTextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.yamatoCenterCode,
      label: AddressLabelData.yamatoCenterCode,
      placeholder: "例）012345(半角数字6文字)",
      required: true,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: !!errorFromResponse("yamatoCenterCode") || yamatoCenterCodeError,
      helperText:
        errorFromResponse("yamatoCenterCode") ||
        yamatoCenterCodeHelperText ||
        ""
    };
  };

  return {
    zipTextInputViewData,
    prefSelectInputViewData,
    addr1TextInputViewData,
    addr2TextInputViewData,
    addr3TextInputViewData,
    company1TextInputViewData,
    company2TextInputViewData,
    telTextInputViewData,
    yamatoCenterCodeTextInputViewData
  };
};
