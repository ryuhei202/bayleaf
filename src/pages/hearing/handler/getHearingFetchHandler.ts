import { HEARING_FORM } from "../../../models/hearing/THearingForms";

type THearingFetchHandler = {
  readonly handleClickFirstNext: () => void;
};
type TArgs = {
  readonly setNextFormId: React.Dispatch<React.SetStateAction<number | null>>;
};
export const getHearingFetchHandler = ({
  setNextFormId,
}: TArgs): THearingFetchHandler => {
  const handleClickFirstNext = () => {
    setNextFormId(HEARING_FORM.FIRST);
  };

  return {
    handleClickFirstNext,
  };
};
