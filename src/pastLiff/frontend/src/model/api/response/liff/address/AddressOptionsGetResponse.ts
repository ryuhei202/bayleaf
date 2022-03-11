import { AddressOptionsData } from "../../../../liff/address/data/AddressOptionsData";
import { AddressTimeChoicesData } from "../../../../liff/address/data/AddressTimeChoicesData";

export default interface AddressOptionsGetResponse
  extends Pick<AddressOptionsData, "prefs"> {
  time_choices: AddressTimeChoicesData;   // timeChoices -> to snakeCase
}
