import { useState } from "react";
import { Button } from "../../../components/baseParts/Button";
import { DropdownMenuAlt } from "../../../components/baseParts/inputs/DropdownMenuAlt";
import { TextAreaAlt } from "../../../components/baseParts/inputs/TextAreaAlt";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";
import { Typography } from "../../../components/baseParts/Typography";
import { createCombinationConsultFlexMessage } from "../../../models/consult/flexMessage/createCombinationConsultFlexMessage";
import { TCombinationItemCategory } from "../../../models/consult/TCombinationItemCategory";
import {
  CombinationItemDetails,
  TCombinationBagDetails,
  TCombinationBottomsDetails,
  TCombinationHatDetails,
  TCombinationOuterDetails,
  TCombinationShoesDetails,
  TCombinationTopsDetails,
} from "../../../models/consult/TCombinationItemDetails";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { TPersonalItem } from "../../../models/consult/TPersonalItem";
import { COLORS, TColors } from "../../../models/shared/TColors";
import { PATTERNS, TPatterns } from "../../../models/shared/TPatterns";

type TProps = {
  readonly itemCategory: TCombinationItemCategory | undefined;
  readonly items: TConsultingItem[];
  readonly setFlexMessage: React.Dispatch<React.SetStateAction<string | null>>;
};

export const CombinationItemDetailSelection = ({
  itemCategory,
  items,
  setFlexMessage,
}: TProps) => {
  const [personalItem, setPersonalItem] = useState<TPersonalItem>({
    cateLargeName: itemCategory,
    cateSmallName: undefined,
    color: undefined,
    pattern: undefined,
    additionalText: undefined,
  });

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
  const onSubmit = () => {
    const itemImageUrls = items.map((item) => item.imagePaths.thumb);
    setFlexMessage(
      createCombinationConsultFlexMessage({ itemImageUrls, personalItem })
    );
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
            onChange={(event) => {
              setPersonalItem({
                ...personalItem,
                cateSmallName: event.target.value as
                  | TCombinationOuterDetails
                  | TCombinationTopsDetails
                  | TCombinationBottomsDetails
                  | TCombinationShoesDetails
                  | TCombinationBagDetails
                  | TCombinationHatDetails,
              });
            }}
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
            onChange={(event) =>
              setPersonalItem({
                ...personalItem,
                color: event.target.value as TColors,
              })
            }
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
              setPersonalItem({
                ...personalItem,
                pattern: event.target.value as TPatterns,
              })
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
            onChange={(event) =>
              setPersonalItem({
                ...personalItem,
                additionalText: event.target.value,
              })
            }
            placeholder="スニーカーのブランドはスタンスミスです"
          />
        </div>
        <div>
          <Button
            onClick={onSubmit}
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
