import { SelectButton } from "../../../components/baseParts/SelectButton";
import { Typography } from "../../../components/baseParts/Typography";
import { BOTTOMS_TYPE, TOPS_TYPE } from "../../../models/consult/SizePart";
import {
  ITEM_LENGTH_BUTTON,
  ITEM_SIZE_BUTTON,
} from "../../../models/consult/SizePartButton";

type TProps = {
  readonly item: {
    part: TOPS_TYPE | BOTTOMS_TYPE;
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
    <>
      {Object.values(item.buttonType).map((buttonType) => (
        <SelectButton
          className="w-[115px] rounded-sm"
          selected={isSelected(item.part, buttonType)}
          onClick={() => onPartChanged(item.part, buttonType)}
        >
          <Typography size="sm" className="text-[12px]">
            {buttonType}
          </Typography>
        </SelectButton>
      ))}
    </>
  );
};
