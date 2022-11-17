import { useState } from "react";
import { DropdownMenuAlt } from "../../../components/baseParts/legacy/inputs/DropdownMenuAlt";
import { TextAreaAlt } from "../../../components/baseParts/legacy/inputs/TextAreaAlt";
import { Page } from "../../../components/baseParts/legacy/Page";
import { PageHeader } from "../../../components/baseParts/legacy/PageHeader";
import { CompleteButton } from "../../../components/baseParts/legacy/CompleteButton";
import { Typography } from "../../../components/baseParts/legacy/Typography";
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
  readonly onSubmit: (personalItem: TPersonalItem) => void;
  readonly onCancel: () => void;
};

export const CombinationItemDetailSelection = ({
  itemCategory,
  onSubmit,
  onCancel,
}: TProps) => {
  const [cateSmallName, setCateSmallName] =
    useState<TCombinationDetails | undefined>(undefined);
  const [color, setColor] = useState<TColors | undefined>(undefined);
  const [pattern, setPattern] = useState<TPatterns | undefined>(undefined);
  const [additionalText, setAdditionalText] =
    useState<string | undefined>(undefined);

  const isInComplete = !(cateSmallName && color && pattern);
  const isTextEmptyOther =
    !additionalText &&
    (cateSmallName === CombinationItemDetails.OTHER.OTHERS ||
      color === COLORS.OTHER ||
      pattern === PATTERNS.OTHER);

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
          <div className="mt-5">
            <Typography color="strong-gray">
              {itemCategory}のカテゴリ（必須）
            </Typography>
            <DropdownMenuAlt
              value={cateSmallName || ""}
              placeholder="詳細のカテゴリを選択"
              onChange={(event) =>
                setCateSmallName(event.target.value as TCombinationDetails)
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
              value={color || ""}
              placeholder="アイテムの色を選択"
              onChange={(event) => setColor(event.target.value as TColors)}
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
              value={pattern || ""}
              placeholder="詳細のカテゴリを選択"
              onChange={(event) => setPattern(event.target.value as TPatterns)}
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
              value={additionalText || ""}
              onChange={(event) => setAdditionalText(event.target.value)}
              placeholder="スニーカーのブランドはスタンスミスです"
            />
          </div>
        </div>
        <CompleteButton
          onClickComplete={() =>
            onSubmit({
              cateSmallName: cateSmallName!,
              color: color!,
              pattern: pattern!,
              additionalText,
            })
          }
          disabled={isInComplete || isTextEmptyOther}
          onClickBack={onCancel}
        >
          完了
        </CompleteButton>
      </div>
    </Page>
  );
};
