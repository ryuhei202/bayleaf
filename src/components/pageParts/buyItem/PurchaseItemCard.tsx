import { Typography } from "../../baseParts/legacy/Typography";
import { WideItemCard } from "../../resourceParts/item/WideItemCard";

type TProps = {
  imagePaths: { defaultPath: string; expandedPath: string };
  brand: string;
  category: string;
  color: string;
  discountRate: number;
  point?: number;
  discountedPrice: number;
  price: number;
  rank: string;
  className?: string;
};

export const PurchaseItemCard = ({
  imagePaths,
  brand,
  category,
  color,
  discountRate,
  point,
  discountedPrice,
  price,
  rank,
  className,
}: TProps) => {
  return (
    <WideItemCard imagePaths={imagePaths} className={className}>
      <div className="flex h-fit w-full flex-col justify-around space-y-2">
        <div>
          <Typography className="text-left" color="strong-gray" size="xl">
            {brand}
          </Typography>
          <Typography className="text-left leading-3" size="xs" color="gray">
            {category}/{color}
          </Typography>
        </div>
        <div>
          <Typography className="text-left" size="xs" color="gray">
            価格
          </Typography>

          <Typography className="text-left">
            <Typography isInline className="line-through" color="strong-gray">
              ￥{price.toLocaleString()}
            </Typography>
            <Typography isInline className="leading-3" color="red">
              ￥{discountedPrice.toLocaleString()}
              <span className="text-xs">({discountRate}OFF)</span>
            </Typography>
          </Typography>
        </div>
        {point && (
          <div>
            <Typography className="text-left" color="gray" size="xs">
              ポイント
            </Typography>
            <Typography className="text-left leading-4" color="strong-gray">
              {point}pt
            </Typography>
          </div>
        )}
        <div>
          <Typography className="text-left" color="gray" size="xs">
            ランク
          </Typography>
          <Typography className="text-left leading-4" color="strong-gray">
            {rank}
          </Typography>
        </div>
      </div>
    </WideItemCard>
  );
};
