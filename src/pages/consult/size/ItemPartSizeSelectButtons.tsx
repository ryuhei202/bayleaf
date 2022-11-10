import { SelectButton } from "../../../components/baseParts/SelectButton";
import { Typography } from "../../../components/baseParts/Typography";
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
    <div className="px-6 flex mt-4 justify-center">
      <Typography className="flex-1 mt-auto mb-auto">{item.part}</Typography>
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
