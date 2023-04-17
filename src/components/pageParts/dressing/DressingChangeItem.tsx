import { TItemResponse } from "../../../api/shared/TItemResponse";
import { Typography } from "../../baseParts/legacy/Typography";
import { PurchaseItemCard } from "../buyItem/PurchaseItemCard";

type TProps = {
  readonly changeItems: TItemResponse[];
};
export const DressingChangeItem = ({ changeItems }: TProps) => {
  return (
    <div className="mb-16">
      <Typography size="xl">チェンジアイテム</Typography>
      <div className="border-[1px] border-gray my-5" />
      <Typography size="xs" color="strong-gray" className="mt-2 ml-2">
        ※利用したいシーンに合うアイテムでありながら、別のコーデとして楽しめるアイテムです！
      </Typography>
      <div className="my-5 space-y-2">
        {changeItems.map((item) => (
          <PurchaseItemCard
            {...item}
            brand={item.brandName}
            category={item.categoryName}
            color={item.colorName}
            imagePaths={{
              defaultPath: item.imagePaths.largeThumb,
              expandedPath: item.imagePaths.original,
            }}
          />
        ))}
      </div>
    </div>
  );
};
