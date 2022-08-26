import { useState } from "react";
import { Button } from "../../components/baseParts/Button";
import { ConfirmDialog } from "../../components/baseParts/ConfirmDialog";

type TProps = {
  readonly onClickComplete: () => void;
  readonly onClickBack: () => void;
  readonly onClickReset: () => void;
  readonly isPostLoading: boolean;
};
export const FirstHearingConfirmButtons = ({
  onClickComplete,
  onClickBack,
  onClickReset,
  isPostLoading,
}: TProps) => {
  const [isOpenReset, setIsOpenReset] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={onClickComplete}
        disabled={isPostLoading}
        border={true}
      >
        ヒアリングを完了する
      </Button>
      <Button
        onClick={onClickBack}
        disabled={isPostLoading}
        variant="default"
        disableElevation
        border
      >
        ひとつ前に戻る
      </Button>
      <Button
        variant="text"
        onClick={() => setIsOpenReset(true)}
        disabled={isPostLoading}
      >
        最初からやり直す
      </Button>
      <ConfirmDialog
        open={isOpenReset}
        onClose={() => setIsOpenReset(false)}
        title="最初からやり直しますか？"
        onClickOk={() => {
          setIsOpenReset(false);
          onClickReset();
        }}
        onClickCancel={() => setIsOpenReset(false)}
      />
    </>
  );
};
