import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemberPayment } from "./MemberPayment";
export default {
  title: "PageParts/paymentHistory/MemberPayment",
  component: MemberPayment,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MemberPayment>;
const Template: ComponentStory<typeof MemberPayment> = (args) => (
  <MemberPayment {...args} />
);
export const DefaultValues = Template.bind({});
DefaultValues.args = {
  currentPage: 2,
  maxPage: 10,
  paymentData: [
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
    {
      paymentId: "12345",
      priceTaxIn: 10000,
      memberPaymentId: 5,
      paymentDate: "2022年5月24日",
      paymentTypeName: "月額利用料金",
      isAvailableReceipt: true,
    },
  ],
  nextPaymentDate: "2023年3月25日",
};
