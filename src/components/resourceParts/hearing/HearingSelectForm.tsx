import { SelectableButton } from "../../baseParts/SelectableButton";

type TProps = {
  readonly options: {
    id: number;
    name: string;
    imageFilePath?: string;
  }[];
  readonly selectedId?: number;
  readonly onClick: (id: number) => void;
  readonly onSubmit: () => void;
};
export const HearingSelectForm = ({
  options,
  selectedId,
  onClick,
  onSubmit,
}: TProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option) => (
        <SelectableButton
          key={option.id}
          onClick={() => onClick(option.id)}
          title={option.name}
          selected={selectedId === option.id}
          imageFilePath={option.imageFilePath}
          onSelectTransitionEnd={onSubmit}
        />
      ))}
    </div>
  );
};
