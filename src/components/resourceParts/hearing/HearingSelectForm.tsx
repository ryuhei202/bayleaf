import { TPropertyRecord } from "../../../models/shared/TPropertyRecord";
import { SelectableButton } from "../../baseParts/SelectableButton";
import { Page } from "../../baseParts/legacy/Page";
import { Typography } from "../../baseParts/legacy/Typography";

export type TProps = {
  readonly key?: string;
  readonly title: string;
  readonly options: (TPropertyRecord & { imageFilePath?: string })[];
  readonly selectedId?: number;
  readonly onClick: (id: number) => void;
  readonly onSubmit: () => void;
  readonly onCancel: () => void;
};
export const HearingSelectForm = ({
  key,
  title,
  options,
  selectedId,
  onClick,
  onSubmit,
  onCancel,
}: TProps) => {
  return (
    <Page className="flex flex-col" key={key}>
      <Typography color="primary" className="mx-auto my-8 text-center">
        {title}
      </Typography>
      <div className="mx-8 grid grid-cols-2 gap-4">
        {options.map((option) => (
          <SelectableButton
            key={option.id}
            onClick={() => onClick(option.id)}
            title={option.name}
            selected={selectedId === option.id}
            disabled={selectedId !== undefined && selectedId !== option.id}
            imageFilePath={
              option.imageFilePath
                ? `${process.env.REACT_APP_HOST_URL}/${option.imageFilePath}`
                : undefined
            }
            onSelectTransitionEnd={onSubmit}
          />
        ))}
      </div>
      <Typography
        weight="regular"
        color="primary"
        className="mb-8 mt-auto text-center underline underline-offset-1"
        size="sm"
        onClick={onCancel}
      >
        前に戻る
      </Typography>
    </Page>
  );
};
