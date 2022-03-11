import { AddressConfirmFormViewData } from "../viewData/AddressConfirmFormViewData";
import { AddressConfirmViewData } from "../viewData/AddressConfirmViewData";
import { AddressConfirmPopupViewData } from "../viewData/AddressConfirmPopupViewData";
import { AddressStaticData } from "../../../../../model/liff/address/data/AddressStaticData";
import { ModelType } from "../../../../../model/shared/Mapper/ModelType";
import { AddressLabelData } from "../../../../../model/liff/address/data/label/AddressLabelData";
import { AddressConfirmFormErrorViewData } from "../viewData/AddressConfirmFormErrorViewData";

export interface UseAddressConfirmPresenter {
  formViewData: () => AddressConfirmFormViewData;
  popupViewData: () => AddressConfirmPopupViewData;
  memberStaticData: () => AddressStaticData;
  memberFormErrors: () => AddressConfirmFormErrorViewData;
  destFormErrors: () => AddressConfirmFormErrorViewData;
}

export const useAddressConfirmPresenter = (
  viewData: AddressConfirmViewData,
  popupOpen: boolean
): UseAddressConfirmPresenter => {
  const formViewData = (): AddressConfirmFormViewData => {
    return {
      formData: viewData.time,
      timeChoices: viewData.timeChoices
    };
  };
  const popupViewData = (): AddressConfirmPopupViewData => {
    return {
      formData: viewData.addressData,
      open: popupOpen
    };
  };
  const memberFormErrors = (): AddressConfirmFormErrorViewData => {
    if (
      viewData.errorResponse.errorStruct &&
      viewData.errorResponse.errorStruct[ModelType.AddressMember]
    ) {
      const error = viewData.errorResponse.errorStruct[ModelType.AddressMember];
      let errors: string[] = [];
      Object.keys(error).forEach(key => {
        const messages = error[key].map(message => {
          return `${AddressLabelData[key]} ${message}`;
        });
        errors = errors.concat(messages);
      });
      return {
        errors: errors
      };
    } else {
      return {
        errors: null
      };
    }
  };
  const destFormErrors = (): AddressConfirmFormErrorViewData => {
    if (
      viewData.errorResponse.errorStruct &&
      viewData.errorResponse.errorStruct[ModelType.AddressDestination]
    ) {
      const error =
        viewData.errorResponse.errorStruct[ModelType.AddressDestination];
      let errors: string[] = [];
      Object.keys(error).forEach(key => {
        const messages = error[key].map(message => {
          return `${AddressLabelData[key]} ${message}`;
        });
        errors = errors.concat(messages);
      });
      return {
        errors: errors
      };
    } else {
      return {
        errors: null
      };
    }
  };

  const formatZip = (zip: String): string => {
    // 桁数を超えて入力された分を表示する
    //return `〒${zip.slice(0, 3)}-${zip.slice(3, 7)}`;
    return `〒${zip.slice(0, 3)}-${zip.slice(3)}`;
  };

  const memberStaticData = (): AddressStaticData => {
    const member = viewData.addressData.member;
    return {
      zip: formatZip(member.zip),
      city: `${member.pref} ${member.addr1}`,
      ward: member.addr2,
      building: member.addr3,
      department: `${member.company1} ${member.company2}`,
      tel: `Tel: ${member.tel}`
    };
  };

  return {
    formViewData,
    popupViewData,
    memberStaticData,
    memberFormErrors,
    destFormErrors
  };
};
