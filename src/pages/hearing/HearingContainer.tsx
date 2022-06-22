import { useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { BeforeHearingConfirm } from "../../components/hearing/BeforeHearingConfirm";
import { HearingAnswerConfirm } from "../../components/hearing/HearingAnswerConfirm";
import { PremiumPlanConfirm } from "../../components/hearing/PremiumPlanConfirm";
import { HearingFormFetcher } from "./HearingFormFetcher";
import { HearingPostSuccess } from "./HearingPostSuccess";
import { useHearingContainerHandler } from "./handler/useHearingContainerHandler";
import { FirstHearingConfirmButtons } from "./FirstHearingConfirmButtons";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { M_PLAN_IDS } from "../../models/hearing/MPlanIds";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";

type TProps = {
  readonly member: TMembersIndexResponse;
};

export type AnsweredHearing = {
  readonly id: number;
  readonly title: string;
  readonly categoryName: string;
  readonly options: {
    id: number;
    text?: string;
    name: string;
  }[];
};

export const HearingContainer = ({ member }: TProps) => {
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [currentAnswerNumber, setCurrentAnswerNumber] = useState<1 | 2>(1);
  const [firstAnsweredHearings, setFirstAnsweredHearings] = useState<
    AnsweredHearing[]
  >([]);
  const [secondAnsweredHearings, setSecondAnsweredHearings] = useState<
    AnsweredHearing[]
  >([]);
  const [isBackTransition, setIsBackTransition] = useState<boolean>(false);

  const {
    handleClickFirstNext,
    handleClickPremiumNext,
    handleCancelPremiumNext,
    handleSubmitForm,
    handleCancelForm,
    formattedConfirmAnswers,
    handleSubmitComplete,
    handleClickReset,
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

  if (member.isAlreadyHearing) {
    return (
      <Page>
        <PageHeader
          title="既に回答済みです。"
          className="m-4"
          subtitle="スタイリストが対応しますので、少々お待ちください。"
        />
      </Page>
    );
  }
  if (isPostSuccess) {
    return <HearingPostSuccess />;
  }

  if (isPostError)
    return <ErrorMessage message="予期せぬエラーが発生しました" />;

  if (nextFormId === null) {
    if (firstAnsweredHearings.length <= 0) {
      return (
        <BeforeHearingConfirm
          onClick={handleClickFirstNext}
          planId={member.mPlanId}
        />
      );
    }
    return member.mPlanId === M_PLAN_IDS.PREMIUM &&
      secondAnsweredHearings.length <= 0 ? (
      <PremiumPlanConfirm
        onClick={handleClickPremiumNext}
        onCancel={handleCancelPremiumNext}
      />
    ) : (
      <HearingAnswerConfirm
        title="ヒアリング確認画面"
        confirmAnswers={formattedConfirmAnswers()}
        footer={
          <FirstHearingConfirmButtons
            onClickComplete={handleSubmitComplete}
            onClickBack={handleCancelForm}
            onClickReset={handleClickReset}
            isPostLoading={isPostLoading}
          />
        }
      />
    );
  }

  return (
    <HearingFormFetcher
      onSubmitForm={handleSubmitForm}
      onCancelForm={handleCancelForm}
      nextFormId={nextFormId}
      previousAnsweredHearing={
        currentAnswerNumber === 1
          ? firstAnsweredHearings.slice(-1)[0]
          : secondAnsweredHearings.slice(-1)[0]
      }
      isBackTransition={isBackTransition}
      member={member}
    />
  );
};
