import { THearingAnswer } from "../../../models/hearing/THearingAnswer";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { Typography } from "../../baseParts/legacy/Typography";
import { AnswerConfirm } from "./AnswerConfirm";

type TProps = {
  readonly title: string;
  readonly subTitle?: string;
  readonly confirmAnswers: THearingAnswer[];
  readonly coordinateNum?: number;
  readonly isSelectableBRank?: boolean;
  readonly footer: JSX.Element;
};

export const HearingAnswerConfirm = ({
  title,
  subTitle,
  confirmAnswers,
  coordinateNum,
  isSelectableBRank,
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
          {isSelectableBRank !== undefined && (
            <div className="bg-white mt-3 rounded-md overflow-hidden px-4 py-4">
              <Typography color="primary" size="2xl">
                Bランクを希望しますか？
              </Typography>
              <Typography color="primary" className="mt-2 ml-2">
                {isSelectableBRank ? "希望する" : "希望しない"}
              </Typography>
            </div>
          )}
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">{footer}</FooterWrapper>
    </Page>
  );
};
