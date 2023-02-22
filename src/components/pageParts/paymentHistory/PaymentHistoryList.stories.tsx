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
      priceTaxIn: 10000,
      memberPaymentId: 1,
      paymentDate: "2020年3月5日",
      paymentTypeName: "月額利用料",
    },
  ],
};
