import { Button } from "../../baseParts/Button";

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
  return (
    <>
      <Button
        variant="default"
        onClick={onClickComplete}
        disabled={isPostLoading}
      >
        {completeButtonText || "ヒアリングを完了する"}
      </Button>
      <Button onClick={onClickBack} variant="line">
        ひとつ前に戻る
      </Button>
    </>
  );
};
