import { TDressingItem } from "../../api/dressings/TDressingItem";
import { CoordinateItemImages } from "../baseParts/CoordinateItemImages";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly changeItems: TDressingItem[];
};
export const DressingChangeItem = ({ changeItems }: TProps) => {
  const items = changeItems.map((item) => {
    return {
      imagePaths: {
        defaultPath: item.imagePaths.largeThumb,
        expandedPath: item.imagePaths.large,
      },
      caption: `${item.cateSmallName} / ${item.color}`,
    };
  });
  return (
    <div>
      <Typography size="sm">チェンジアイテム</Typography>
      <Typography size="xs" color="strong-gray" className="mt-2 ml-2">
        ※利用したいシーンに合うアイテムでありながら、別のコーデとして楽しめるアイテムです！
      </Typography>
      <div className="my-5">
        <CoordinateItemImages items={items} />
      </div>
    </div>
  );
};
