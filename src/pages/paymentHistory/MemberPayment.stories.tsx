import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemberPayment } from "./MemberPayment";
export default {
  title: "PageParts/paymentHistory/MemberPayment",
  component: MemberPayment,
  decorators: [
    (Story) => (
      <div className="m-1 bg-clay p-2">
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
  nextPaymentDate: "2023年3月25日",
};
