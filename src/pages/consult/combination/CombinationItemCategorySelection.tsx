import { useState } from "react";
import { DropdownMenuAlt } from "../../../components/baseParts/legacy/inputs/DropdownMenuAlt";
import { Page } from "../../../components/baseParts/legacy/Page";
import { PageHeader } from "../../../components/baseParts/legacy/PageHeader";
import { CompleteButton } from "../../../components/baseParts/legacy/CompleteButton";
import { Typography } from "../../../components/baseParts/legacy/Typography";
import {
  COMBINATION_ITEM_CATEGORY,
  TCombinationItemCategory,
} from "../../../models/consult/TCombinationItemCategory";

type TProps = {
  readonly itemCategory: TCombinationItemCategory | undefined;
  readonly onSubmit: (itemCategory: TCombinationItemCategory) => void;
  readonly onCancel: () => void;
};

export const CombinationItemCategorySelection = ({
  itemCategory,
  onSubmit,
  onCancel,
}: TProps) => {
  const [currentCategory, setCurrentCategory] = useState(itemCategory);
  return (
    <Page>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5">
          <PageHeader
            title={
              <>
                使いたいアイテムを
                <br />
                選択してください
              </>
            }
            className="mb-8"
          />
          <Typography color="strong-gray">
            アイテムのカテゴリ（必須）
          </Typography>
          <DropdownMenuAlt
            value={currentCategory || ""}
            placeholder="アイテムのカテゴリを選択"
            onChange={(event) =>
              setCurrentCategory(event.target.value as TCombinationItemCategory)
            }
          >
            {Object.values(COMBINATION_ITEM_CATEGORY).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </DropdownMenuAlt>
        </div>
        <CompleteButton
          onClickComplete={() =>
            currentCategory !== undefined ? onSubmit(currentCategory) : {}
          }
          disabled={currentCategory === undefined}
          onClickBack={onCancel}
        >
          次へ
        </CompleteButton>
      </div>
    </Page>
  );
};
