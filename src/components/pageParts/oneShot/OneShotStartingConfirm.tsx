import { useState } from "react";
import { THearingAnswer } from "../../../models/hearing/THearingAnswer";
import { OneShot } from "../../../models/shared/OneShot";
import { withTax } from "../../../models/shared/Tax";
import { ConfirmDialog } from "../../baseParts/dialogs/ConfirmDialog";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { Typography } from "../../baseParts/legacy/Typography";
import { Loader } from "../../baseParts/loaders/Loader";
import { HearingConfirmButtons } from "../../resourceParts/hearing/HearingConfirmButtons";
import { AnswerConfirm } from "../hearing/AnswerConfirm";
import { ScheduleDiagram } from "./ScheduleDiagram";

type TProps = {
  readonly confirmAnswer: THearingAnswer;
  readonly wearingDate: string;
  readonly isPostLoading: boolean;
  readonly isSelectableBRank: boolean;
  readonly onSubmit: () => void;
  readonly onCancelForm: () => void;
  readonly discountPrice?: number;
  readonly point?: number;
};

export const OneShotStartingConfirm = ({
  confirmAnswer,
  wearingDate,
  isPostLoading,
  isSelectableBRank,
  onSubmit,
  onCancelForm,
  discountPrice,
  point,
}: TProps) => {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

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
          <div className="bg-white mt-3 rounded-md overflow-hidden px-4 py-4">
            <Typography color="primary" size="2xl">
              Bランクを希望しますか？
            </Typography>
            <Typography color="primary" className="mt-2 ml-2">
              {isSelectableBRank ? "希望する" : "希望しない"}
            </Typography>
          </div>
        </div>
      </div>
      <FooterWrapper className="px-3 py-4">
        <HearingConfirmButtons
          onClickComplete={() => setIsConfirmDialogOpen(true)}
          onClickBack={onCancelForm}
          isPostLoading={isPostLoading}
          completeButtonText="単発利用を開始する"
        />
      </FooterWrapper>
      <ConfirmDialog
        open={isConfirmDialogOpen}
        title="支払手続き"
        isLoading={isPostLoading}
        description={
          isPostLoading ? (
            <Loader
              caption={
                <>
                  決済処理中
                  <br />
                  画面を閉じないでください
                </>
              }
            />
          ) : (
            <>
              <b>
                支払金額：
                {discountPrice
                  ? `¥${withTax(OneShot.price.withoutTax - discountPrice)}`
                  : `¥${OneShot.price.withTax}`}
                (税込)
                <br />
                付与ポイント：{point ? point + 300 : 300}ポイント
              </b>
              <br />
              <br />
              上記金額のお支払いが完了後、スタイリストから改めて『詳しくヒアリング』します。
            </>
          )
        }
        onClickOk={onSubmit}
        onClickCancel={() => setIsConfirmDialogOpen(false)}
        onClose={() => setIsConfirmDialogOpen(false)}
        okBtnText="支払内容確定"
      />
    </Page>
  );
};
