import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { ArrowIcon } from "./icons/ArrowIcon";

type Props = {
  children?: React.ReactNode;
  onClickComplete: () => void;
  onClickBack?: () => void;
  disabled?: boolean;
};

export const CompleteButton = ({
  children,
  onClickComplete,
  onClickBack,
  disabled,
}: Props) => (
  <div className="flex flex-row px-5 py-3">
    {onClickBack !== undefined ? (
      <IconButton onClick={onClickBack}>
        <ArrowIcon className="h-10 my-auto" />
      </IconButton>
    ) : (
      <></>
    )}
    <Button
      className={`grow ${onClickBack !== undefined ? "ml-3" : ""}`}
      onClick={onClickComplete}
      disabled={disabled}
    >
      {children}
    </Button>
  </div>
);
