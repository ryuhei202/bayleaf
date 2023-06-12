import { useState } from "react";
import { AlertDialog } from "../../baseParts/dialogs/AlertDialog";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { IconButton } from "../../baseParts/legacy/IconButton";
import { Page } from "../../baseParts/legacy/Page";
import { SelectButton } from "../../baseParts/legacy/SelectButton";
import { Typography } from "../../baseParts/legacy/Typography";
import { ArrowIcon } from "../../baseParts/legacy/icons/ArrowIcon";

type TProps = {
  readonly isSelectableBRank?: boolean;
  readonly onSelect: (isSelectable: boolean) => void;
  readonly onCancel: () => void;
};
export const RankSelectingForm = ({
  isSelectableBRank,
  onSelect,
  onCancel,
}: TProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <Page className="h-screen">
      <div className="flex flex-col justify-between h-screen">
        <div className="px-5 pb-5">
          <div>
            <Typography size="xl" className="my-8" color="primary">
              UWearでは、アイテムランク（アイテムの状態）ごとに購入料金の割引率が変わります。
              <br />
              Aランクのみ、Bランク混合のコーデどちらをご希望されますか？
            </Typography>
          </div>
          <div>
            <SelectButton
              selected={
                isSelectableBRank === undefined ? false : !isSelectableBRank
              }
              onClick={() => {
                if (isSelectableBRank !== undefined) return;
                onSelect(false);
              }}
            >
              Aランクでコーデを作ってほしい
            </SelectButton>
            <SelectButton
              selected={
                isSelectableBRank === undefined ? false : isSelectableBRank
              }
              onClick={() => {
                if (isSelectableBRank !== undefined) return;
                onSelect(true);
              }}
              className="mt-6"
            >
              Bランクアイテムがあれば、
              <br /> Bランク混合でコーデを作ってほしい
            </SelectButton>
            <Typography size="xs" color="gray" className="mt-2">
              ※必ずBランクをお届けするという保証ではございません。
            </Typography>
          </div>

          <Typography
            className="my-8 text-center underline"
            color="red"
            onClick={() => setIsDialogOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            Bランクとは
          </Typography>
        </div>
        <FooterWrapper className="px-3 py-4">
          <div className="flex flex-row">
            <IconButton
              className="flex-none"
              onClick={onCancel}
              dataTestId="rankFormBackBtnLabel"
            >
              <ArrowIcon className="h-10 my-auto" />
            </IconButton>
          </div>
        </FooterWrapper>
      </div>
      {isDialogOpen && (
        <AlertDialog
          open={isDialogOpen}
          title="Bランクとは？"
          description={
            <>
              少し使用感があり、比較的目立たない傷や汚れがあるアイテムです。
              <br />
              着用上問題ないと判断したアイテムを通常より安く購入できます。
              <br />
              <a
                href="https://one.uwear.jp/TRsT8tcJ/pzX3_7sf"
                className="font-bold underline"
                target="_blank"
                rel="noreferrer"
              >
                <br />
                詳しくはこちら
              </a>
            </>
          }
          onClose={() => setIsDialogOpen(false)}
          onClick={() => setIsDialogOpen(false)}
        />
      )}
    </Page>
  );
};
