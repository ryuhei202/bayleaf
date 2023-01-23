import { useState } from "react";
import { Button } from "../../baseParts/Button";
import { ConfirmDialog } from "../../baseParts/dialogs/ConfirmDialog";

type TProps = {
  readonly onClickComplete: () => void;
  readonly onClickBack: () => void;
  readonly isPostLoading: boolean;
  readonly completeButtonText?: string;
};
export const HearingConfirmButtons = ({
  onClickComplete,
  onClickBack,
  isPostLoading,
  completeButtonText,
}: TProps) => {
  const [isOpenCreateConfirm, setIsOpenCreateConfirm] = useState(false);
  return (
    <>
      <Button
        variant="default"
        onClick={() => setIsOpenCreateConfirm(true)}
        disabled={isPostLoading}
      >
        {completeButtonText || "ヒアリングを完了する"}
      </Button>
      <Button onClick={onClickBack} variant="line">
        ひとつ前に戻る
      </Button>
      <ConfirmDialog
        open={isOpenCreateConfirm}
        onClose={() => setIsOpenCreateConfirm(false)}
        title="次のコーディネートはこのヒアリングをもとに作成します。よろしいですか？"
        onClickOk={() => {
          setIsOpenCreateConfirm(false);
          onClickComplete();
        }}
        onClickCancel={() => setIsOpenCreateConfirm(false)}
        isLoading={isPostLoading}
      />
    </>
  );
};
