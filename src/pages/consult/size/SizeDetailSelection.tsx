import { useState } from "react";
import { Button } from "../../../components/baseParts/Button";
import { ExpandableImage } from "../../../components/baseParts/images/ExpandableImage";
import { TextAreaAlt } from "../../../components/baseParts/inputs/TextAreaAlt";
import { Page } from "../../../components/baseParts/Page";
import { SelectButton } from "../../../components/baseParts/SelectButton";
import { Typography } from "../../../components/baseParts/Typography";
import { RELATION_PART_AND_BUTTON } from "../../../models/consult/RelationPartAndButton";
import {
  ITEM_LENGTH_BUTTON,
  ITEM_SIZE_BUTTON,
} from "../../../models/consult/SizePartButton";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TSizeAnswer } from "../../../models/consult/TSizeAnswer";
import { TSizePart } from "../../../models/shared/TSizePart";
type TProps = {
  selectedItem: TConsultingItem;
  answeredItems: TSizeAnswer[];
  setAnsweredItems: React.Dispatch<React.SetStateAction<TSizeAnswer[]>>;
};

export const SizeDetailSelection = ({
  selectedItem,
  answeredItems,
  setAnsweredItems,
}: TProps) => {
  const [parts, setParts] = useState<TSizePart[]>([]);
  const [additionalText, setAdditionalText] =
    useState<string | undefined>(undefined);

  const onPartChanged = (buttonType: string, sizePart: string) => {
    const newParts = parts.filter((part) => part.name !== sizePart);
    if (buttonType === (ITEM_SIZE_BUTTON.FIT || ITEM_LENGTH_BUTTON.FIT)) {
      return setParts(newParts);
    }
    setParts([
      ...newParts,
      {
        name: sizePart,
        option: buttonType,
      },
    ]);
  };

  const isSelected = (part: string, buttonType: string): boolean => {
    if (buttonType === (ITEM_SIZE_BUTTON.FIT || ITEM_LENGTH_BUTTON.FIT)) {
      return !parts.map((part) => part.name).includes(part);
    } else {
      return parts.find((p) => p.name === part)?.option === buttonType;
    }
  };

  const onChangeText = (value: string) => {
    setAdditionalText(value);
  };

  const onSubmit = () => {
    setAnsweredItems([
      ...answeredItems,
      {
        item: selectedItem,
        parts,
        additionalText: additionalText || undefined,
      },
    ]);
  };

  return (
    <Page>
      <div className="px-5 py-5">
        <div className="w-[120px] ml-auto mr-auto">
          <ExpandableImage
            defaultImageSrc={selectedItem.imagePaths.largeThumb}
            ExpandedImageSrc={selectedItem.imagePaths.large}
          />
          <Typography
            className="mt-1 text-center"
            size="xs"
            color="primary"
            weight="medium"
          >
            {`${selectedItem.cateSmallName}／${selectedItem.color}`}
          </Typography>
        </div>
        <Typography className="mt-5">
          気になる部位のサイズを選択してください
        </Typography>
      </div>
      <div className="mt-5">
        {selectedItem.isTops
          ? Object.values(RELATION_PART_AND_BUTTON.TOPS).map((item) => (
              <div className="px-6 flex mt-4 ">
                <Typography className="w-[100px]">{item.part}</Typography>
                {Object.values(item.buttonType).map((buttonType) => (
                  <SelectButton
                    className="w-[115px] rounded-sm"
                    selected={isSelected(item.part, buttonType)}
                    onClick={() => onPartChanged(buttonType, item.part)}
                  >
                    <Typography size="sm" className="text-[12px]">
                      {buttonType}
                    </Typography>
                  </SelectButton>
                ))}
              </div>
            ))
          : Object.values(RELATION_PART_AND_BUTTON.BOTTOMS).map((item) => (
              <div className="px-6 flex mt-4 h-[50px]">
                <Typography className="w-[100px]">{item.part}</Typography>
                {Object.values(item.buttonType).map((buttonType) => (
                  <SelectButton
                    className="w-[115px] rounded-sm"
                    selected={isSelected(item.part, buttonType)}
                    onClick={() => onPartChanged(buttonType, item.part)}
                  >
                    <Typography size="sm">{buttonType}</Typography>
                  </SelectButton>
                ))}
              </div>
            ))}
      </div>
      <div className="px-5">
        <Typography>その他</Typography>
        <TextAreaAlt
          className="h-28"
          value={additionalText ?? ""}
          onChange={(event) => onChangeText(event.target.value)}
          placeholder="上記の選択肢にないサイズの気になる部位がある場合はご入力ください。"
        />
      </div>
      <div className="p-5">
        <Button
          onClick={onSubmit}
          disabled={parts.length || !!additionalText ? false : true}
        >
          次へ
        </Button>
      </div>
    </Page>
  );
};
