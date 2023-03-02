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
      paymentId: "weiru",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "weiru",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "weiru",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
  ],
};
