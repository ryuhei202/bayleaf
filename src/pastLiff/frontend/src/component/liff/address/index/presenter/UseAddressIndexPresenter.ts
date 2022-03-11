import { AddressMemberData } from "../../../../../model/liff/address/data/AddressMemberData";
import { AddressDestinationData } from "../../../../../model/liff/address/data/AddressDestinationData";
import {
  AddressMemberFormData,
  AddressMemberFormDataDefault
} from "../../member/viewData/AddressMemberFormData";
import {
  AddressDestinationFormData,
  AddressDestinationFormDataDefault
} from "../../destination/viewData/AddressDesitinationData";
import { AddressDeliveryTimeData } from "../../../../../model/liff/address/data/AddressDeliveryTimeData";
import { AddressShowViewData } from "../../show/viewData/AddressShowViewData";
import { AddressStaticData } from "../../../../../model/liff/address/data/AddressStaticData";
import { AddressOptionsData } from "../../../../../model/liff/address/data/AddressOptionsData";
import { AddressMemberFormViewData } from "../../member/viewData/AddressMemberFormViewData";
import { AddressConfirmViewData } from "../../confirm/viewData/AddressConfirmViewData";
import { AddressConfirmFormData } from "../../confirm/viewData/AddressConfirmFormData";
import { AddressDestinationFormViewData } from "../../destination/viewData/AddressDestinationFormViewData";
import { AddressDestinationDataInputStatusType } from "../../../../../model/liff/address/data/enum/AddressDestinationDataInputStatusType";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";

export interface AddressIndexPresenter {
  showViewData: () => AddressShowViewData;
  memberFormViewData: () => AddressMemberFormViewData;
  destFormViewData: () => AddressDestinationFormViewData;
  confirmViewData: () => AddressConfirmViewData;
  memberFormDataToData: (
    formData: AddressMemberFormData,
    target: AddressMemberData
  ) => AddressMemberData;
  mergeMemberFormDataWithDestinationData: (
    formData: AddressMemberFormData,
    dest: AddressDestinationData
  ) => AddressDestinationData;
  destinationFormDataToData: (
    formData: AddressDestinationFormData
  ) => AddressDestinationData;
  deliveryTimeFormDataToData: (
    formData: AddressConfirmFormData
  ) => AddressDeliveryTimeData;
}

