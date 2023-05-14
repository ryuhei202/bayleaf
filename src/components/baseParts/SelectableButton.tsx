import { useEffect } from "react";
import { Button } from "./Button";

type Props = {
  selected: boolean;
  disabled?: boolean;
  title?: string;
  className?: string;
  imageFilePath?: string;
  onClick?: () => void;
  onSelectTransitionEnd?: () => void;
};

export const SelectableButton = ({
  selected,
  title,
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
    >
      {imageFilePath && (
        <img
          src={imageFilePath}
          alt="selectable-button"
          className="mx-auto max-h-32 mb-2"
        />
      )}
      {title}
    </Button>
  );
};
