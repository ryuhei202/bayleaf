import { Button } from "../../../components/baseParts/Button";
import { DropdownMenuAlt } from "../../../components/baseParts/inputs/DropdownMenuAlt";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";
import { Typography } from "../../../components/baseParts/Typography";
import {
  COMBINATION_FORM,
  TCombiantionForm,
} from "../../../models/consult/TCombinationForm";
import {
  COMBINATION_ITEM_CATEGORY,
  TCombinationItemCategory,
} from "../../../models/consult/TCombinationItemCategory";

type TProps = {
  readonly setCurrentFormType: React.Dispatch<
    React.SetStateAction<TCombiantionForm>
  >;
  readonly itemCategory: TCombinationItemCategory | "";
  readonly setItemCategory: React.Dispatch<
    React.SetStateAction<TCombinationItemCategory | "">
  >;
};

export const CombinationItemCategorySelection = ({
  setCurrentFormType,
  itemCategory,
  setItemCategory,
}: TProps) => {
  return (
    <Page>
      <div className="flex flex-col h-full px-5">
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
        <Typography color="strong-gray">アイテムのカテゴリ（必須）</Typography>

        <DropdownMenuAlt
          value={itemCategory}
          placeholder="アイテムのカテゴリを選択"
          onChange={(event) =>
            setItemCategory(
              (event.target.value as TCombinationItemCategory) || ""
            )
          }
        >
          {Object.values(COMBINATION_ITEM_CATEGORY).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </DropdownMenuAlt>
        <div>
          <Button
            onClick={() => setCurrentFormType(COMBINATION_FORM.ITEM_DETAIL)}
            variant="primary"
            className="my-5"
            disabled={itemCategory === ""}
          >
            次へ
          </Button>
        </div>
      </div>
    </Page>
  );
};
