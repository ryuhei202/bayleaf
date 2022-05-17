import { Button } from "../../../components/baseParts/Button";
import { DropdownMenuAlt } from "../../../components/baseParts/inputs/DropdownMenuAlt";
import { TextAreaAlt } from "../../../components/baseParts/inputs/TextAreaAlt";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";
import { Typography } from "../../../components/baseParts/Typography";
import { TCombinationItemCategory } from "../../../models/consult/TCombinationItemCategory";
import {
  CombinationItemDetails,
  TCombinationDetails,
} from "../../../models/consult/TCombinationItemDetails";
import { TPersonalItem } from "../../../models/consult/TPersonalItem";
import { COLORS, TColors } from "../../../models/shared/TColors";
import { PATTERNS, TPatterns } from "../../../models/shared/TPatterns";

type TProps = {
  readonly itemCategory: TCombinationItemCategory;
  readonly personalItem: TPersonalItem;
  readonly onSubmit: (personalItem: TPersonalItem) => void;
  readonly onCategoryChange: (cateSmallName: TCombinationDetails) => void;
  readonly onColorChange: (color: TColors) => void;
  readonly onPatternChange: (pattern: TPatterns) => void;
  readonly onTextChange: (additionalText: string) => void;
};

export const CombinationItemDetailSelection = ({
  itemCategory,
  personalItem,
  onSubmit,
  onCategoryChange,
  onColorChange,
  onPatternChange,
  onTextChange,
}: TProps) => {
  const isDisabled = (): boolean => {
    if (
      !(
        personalItem.cateSmallName &&
        personalItem.color &&
        personalItem.pattern
      )
    )
      return true;
    if (
      !personalItem.additionalText &&
      (personalItem.cateSmallName === CombinationItemDetails.OTHER.OTHERS ||
        personalItem.color === COLORS.OTHER ||
        personalItem.pattern === PATTERNS.OTHER)
    )
      return true;
    return false;
  };

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
        <div className="mt-5">
          <Typography color="strong-gray">
            {itemCategory}のカテゴリ（必須）
          </Typography>
          <DropdownMenuAlt
            value={personalItem.cateSmallName || ""}
            placeholder="詳細のカテゴリを選択"
            onChange={(event) =>
              onCategoryChange(event.target.value as TCombinationDetails)
            }
          >
            {Object.values(
              CombinationItemDetails.getItemDetails(itemCategory)
            ).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option
              key={CombinationItemDetails.OTHER.OTHERS}
              value={CombinationItemDetails.OTHER.OTHERS}
            >
              {CombinationItemDetails.OTHER.OTHERS}
            </option>
          </DropdownMenuAlt>
        </div>
        <div className="mt-5">
          <Typography color="strong-gray">
            {itemCategory}の色（必須）
          </Typography>
          <DropdownMenuAlt
            value={personalItem.color || ""}
            placeholder="アイテムの色を選択"
            onChange={(event) => onColorChange(event.target.value as TColors)}
          >
            {Object.values(COLORS).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </DropdownMenuAlt>
        </div>
        <div className="mt-5">
          <Typography color="strong-gray">
            {itemCategory}の柄（必須）
          </Typography>
          <DropdownMenuAlt
            value={personalItem.pattern || ""}
            placeholder="詳細のカテゴリを選択"
            onChange={(event) =>
              onPatternChange(event.target.value as TPatterns)
            }
          >
            {Object.values(PATTERNS).map((pattern) => (
              <option key={pattern} value={pattern}>
                {pattern}
              </option>
            ))}
          </DropdownMenuAlt>
        </div>
        <div className="mt-5">
          <Typography>詳細情報（その他を選択した場合は必須）</Typography>
          <TextAreaAlt
            className="h-[150px]"
            value={personalItem.additionalText || ""}
            onChange={(event) => onTextChange(event.target.value)}
            placeholder="スニーカーのブランドはスタンスミスです"
          />
        </div>
        <div>
          <Button
            onClick={() => onSubmit(personalItem)}
            variant="primary"
            className="my-5"
            disabled={isDisabled()}
          >
            完了
          </Button>
        </div>
      </div>
    </Page>
  );
};
