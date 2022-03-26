export type TMemberForAddress = {
  readonly lastName: string;
  readonly lastNameKana: string;
  readonly firstName: string;
  readonly firstNameKana: string;
  readonly zip: string;
  readonly pref: string;
  readonly addr1: string;
  readonly addr2: string;
  readonly addr3: string;
  readonly company1: string;
  readonly company2: string;
  readonly inputStatus: "done" | "not_input";
};
