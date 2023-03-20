import React from "react";

type TReceiptDetails = {
  title: string;
  priceTaxIn: number;
}[];

type TProps = {
  memberPaymentId: string;
  receiptCreatedAt: string;
  usingPoint: number;
  receiptDetails: TReceiptDetails;
  cardBrand: string;
  cardNumber: string;
  finalPrice: number;
};
export const Receipts = React.forwardRef<HTMLDivElement, TProps>(
  (
    {
      memberPaymentId,
      receiptCreatedAt,
      receiptDetails,
      cardBrand,
      cardNumber,
      usingPoint,
      finalPrice,
    },
    ref
  ) => {
    const formattedDate = receiptCreatedAt?.replace(
      /^(\d{4})-(\d{2})-(\d{2}).*$/,
      "$1年$2月$3日"
    );

    const getTotalPrice = (receiptDetails: TReceiptDetails) => {
      let totalPrice = 0;
      receiptDetails.forEach((receipt) => {
        totalPrice += receipt.priceTaxIn;
      });
      return totalPrice;
    };

    return (
      <div className="text-[1px] flex flex-col text-center w-90 p-5" ref={ref}>
        <div>
          <div>
            発行日 : <span>{formattedDate}</span>
          </div>
          <h2 className="text-[14px] font-bold">{`領収書 (注文番号 :${memberPaymentId})`}</h2>
        </div>

        <div className="mt-5">
          <div className="w-1/2 float-left text-left">
            <span className="font-bold">注文日 </span>
            <span>: {formattedDate} </span>
            <br />
            <span className="font-bold">注文番号 </span>
            <span> : {memberPaymentId} </span>
            <br />
            <span className="font-bold">
              ご請求額 : ¥{finalPrice.toLocaleString()}
            </span>
          </div>
          <div className="w-1/2 float-left font-bold text-right border-b">
            様
          </div>
        </div>
        <br />

        <div>
          <h2 className="text-[12px] font-bold mb-1">支払い内容</h2>
          <div>
            <div className="float-left w-3/5 text-left">
              <span className="font-bold">注文商品</span>
            </div>
            <div className="float-left w-2/5 text-right">
              <span className="font-bold">価格</span>
            </div>
          </div>
          <div>
            {receiptDetails.map((receipt, index) => {
              return (
                <div className="" key={index}>
                  <div className="float-left w-3/5 text-left mb-2">
                    {receipt.title}
                  </div>
                  <div className="float-left w-2/5 text-right">
                    ¥{receipt.priceTaxIn.toLocaleString()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-[12px] font-bold mb-1">支払い情報</h2>
          <div className="float-left text-left">
            <span className="font-bold">支払い方法 (クレジットカード)</span>
          </div>
          <br />

          <div>
            <div className="float-left w-3/5 text-left">
              {cardBrand ?? "-"} | {cardNumber ?? "-"}
            </div>
            <div className="float-left w-2/5 text-right">
              商品の小計 : ¥{getTotalPrice(receiptDetails).toLocaleString()}
              <br />
              -----
              <br />
              ご利用ポイント : {usingPoint}
              <br /> -----
              <br />
              <span className="font-bold">
                ご請求額 : ¥{finalPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[10px] text-[10px]">
          <>© {new Date().getFullYear()} Uwear</>
        </div>
      </div>
    );
  }
);
