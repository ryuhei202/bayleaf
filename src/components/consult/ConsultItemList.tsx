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
  const [checkedItems, setCheckedItems] = useState<TCoordinateItemResponse[]>(
    []
  );
  const handleChange = (
    item: TCoordinateItemResponse,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      let newCheckedItems = [...checkedItems];
      setCheckedItems(newCheckedItems.filter((i) => i.id !== item.id));
    }
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
                  onChange={(event) => handleChange(item, event)}
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
          <Button
            onClick={() => setSelectedItems(checkedItems)}
            disabled={checkedItems.length === 0}
          >
            次へ
          </Button>
        </div>
      </div>
    </Page>
  );
};
