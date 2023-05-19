import { Button } from "../../baseParts/Button";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { IconButton } from "../../baseParts/legacy/IconButton";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { Typography } from "../../baseParts/legacy/Typography";
import { ArrowIcon } from "../../baseParts/legacy/icons/ArrowIcon";
import { DottedList } from "../../baseParts/lists/DottedList";

type TProps = {
  readonly topsChoice: string;
  readonly bottomsChoice: string;
  readonly waistChoice: string;
  readonly hipChoice: string;
  readonly shoulderChoice: string;
  readonly bustChoice: string;
  readonly imageSrc?: string;
  readonly onSubmit: () => void;
  readonly onClickBack: () => void;
};

export const HearingAboutSizeConfirm = ({
  topsChoice,
  bottomsChoice,
  waistChoice,
  hipChoice,
  shoulderChoice,
  bustChoice,
  imageSrc,
  onSubmit,
  onClickBack,
}: TProps) => {
  const listItems = [
    { question: "トップス", answer: topsChoice },
    { question: "ボトムス", answer: bottomsChoice },
    { question: "ウエスト", answer: waistChoice },
    { question: "ヒップ", answer: hipChoice },
    { question: "肩幅", answer: shoulderChoice },
    { question: "胸囲", answer: bustChoice },
    {
      question: "全身写真",
      answer: imageSrc ? (
        <img src={imageSrc} alt="コーデ画像" className="w-3/4" />
      ) : (
        "画像がありません"
      ),
    },
  ];
  return (
    <Page>
      <div className="flex flex-col h-screen px-5">
        <PageHeader
          title={<>このサイズ情報で登録しますか？</>}
          className="mb-8"
        />
        <DottedList listItems={listItems} />
      </div>
      <FooterWrapper className="px-3 py-4 ">
        <div className="flex flex-row">
          <IconButton className="flex-none" onClick={onClickBack}>
            <ArrowIcon className="h-10 my-auto" />
          </IconButton>
          <Button size="none" className="grow ml-3" onClick={onSubmit}>
            <Typography className="my-auto">登録する</Typography>
          </Button>
        </div>
      </FooterWrapper>
    </Page>
  );
};
