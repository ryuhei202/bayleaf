import { WideItemCard } from "../../resourceParts/item/WideItemCard";

type TProps = {
  imagePaths: { defaultPath: string; expandedPath: string };
  brand:string;
  category:string;
  color:string;
  discountRate:number;
  point:number;
  discountedPrice:number;
  price: number;
}

export const PurchaseItemInfo = ( {
  imagePaths,
  brand,
  category,
  color,
  discountRate,
  point,
  discountedPrice,
  price}: TProps) => {

    return(
      <WideItemCard imagePaths={imagePaths} categoryName={category} colorName={color}>
        <div>
          <h2>{brand}</h2>
          {category}/{color}
        </div>
        <br />
        <div>
          価格
          ￥{price}
          <br />
          ￥{discountedPrice}(税込 {discountRate}%OFF)
        </div>
      <br />
        <div>
          ポイント
          {point}pt
        </div>
      </WideItemCard>


    )
}