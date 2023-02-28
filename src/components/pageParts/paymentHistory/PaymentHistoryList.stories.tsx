import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PaymentHistoryList } from "./PaymentHistoryList";

export default {
  title: "PageParts/paymentHistory/PaymentHistoryList",
  component: PaymentHistoryList,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PaymentHistoryList>;

const Template: ComponentStory<typeof PaymentHistoryList> = (args) => (
  <PaymentHistoryList {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  memberPayments: [
    {
      id: 1,
      point: 10,
      paymentId: "98357235",
      priceTaxIn: 10000,
      paymentTypeName: "月額利用料",
      paymentDate: "2020年3月5日",
      isAvailableReceipt: true,
    },
    {
      id: 2,
      point: 10,
      paymentId: "82374535",
      priceTaxIn: 15000,
      paymentTypeName: "発利用料",
      paymentDate: "2020年9月9日",
      isAvailableReceipt: true,
    },
    {
      id: 3,
      point: 15,
      paymentId: "7544535",
      priceTaxIn: 16000,
      paymentTypeName: "あああ発利用料",
      paymentDate: "2020年9月9日",
      isAvailableReceipt: false,
    },
  ],
};
