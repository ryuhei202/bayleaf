import { SelectableButton } from "../../baseParts/SelectableButton";
import { Page } from "../../baseParts/legacy/Page";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  readonly title: string;
  readonly options: {
    id: number;
    name: string;
    imageFilePath?: string;
  }[];
  readonly selectedId?: number;
  readonly onClick: (id: number) => void;
  readonly onSubmit: () => void;
  readonly onCancel: () => void;
};
export const HearingSelectForm = ({
  title,
  options,
  selectedId,
  onClick,
  onSubmit,
  onCancel,
}: TProps) => {
  return (
    <Page className="flex flex-col">
      <Typography color="primary" className="mx-auto my-8 text-center">
        {title}
      </Typography>
      <div className="grid grid-cols-2 gap-4 mx-8">
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
      <Typography
        weight="regular"
        color="primary"
        className="mt-auto mb-8 underline underline-offset-1 text-center"
        size="sm"
        onClick={onCancel}
      >
        前に戻る
      </Typography>
    </Page>
  );
};
