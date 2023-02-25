import { Document, Page, StyleSheet } from "@react-pdf/renderer";

type TReceiptDetails = {
  title: string;
  priceTaxIn: number;
}[];

type TProps = {
  //追加しなければいけないProps
  memberPaymentId: number;
  receiptCreatedAt: string;
  useingPoint: number;
  //ここまで
  receiptDetails: TReceiptDetails;
  cardBrand: string;
  cardNumber: string;
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export const Receipts = ({
  memberPaymentId,
  receiptCreatedAt,
  receiptDetails,
  cardBrand,
  cardNumber,
  useingPoint,
}: TProps) => {
  const date = new Date(receiptCreatedAt);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}年${month}月${day}日`;

  const getTotalPrice = (receiptDetails: TReceiptDetails) => {
    let totalPrice = 0;
    receiptDetails.map((receipt) => {
      totalPrice += receipt.priceTaxIn;
    });
    return totalPrice;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div className="text-[1px] flex flex-col text-center w-90">
          {/* div1 */}
          <div>
            <div className="">
              発行日 : <span>{formattedDate}</span>
            </div>
            <h2 className="text-[14px] font-bold">{`領収書　(注文番号 :${memberPaymentId})`}</h2>
            <div className="underline text-[#428bca]">
              印刷してご利用ください
            </div>
          </div>
          {/* div2 */}
          <div className="">
            <div className="w-1/2 float-left text-left">
              <table>
                <span className="font-bold">注文日 </span>
                <span>: {formattedDate} </span>
                <br />
                <span className="font-bold">注文番号 </span>
                <span> : {memberPaymentId} </span>
                <br />
                <span className="font-bold">
                  ご請求額 : ¥
                  {(
                    getTotalPrice(receiptDetails) - useingPoint
                  ).toLocaleString()}
                </span>
              </table>
            </div>
            <div className="w-1/2 float-left font-bold text-right underline">
              　　　　　　　　　　　　様
            </div>
          </div>
          <br />
          {/* div3 */}
          <div className="">
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
          {/* div4 */}
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
                {/* 合計を計算する関数を書きまーす */}
                商品の小計 : ¥{getTotalPrice(receiptDetails).toLocaleString()}
                <br />
                -----
                <br />
                {/* ご利用ぽいんとがpropsに必要ですねーい */}
                ご利用ポイント : {useingPoint}
                <br /> -----
                <br />
                <span className="font-bold">
                  {/* 商品の小計 - ご利用ポイント */}
                  ご請求額 : ¥
                  {(
                    getTotalPrice(receiptDetails) - useingPoint
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          {/* div5 */}
          <div className="mt-[30px] text-[10px]">© {year} Uwear</div>
        </div>
      </Page>
    </Document>
  );
};
