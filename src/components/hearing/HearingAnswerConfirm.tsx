import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import { FooterWrapper } from "../baseParts/FooterWrapper";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { AnswerConfirm } from "./AnswerConfirm";

type TProps = {
  readonly title: string;
  readonly confirmAnswers: THearingAnswer[];
  readonly footer: JSX.Element;
};

export const HearingAnswerConfirm = ({
  title,
  confirmAnswers,
  footer,
}: TProps) => {
  return (
    <Page>
      <div className="px-2 mb-10">
        <PageHeader title={title} />
        <div className="mx-1.5">
          {confirmAnswers.map((confirmAnswer, index) => (
            <AnswerConfirm answer={confirmAnswer.answer} index={index} />
          ))}
        </div>
      </div>
      <FooterWrapper className="px-3 py-4 fixed">{footer}</FooterWrapper>
    </Page>
  );
};
