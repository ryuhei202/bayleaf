import { SelectButton } from "../../../components/baseParts/legacy/SelectButton";
import { Typography } from "../../../components/baseParts/legacy/Typography";
import { TBottoms, TTops } from "../../../models/consult/SizePart";
import {
  ITEM_LENGTH_BUTTON,
  ITEM_SIZE_BUTTON,
} from "../../../models/consult/SizePartButton";

type TProps = {
  readonly item: {
    part: TTops | TBottoms;
    buttonType: typeof ITEM_SIZE_BUTTON | typeof ITEM_LENGTH_BUTTON;
  };
  readonly isSelected: (part: string, buttonType: string) => boolean;
  readonly onPartChanged: (part: string, buttonType: string) => void;
};

export const ItemPartSizeSelectButtons = ({
  item,
  isSelected,
  onPartChanged,
}: TProps) => {
  return (
    <div className="mt-4 flex justify-center px-6">
      <Typography className="my-auto flex-1">{item.part}</Typography>
      {Object.values(item.buttonType).map((buttonType, index) => (
        <SelectButton
          key={index}
          className="flex-1	 rounded-sm duration-75"
          selected={isSelected(item.part, buttonType)}
          onClick={() => onPartChanged(item.part, buttonType)}
        >
          <Typography size="sm" className="text-[12px]">
            {buttonType}
          </Typography>
        </SelectButton>
      ))}
    </div>
  );
};