export const useAddressIndexPresenter = (
  memberData: AddressMemberData,
  destData: AddressDestinationData,
  timeData: AddressDeliveryTimeData,
  options: AddressOptionsData,
  loaded: boolean,
  errorResponse: ErrorResponse
): AddressIndexPresenter => {
  // ----------------------------------------
  // Private
  // ----------------------------------------
  const addressData = {
    member: memberData,
    dest: destData,
    time: timeData
  };

  const memberToFormData = (
    data: AddressMemberData,
    loaded?: boolean
  ): AddressMemberFormData => {
    if (data) {
      return {
        zip: data.zip,
        pref: data.pref,
        addr1: data.addr1,
        addr2: data.addr2,
        addr3: data.addr3,
        company1: data.company1,
        company2: data.company2,
        tel: data.tel,
        yamatoCenterCode: data.yamatoCenterCode,
        loaded: loaded
      };
    } else {
      return AddressMemberFormDataDefault();
    }
  };

  const destinationToFormData = (
    data: AddressDestinationData,
    loaded?: boolean
  ): AddressDestinationFormData => {
    if(data) {
      return {
        name: data.name,
        kana: data.kana,
        firstName: data.first_name, // camelize
        firstNameKana: data.first_name_kana, // camelize
        zip: data.zip,
        pref: data.pref,
        addr1: data.addr1,
        addr2: data.addr2,
        addr3: data.addr3,
        company1: data.company1,
        company2: data.company2,
        loaded: loaded
      }
    } else {
      return AddressDestinationFormDataDefault();
    }
  };

  const timeToFormData = (loaded?: boolean): AddressConfirmFormData => {
    return {
      time: timeData.time,
      loaded: loaded
    };
  };

  // ----------------------------------------
  // Public
  // ----------------------------------------
  const memberFormDataToData = (
    formData: AddressMemberFormData,
    target: AddressMemberData
  ): AddressMemberData => {
    return Object.assign(target, {
      zip: formData.zip,
      pref: formData.pref,
      addr1: formData.addr1,
      addr2: formData.addr2,
      addr3: formData.addr3,
      company1: formData.company1,
      company2: formData.company2,
      tel: formData.tel
    });
  };

  const mergeMemberFormDataWithDestinationData = (
    formData: AddressMemberFormData,
    dest: AddressDestinationData
  ): AddressDestinationData => {
    return Object.assign(dest, {
      zip: formData.zip,
      pref: formData.pref,
      addr1: formData.addr1,
      addr2: formData.addr2,
      addr3: formData.addr3,
      company1: formData.company1,
      company2: formData.company2
    });
  };

  const destinationFormDataToData = (
    formData: AddressDestinationFormData
  ): AddressDestinationData => {
    return {
      name: formData.name,
      kana: formData.kana,
      first_name: formData.firstName, // to underscore
      first_name_kana: formData.firstNameKana, // to underscore
      zip: formData.zip,
      pref: formData.pref,
      addr1: formData.addr1,
      addr2: formData.addr2,
      addr3: formData.addr3,
      company1: formData.company1,
      company2: formData.company2,
      // TODO: このタイミングでRegisteredにするか、Noneのままにしておくか、要検討
      input_status: AddressDestinationDataInputStatusType.Registered
    };
  };

  const deliveryTimeFormDataToData = (
    formData: AddressConfirmFormData
  ): AddressDeliveryTimeData => {
    return {
      time: formData.time
    };
  };
  const formatZip = (zip: String): string => {
    // 桁数を超えて入力された分を表示する
    //return `〒${zip.slice(0, 3)}-${zip.slice(3, 7)}`;
    return `〒${zip.slice(0, 3)}-${zip.slice(3)}`;
  };

  const getMemberStaticData = (): AddressStaticData => {
    return {
      zip: formatZip(memberData.zip),
      city: `${memberData.pref} ${memberData.addr1}`,
      ward: memberData.addr2,
      building: memberData.addr3,
      department: `${memberData.company1} ${memberData.company2}`,
      tel: `Tel: ${memberData.tel}`
    };
  };

  const getDestinationStaticData = (): AddressStaticData => {
    return {
      zip: formatZip(destData.zip),
      city: `${destData.pref} ${destData.addr1}`,
      ward: destData.addr2,
      building: destData.addr3,
      department: `${destData.company1} ${destData.company2}`,
      name: `${destData.name} ${destData.first_name}`,
      nameKana: `${destData.kana} ${destData.first_name_kana}`
    };
  };

  const showViewData = (): AddressShowViewData => {
    const time =
      timeData && options.timeChoices && 0 < options.timeChoices.length
        ? options.timeChoices.find(choice => choice.value === timeData.time)
        : null;
    const timeText = time ? time.text : "指定なし";

    return {
      member: getMemberStaticData(),
      dest: getDestinationStaticData(),
      timeText: timeText,
      loaded: loaded
    };
  };
  const memberFormViewData = (): AddressMemberFormViewData => {
    return {
      formData: memberToFormData(memberData, loaded),
      prefs: options.prefs,
      errorResponse: errorResponse
    };
  };
  const destFormViewData = (): AddressDestinationFormViewData => {
    return {
      formData: destinationToFormData(destData, loaded),
      prefs: options.prefs,
      errorResponse: errorResponse
    };
  };
  const confirmViewData = (): AddressConfirmViewData => {
    return {
      member: getMemberStaticData(),
      dest: getDestinationStaticData(),
      time: timeToFormData(),
      timeChoices: options.timeChoices,
      addressData: addressData,
      loaded: loaded,
      errorResponse: errorResponse
    };
  };

  return {
    showViewData,
    memberFormViewData,
    destFormViewData,
    confirmViewData,
    memberFormDataToData,
    mergeMemberFormDataWithDestinationData,
    destinationFormDataToData,
    deliveryTimeFormDataToData
  };
};
