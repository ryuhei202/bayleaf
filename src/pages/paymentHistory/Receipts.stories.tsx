import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Receipts } from "./Receipt";

export default {
  title: "pageParts/Receipts",
  component: Receipts,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-white">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Receipts>;

const Template: ComponentStory<typeof Receipts> = (args) => (
  <Receipts {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  receiptCreatedAt: "2022-02-25",
  memberPaymentId: "12344",
  usingPoint: 3000,
  receiptDetails: [
    {
      title: "Levi'sジーンズ",
      priceTaxIn: 8800,
    },
    {
      title: "FORK&SPOON柄カットソー",
      priceTaxIn: 8800,
    },
  ],
  cardBrand: "VISA",
  cardNumber: "1111",
};
