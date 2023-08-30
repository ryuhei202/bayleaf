import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PaymentHistoryList } from "./PaymentHistoryList";

export default {
  title: "PageParts/paymentHistory/PaymentHistoryList",
  component: PaymentHistoryList,
  decorators: [
    (Story) => (
      <div className="m-1 bg-clay p-2">
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
      paymentId: "34567876",
      priceTaxIn: 10000,
      point: 30,
      id: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "34567876",
      priceTaxIn: 10000,
      point: 30,
      id: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "34567876",
      priceTaxIn: 10000,
      point: 30,
      id: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
  ],
};
