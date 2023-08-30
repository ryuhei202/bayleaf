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
      <div className="mb-10 min-h-[calc(100vh-190px)] px-2">
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
            <div className="mt-3 overflow-hidden rounded-md bg-white p-4">
              <Typography color="primary" size="2xl">
                Bランクを希望しますか？
              </Typography>
              <Typography color="primary" className="ml-2 mt-2">
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
