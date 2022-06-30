import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { ContinuedHearingContainer } from "./ContinuedHearingContainer";
import { NewHearingContainer } from "./NewHearingContainer";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly hearings: THearing[];
};

export type TAnsweredForm = {
  readonly id: number;
  readonly title: string;
  readonly categoryId: number;
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
    return <NewHearingContainer member={member} />;
  }

  return <ContinuedHearingContainer hearings={hearings} member={member} />;
};
