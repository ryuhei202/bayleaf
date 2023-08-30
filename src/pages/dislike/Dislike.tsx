import liff from "@line/liff";
import { useEffect, useState } from "react";
import { useDislikeCreate } from "../../api/dislikes/useDislikeCreate";
import { Button } from "../../components/baseParts/legacy/Button";
import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { SelectButton } from "../../components/baseParts/legacy/SelectButton";
import { Typography } from "../../components/baseParts/legacy/Typography";

const DISLIKE_OPTIONS = [
  "細かいチェック柄",
  "大き目のチェック柄",
  "ストライプ柄",
  "ボーダー柄",
  "タートル・ハイネック",
  "パーカー・トレーナー",
  "バンドカラーシャツ",
  "ベスト",
  "カーディガン",
];

export const Dislike = () => {
  useEffect(() => {
    document.title = "苦手アイテム | UWear";
  }, []);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const { mutate, isLoading } = useDislikeCreate();

  const handleSelect = (selectedIndex: number) => {
    const newSelectedIndexes = [...selectedIndexes];
    const index = selectedIndexes.indexOf(selectedIndex);
    if (index === -1) {
      newSelectedIndexes.push(selectedIndex);
    } else {
      newSelectedIndexes.splice(index, 1);
    }
    setSelectedIndexes(newSelectedIndexes);
  };

  return (
    <Page>
      <div className="mb-10 flex min-h-screen flex-col justify-between px-5">
        <div>
          <PageHeader
            title="トップスに対して苦手な柄やアイテムはありますか？"
            subtitle="※複数選択可"
            className="mb-16"
          />
          <div className="space-y-5">
            <SelectButton
              key="no-selection"
              selected={selectedIndexes.length === 0}
              onClick={() => setSelectedIndexes([])}
              className="mb-7"
            >
              特になし
            </SelectButton>
            {DISLIKE_OPTIONS.map((option, index) => (
              <SelectButton
                key={index}
                selected={selectedIndexes.indexOf(index) !== -1}
                onClick={() => handleSelect(index)}
              >
                {option}
              </SelectButton>
            ))}
          </div>
        </div>
      </div>
      <div className="flex bg-white px-5 py-3">
        <Button
          variant="primary"
          disableElevation
          onClick={() => {
            mutate(
              {
                dislikes: selectedIndexes.map(
                  (index) => DISLIKE_OPTIONS[index]
                ),
              },
              {
                onSuccess: () => {
                  liff.closeWindow();
                },
              }
            );
          }}
          isLoading={isLoading}
        >
          <Typography className="my-auto">完了</Typography>
        </Button>
      </div>
    </Page>
  );
};
