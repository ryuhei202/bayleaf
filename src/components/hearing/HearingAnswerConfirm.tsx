import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import { FooterWrapper } from "../baseParts/FooterWrapper";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { AnswerConfirm } from "./AnswerConfirm";

type TProps = {
  readonly title: string;
  readonly subTitle?: string;
  readonly confirmAnswers: THearingAnswer[];
  readonly coordinateNum?: number;
  readonly footer: JSX.Element;
};

export const HearingAnswerConfirm = ({
  title,
  subTitle,
  confirmAnswers,
  coordinateNum,
  footer,
}: TProps) => {
  return (
    <Page>
      <div className="px-2 mb-10 min-h-[calc(100vh-190px)]">
        <PageHeader title={title} subtitle={subTitle ?? ""} />
        <div className="mx-1.5">
          {confirmAnswers.map((confirmAnswer, index) => (
            <AnswerConfirm
              answer={confirmAnswer.answer}
              coordinateNum={coordinateNum ?? index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">{footer}</FooterWrapper>
    </Page>
  );
};
