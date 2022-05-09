import React, { useState } from "react";
import { TCoordinateItemResponse } from "../../api/coordinates/TCoordinateItemResponse";
import { Button } from "../baseParts/Button";
import { SelectButtonImage } from "../baseParts/images/SelectButtonImage";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly items: TCoordinateItemResponse[];
  readonly title: React.ReactNode;
  readonly setSelectedItems: React.Dispatch<
    React.SetStateAction<TCoordinateItemResponse[]>
  >;
};
export const ConsultItemList = ({ items, title, setSelectedItems }: TProps) => {
  const [checkedItemsIndex, setCheckedItemsIndex] = useState<number[]>([]);
  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      setCheckedItemsIndex([...checkedItemsIndex, index]);
    } else {
      let newCheckedItemsIndex = [...checkedItemsIndex];
      setCheckedItemsIndex(newCheckedItemsIndex.filter((i) => i !== index));
    }
  };

  const onSubmit = () => {
    let selectedItems: TCoordinateItemResponse[] = [];
    items.map((item, index) => {
      if (checkedItemsIndex.includes(index)) selectedItems.push(item);
    });
    setSelectedItems(selectedItems);
  };

  return (
    <Page>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5">
          <PageHeader title={title} className="mb-8" />
          <Typography>気になるアイテムを選択してください</Typography>
          <div className="flex flex-wrap justify-evenly">
            {items.map((item, index) => (
              <div className="w-[120px]">
                <SelectButtonImage
                  className="space-x-2 mt-4 ml-auto mr-auto"
                  imageSrc={item.imagePaths.largeThumb}
                  value={""}
                  onChange={(event) => handleChange(index, event)}
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
        <div className="flex flex-col space-y-1 px-5 py-3">
          <Button onClick={onSubmit} disabled={checkedItemsIndex.length === 0}>
            次へ
          </Button>
        </div>
      </div>
    </Page>
  );
};
