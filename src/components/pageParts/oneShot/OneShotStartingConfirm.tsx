import { THearingAnswer } from "../../../models/hearing/THearingAnswer";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { Typography } from "../../baseParts/legacy/Typography";
import { FirstHearingConfirmButtons } from "../../resourceParts/hearing/FirstHearingConfirmButtons";
import { AnswerConfirm } from "../hearing/AnswerConfirm";

type TProps = {
  readonly confirmAnswers: THearingAnswer[];
  readonly deliveryDate: string;
  readonly isPostLoading: boolean;
  readonly handleSubmitComplete: () => void;
  readonly handleCancelForm: () => void;
  readonly handleClickReset: () => void;
};
export const OneShotStartingConfirm = ({
  confirmAnswers,
  deliveryDate,
  isPostLoading,
  handleSubmitComplete,
  handleCancelForm,
  handleClickReset,
}: TProps) => {
  const formatJaDate = ({ date }: { date: Date }): string => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <Page>
      <div className="px-4 mb-10 min-h-[calc(100vh-190px)]">
        <PageHeader title="入力の確認" />
        <div className="mx-1.5">
          <div className="bg-white mt-3 rounded-md overflow-hidden px-4 py-4">
            <Typography color="primary" size="2xl" className="mb-6">
              ご利用日
            </Typography>
            <Typography color="primary" className="mx-3 mb-4">
              {formatJaDate({ date: new Date(deliveryDate) })}
            </Typography>
            <Typography color="gray" className="mx-3 mb-4"></Typography>
          </div>
          {confirmAnswers.map((confirmAnswer, index) => (
            <AnswerConfirm
              answer={confirmAnswer.answer}
              coordinateNum={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">
        <FirstHearingConfirmButtons
          onClickComplete={handleSubmitComplete}
          onClickBack={handleCancelForm}
          onClickReset={handleClickReset}
          isPostLoading={isPostLoading}
        />
      </FooterWrapper>
    </Page>
  );
};
