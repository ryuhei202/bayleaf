import { useState } from "react";
import { useChartCreate } from "../../api/charts/useChartCreate";
import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { AfterSecondHearingContainer } from "./AfterSecondHearingContainer";
import { FirstHearingContainer } from "./FirstHearingContainer";
import { HearingPostSuccess } from "./HearingPostSuccess";

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
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [currentAnswerNumber, setCurrentAnswerNumber] = useState<1 | 2>(1);
  const [firstAnsweredHearings, setFirstAnsweredHearings] =
    useState<AnsweredHearings>({
      forms: [],
    });
  const [secondAnsweredHearings, setSecondAnsweredHearings] =
    useState<AnsweredHearings>({
      forms: [],
    });
  const [isBackTransition, setIsBackTransition] = useState<boolean>(false);
  const {
    mutate,
    isLoading: isPostLoading,
    isError: isPostError,
    isSuccess: isPostSuccess,
  } = useChartCreate();

  if (isPostSuccess) {
    return <HearingPostSuccess />;
  }

  if (isPostError)
    return <ErrorMessage message="予期せぬエラーが発生しました" />;

  if (hearings.length <= 0) {
    return (
      <FirstHearingContainer
        member={member}
        setNextFormId={setNextFormId}
        setCurrentAnswerNumber={setCurrentAnswerNumber}
        setSecondAnsweredHearings={setSecondAnsweredHearings}
        setFirstAnsweredHearings={setFirstAnsweredHearings}
        setIsBackTransition={setIsBackTransition}
        firstAnsweredHearings={firstAnsweredHearings}
        secondAnsweredHearings={secondAnsweredHearings}
        nextFormId={nextFormId}
        isPostLoading={isPostLoading}
        currentAnswerNumber={currentAnswerNumber}
        isBackTransition={isBackTransition}
        mutate={mutate}
      />
    );
  }

  return (
    <AfterSecondHearingContainer
      hearings={hearings}
      member={member}
      nextFormId={nextFormId}
      setNextFormId={setNextFormId}
      currentAnswerNumber={currentAnswerNumber}
      setCurrentAnswerNumber={setCurrentAnswerNumber}
      firstAnsweredHearings={firstAnsweredHearings}
      setFirstAnsweredHearings={setFirstAnsweredHearings}
      secondAnsweredHearings={secondAnsweredHearings}
      setSecondAnsweredHearings={setSecondAnsweredHearings}
      isBackTransition={isBackTransition}
      setIsBackTransition={setIsBackTransition}
      isPostLoading={isPostLoading}
      mutate={mutate}
    />
  );
};
