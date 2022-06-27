import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { AfterSecondHearingContainer } from "./AfterSecondHearingContainer";
import { FirstHearingContainer } from "./FirstHearingContainer";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly hearings: THearing[];
};

export type TAnsweredForm = {
  readonly id: number;
  readonly title: string;
  readonly categoryName: string;
  readonly options: {
    id: number;
    text?: string;
    name: string;
  }[];
};
export type AnsweredHearings = {
  readonly sameCoordinateId?: number;
  readonly forms: TAnsweredForm[];
};

export const HearingContainer = ({ member, hearings }: TProps) => {
  if (hearings.length <= 0) {
    return <FirstHearingContainer member={member} />;
  }

  return <AfterSecondHearingContainer hearings={hearings} member={member} />;
};
