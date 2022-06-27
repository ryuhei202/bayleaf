import { useState } from "react";
import { THearing } from "../../api/hearings/THearing";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { AfterSecondHearingContainer } from "./AfterSecondHearingContainer";
import { FirstHearingContainer } from "./FirstHearingContainer";
import { useHearingContainerHandler } from "./handler/useHearingContainerHandler";
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
    handleSubmitForm,
    handleCancelForm,
    formattedConfirmAnswers,
    handleSubmitComplete,
    handleClickReset,
    removeLastAnswer,
    isPostLoading,
    isPostSuccess,
    isPostError,
  } = useHearingContainerHandler({
    memberId: member.id,
    firstAnsweredHearings,
    secondAnsweredHearings,
    currentAnswerNumber,
    setNextFormId,
    setFirstAnsweredHearings,
    setCurrentAnswerNumber,
    setSecondAnsweredHearings,
    setIsBackTransition,
  });

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
        firstAnsweredHearings={firstAnsweredHearings}
        secondAnsweredHearings={secondAnsweredHearings}
        removeLastAnswer={removeLastAnswer}
        nextFormId={nextFormId}
        formattedConfirmAnswers={formattedConfirmAnswers}
        handleSubmitComplete={handleSubmitComplete}
        handleCancelForm={handleCancelForm}
        handleClickReset={handleClickReset}
        isPostLoading={isPostLoading}
        handleSubmitForm={handleSubmitForm}
        currentAnswerNumber={currentAnswerNumber}
        isBackTransition={isBackTransition}
      />
    );
  }

  return (
    <></>
    // <AfterSecondHearingContainer
    //   hearings={hearings}
    //   nextFormId={nextFormId}
    //   setNextFormId={setNextFormId}
    //   currentAnswerNumber={currentAnswerNumber}
    //   setCurrentAnswerNumber={setCurrentAnswerNumber}
    //   firstAnsweredHearings={firstAnsweredHearings}
    //   setFirstAnsweredHearings={setFirstAnsweredHearings}
    //   secondAnsweredHearings={secondAnsweredHearings}
    //   setSecondAnsweredHearings={setSecondAnsweredHearings}
    //   isBackTransition={isBackTransition}
    //   setIsBackTransition={setIsBackTransition}
    //   handleSubmitForm={handleSubmitForm}
    //   handleCancelForm={handleCancelForm}
    //   formattedConfirmAnswers={formattedConfirmAnswers}
    //   handleSubmitComplete={handleSubmitComplete}
    //   handleClickReset={handleClickReset}
    //   isPostLoading={isPostLoading}
    // />
  );
};
