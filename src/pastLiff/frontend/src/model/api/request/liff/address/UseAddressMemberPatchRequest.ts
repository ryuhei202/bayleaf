import AddressFormData from "../../../../../component/liff/address/confirm/shared/AddressFormData";
import {formDataBuilder} from "../../../../shared/FormDataBuilder";
import {ModelType} from "../../../../shared/Mapper/ModelType";

export const UseAddressPatchRequest = (
  formData: AddressFormData
): PatchRequest => {
  const url = (): string => {
    return "liff/api/profile/address";
  };

  const params = (): FormData => {
    const form = new FormData();
    const builder = formDataBuilder();
    const member = builder.toJson(formData.member);
    const dest = builder.toJson(formData.dest);
    const time = builder.toJson(formData.time);

    form.append(ModelType.AddressMember, member);
    form.append(ModelType.AddressDestination, dest);
    form.append(ModelType.AddressDeliveryTime, time);
    return form;
  };

  return { url, params };
};
