import { useEffect, useState } from "react";
import { CompleteButton } from "../../../components/baseParts/legacy/CompleteButton";
import { ExpandableImage } from "../../../components/baseParts/legacy/images/ExpandableImage";
import { TextAreaAlt } from "../../../components/baseParts/legacy/inputs/TextAreaAlt";
import { Page } from "../../../components/baseParts/legacy/Page";
import { Typography } from "../../../components/baseParts/legacy/Typography";
import { RELATION_PART_AND_BUTTON_TYPE } from "../../../models/consult/RelationPartAndButtonType";
import {
  ITEM_LENGTH_BUTTON,
  ITEM_SIZE_BUTTON,
} from "../../../models/consult/SizePartButton";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TSizePart } from "../../../models/shared/TSizePart";
import { ItemPartSizeSelectButtons } from "./ItemPartSizeSelectButtons";
type TProps = {
  selectedItem: TConsultingItem;
  onSubmit: (parts: TSizePart[], additionalText: string | undefined) => void;
  onCancel: () => void;
};

export const SizeDetailSelection = ({
  selectedItem,
  onSubmit,
  onCancel,
}: TProps) => {
  const [parts, setParts] = useState<TSizePart[]>([]);
  const [additionalText, setAdditionalText] =
    useState<string | undefined>(undefined);

  useEffect(() => {
    setParts([]);
    setAdditionalText(undefined);
  }, [selectedItem]);

  const onPartChanged = (sizePart: string, buttonType: string) => {
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

  const onTextChanged = (value: string) => {
    setAdditionalText(value);
  };

  const isSelected = (part: string, buttonType: string): boolean => {
    if (buttonType === (ITEM_SIZE_BUTTON.FIT || ITEM_LENGTH_BUTTON.FIT)) {
      return !parts.map((part) => part.name).includes(part);
    } else {
      return parts.find((p) => p.name === part)?.option === buttonType;
    }
  };

  return (
    <Page>
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="p-5 text-center">
            <div className="mx-auto w-[120px]">
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
                {`${selectedItem.categoryName}／${selectedItem.colorName}`}
              </Typography>
            </div>
            <Typography className="mt-5">
              気になる部位のサイズを選択してください
            </Typography>
          </div>
          <div className="mt-5">
            {selectedItem.isTops
              ? Object.values(RELATION_PART_AND_BUTTON_TYPE.TOPS).map(
                  (item) => (
                    <ItemPartSizeSelectButtons
                      key={item.part}
                      item={item}
                      isSelected={isSelected}
                      onPartChanged={onPartChanged}
                    />
                  )
                )
              : Object.values(RELATION_PART_AND_BUTTON_TYPE.BOTTOMS).map(
                  (item) => (
                    <ItemPartSizeSelectButtons
                      key={item.part}
                      item={item}
                      isSelected={isSelected}
                      onPartChanged={onPartChanged}
                    />
                  )
                )}
          </div>
          <div className="px-5">
            <Typography>その他</Typography>
            <TextAreaAlt
              className="h-28"
              value={additionalText ?? ""}
              onChange={(event) => onTextChanged(event.target.value)}
              placeholder="上記の選択肢にないサイズの気になる部位がある場合はご入力ください。"
            />
          </div>
        </div>
        <CompleteButton
          onClickComplete={() => onSubmit(parts, additionalText)}
          disabled={parts.length || !!additionalText ? false : true}
          onClickBack={onCancel}
        >
          次へ
        </CompleteButton>
      </div>
    </Page>
  );
};
