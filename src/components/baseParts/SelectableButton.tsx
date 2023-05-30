import { useEffect } from "react";
import { Button } from "./Button";

type Props = {
  readonly selected?: boolean;
  readonly disabled?: boolean;
  readonly title: string;
  readonly className?: string;
  readonly imageFilePath?: string;
  readonly onClick: () => void;
  readonly onSelectTransitionEnd: () => void;
};

export const SelectableButton = ({
  selected,
  title,
  disabled,
  className,
  imageFilePath,
  onSelectTransitionEnd,
  ...buttonProps
}: Props) => {
  const durationMs = 1000;
  const durationClass = "duration-1000";

  useEffect(() => {
    if (onSelectTransitionEnd !== undefined && selected)
      setTimeout(onSelectTransitionEnd, durationMs);
  }, [selected, onSelectTransitionEnd]);

  return (
    <Button
      className={`${className ?? ""} transition ${durationClass}`}
      variant={selected ? "default" : "light"}
      {...buttonProps}
      radius="small"
      disabled={disabled}
    >
      {imageFilePath && (
        <img
          src={imageFilePath}
          alt="selectable-button"
          className="mx-auto mb-2 max-w-[50%]"
        />
      )}
      {title}
    </Button>
  );
};
