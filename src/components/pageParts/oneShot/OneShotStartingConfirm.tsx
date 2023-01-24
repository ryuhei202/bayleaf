import { THearingAnswer } from "../../../models/hearing/THearingAnswer";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { Typography } from "../../baseParts/legacy/Typography";
import { HearingConfirmButtons } from "../../resourceParts/hearing/HearingConfirmButtons";
import { AnswerConfirm } from "../hearing/AnswerConfirm";
import { ScheduleDiagram } from "./ScheduleDiagram";

type TProps = {
  readonly confirmAnswer: THearingAnswer;
  readonly wearingDate: string;
  readonly isPostLoading: boolean;
  readonly handleSubmitComplete: () => void;
  readonly handleCancelForm: () => void;
};
export const OneShotStartingConfirm = ({
  confirmAnswer,
  wearingDate,
  isPostLoading,
  handleSubmitComplete,
  handleCancelForm,
}: TProps) => {
  return (
    <Page>
      <div className="px-4 mb-10 min-h-[calc(100vh-190px)]">
        <PageHeader
          title="入力の確認"
          subtitle="この内容をもとにコーデを作成します"
        />
        <div className="mx-1.5">
          <div className="bg-white mt-3 rounded-md overflow-hidden px-4 py-4">
            <Typography color="primary" size="2xl" className="mb-6">
              レンタルスケジュール
            </Typography>
            <ScheduleDiagram wearDate={wearingDate} />
          </div>
          <AnswerConfirm answer={confirmAnswer.answer} />
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">
        <HearingConfirmButtons
          onClickComplete={handleSubmitComplete}
          onClickBack={handleCancelForm}
          isPostLoading={isPostLoading}
          completeButtonText="単発利用を開始する"
        />
      </FooterWrapper>
    </Page>
  );
};
