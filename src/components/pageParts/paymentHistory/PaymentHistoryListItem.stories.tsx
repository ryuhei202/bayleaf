import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PaymentHistoryListItem } from "./PaymentHistoryListItem";
export default {
  title: "PageParts/paymentHistory/PaymentHistoryListItem",
  component: PaymentHistoryListItem,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PaymentHistoryListItem>;
const Template: ComponentStory<typeof PaymentHistoryListItem> = (args) => (
  <PaymentHistoryListItem {...args} />
);
export const DefaultValues = Template.bind({});
DefaultValues.args = {
  memberPayment: {
    paymentId: "weiru",
    priceTaxIn: 10000,
    memberPaymentId: 5,
    paymentDate: "2022年5月24日",
    paymentTypeName: "月額利用料金",
    isAvailableReceipt: true,
  },
};
