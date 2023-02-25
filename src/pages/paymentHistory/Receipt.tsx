import { Document, Page, StyleSheet } from "@react-pdf/renderer";

type TProps = {
  receiptDetails: {
    title: string;
    priceTaxIn: number;
  }[];
  cardBrand: String;
  cardNumber: String;
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
export const Receipts = ({ receiptDetails, cardBrand, cardNumber }: TProps) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate =
    year + "年" + ("0" + month).slice(-2) + "月" + ("0" + day).slice(-2) + "日";
  console.log(formattedDate);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div>
          <div className="header txt-right float-l">
            発行日 : <span>{formattedDate}</span>
          </div>
        </div>
        <br />
        <h2>領収書　(注文番号 :)</h2>
        {/* <%= @t_member_payment.payment_id %> */}
        <div className="text-[10px] underline text-[#428bca]">
          印刷してご利用ください
        </div>
        <div className="w-4/5 mx-auto mt-[40px] mb-0"></div>
        <div className="header float-l txt-left">
          <table>
            <span className="bold">注文日　 : </span>
            <br />
            <span className="bold">注文番号 : </span>
            <br />
            <span className="bold">ご請求額 : ¥{}</span>
          </table>
        </div>
        <div className="w-1/2 float-left bold text-right underline">
          　　　　　　　　　　様
        </div>
        <br />
        <h3>支払い内容</h3>
        <div>
          <div className="float-left w-3/5 text-left text-xs">
            <span className="bold">注文商品</span>
          </div>
          <div className="float-left w-2/5 text-right text-xs">
            <span className="bold">価格</span>
          </div>
        </div>
        <br />
        {receiptDetails.forEach((receipt) => {})}
        {/* <% @receipt_details.each do | detail | %>
    <div>
      <div className="detail-list-1"><%= detail.title %></div>
      <div className="detail-list-2">¥ <%= number_with_delimiter(detail.price_tax_in) %></div>
    </div><br clear="all" />
    <% end %> */}
      </Page>
    </Document>
  );
};

/* <div className="container">
  <div>
    <div className="header txt-right float-l">発行日 : <span>Date.today.strftime("%Y年%m月%d日")</span></div>
  </div>
  <br clear="all" />
  <h2>領収書　(注文番号 : <%= @t_member_payment.payment_id %>)</h2>
  <div className="note link">印刷してご利用ください</div>
  <div className="content">
    <div className="header float-l txt-left">
      <span className="bold">注文日　 : </span><%= @t_member_payment.created_at.strftime("%Y年%m月%d日") %><br>
      <span className="bold">注文番号 : </span><%= @t_member_payment.payment_id %><br>
      <span className="bold">ご請求額 : ¥ <%= number_with_delimiter(@t_member_payment.price_tax_in) %></span>
      </table>
    </div>
    <div className="name float-l bold txt-right underline">　　　　　　　　　　　　　　様</div>
    <br clear="all" />

    <h3>支払い内容</h3>
    <div>
      <div className="detail-list-1"><span className="bold">注文商品</span></div>
      <div className="detail-list-2"><span className="bold">価格</span></div>
    </div><br clear="all" />
    <% @receipt_details.each do | detail | %>
    <div>
      <div className="detail-list-1"><%= detail.title %></div>
      <div className="detail-list-2">¥ <%= number_with_delimiter(detail.price_tax_in) %></div>
    </div><br clear="all" />
    <% end %>

    <h3>支払い情報</h3>
    <div>
    <div className="detail-list-0"><span className="bold">支払い方法&nbsp;(クレジットカード）</span></div>
    </div><br clear="all" />
    <div>
      <div className="detail-list-1"><%= @paygent_customer["card_brand"] %> | <%= @paygent_customer["card_number"] %></div>
      <div className="detail-list-2">
        商品の小計 : ¥ <%= number_with_delimiter(@total_price) %><br>
        -----<br>
        ご利用ポイント : <%= number_with_delimiter(@t_member_payment.point) %>pt<br>
        -----<br>
        <span className="bold">ご請求額 : ¥ <%= number_with_delimiter(@t_member_payment.price_tax_in) %></span><br>
      </div>
    </div><br clear="all" />
<%
=begin
%>
    <div className="mt20">
      <div className="detail-list-3"><span className="bold">クレジットカードへの請求</span></div>
      <div className="detail-list-4"><%= @paygent_customer["card_brand"] %>(下4桁が<%= @paygent_customer["card_number"].delete("*") %>):<%= @t_member_payment.created_at.strftime("%Y年%m月%d日") %>:¥<%= number_with_delimiter(@t_member_payment.price_tax_in) %></div>
    </div><br clear="all" />
<%
=end
%>

    <div className="footer">© 2022 <%= SERVICE_NAME %></div>
  </div>
</div> */
