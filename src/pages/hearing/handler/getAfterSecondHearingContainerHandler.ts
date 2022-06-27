import { THearing } from "../../../api/hearings/THearing";
import { THearingAnswer } from "../../../models/hearing/THearingAnswer";

type TAfterSecondHearingContainerHandler = {
  readonly formattedPrivousHearing: () => THearingAnswer[];
  readonly handleTransitionSleeveForm: () => void;
  readonly handleClickStart: () => void;
};

type TArgs = {
  readonly hearings: THearing[];
};
export const getAfterSecondHearingContainerHandler = ({ hearings }: TArgs) => {
  const formattedPrivousHearing = () => {};
  const handleClickStart = () => {};

  // return {
  //   formattedPrivousHearing,
  //   handleTransitionSleeveForm,
  //   handleClickStart,
  // };
};
