import React, { useState } from "react";
import { SelectButtonImage } from "../../components/baseParts/legacy/images/SelectButtonImage";
import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { CompleteButton } from "../../components/baseParts/legacy/CompleteButton";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { TConsultingItem } from "../../models/consult/TConsultingItem";

type TProps = {
  readonly items: TConsultingItem[];
  readonly title: React.ReactNode;
  readonly onClickNext: (items: TConsultingItem[]) => void;
  readonly onCancel: () => void;
};
export const ConsultItemList = ({
  items,
  title,
  onClickNext,
  onCancel,
}: TProps) => {
  const [checkedItems, setCheckedItems] = useState<TConsultingItem[]>([]);
  const handleChange = (item: TConsultingItem, checked: Boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      let newCheckedItems = [...checkedItems];
      setCheckedItems(newCheckedItems.filter((i) => i.id !== item.id));
    }
  };

  const handleImageClick = (item: TConsultingItem) => {
    handleChange(item, !checkedItems.includes(item));
  };

  return (
    <Page>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5">
          <PageHeader title={title} className="mb-8" />
          <Typography>気になるアイテムを選択してください</Typography>
          <div className="flex flex-wrap justify-evenly">
            {items.map((item) => (
              <div className="w-[120px]" key={item.id}>
                <SelectButtonImage
                  className="space-x-2 mt-4 ml-auto mr-auto"
                  imageSrc={item.imagePaths.largeThumb}
                  value={""}
                  onChange={(event) => handleChange(item, event.target.checked)}
                  onImageClick={() => handleImageClick(item)}
                  checked={checkedItems.includes(item)}
                />
                <Typography
                  className="mt-1 text-center"
                  size="xs"
                  color="primary"
                  weight="medium"
                >
                  {`${item.cateSmallName}／${item.color}`}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <CompleteButton
          onClickComplete={() => onClickNext(checkedItems)}
          onClickBack={onCancel}
          disabled={checkedItems.length === 0}
        >
          次へ
        </CompleteButton>
      </div>
    </Page>
  );
};
