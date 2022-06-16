import { Button } from "../../components/baseParts/Button";

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
        onClick={() => {
          if (window.confirm("最初からやり直しますか？")) {
            onClickReset();
          }
        }}
        disabled={isPostLoading}
      >
        最初からやり直す
      </Button>
    </>
  );
};
