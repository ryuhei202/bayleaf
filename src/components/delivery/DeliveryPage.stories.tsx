import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DeliveryPage } from "./DeliveryPage";

export default {
  title: "Delivery/DeliveryPage",
  component: DeliveryPage,
  argTypes: {
    onDiscountChange: {
      action: "onDiscountChange",
    },
    onSelectShortest: {
      action: "onSelectShortest",
    },
    onSelectDate: {
      action: "onSelectDate",
    },
    onSelectDeliveryTime: {
      action: "onselectDeliveryTime",
    },
    onSubmit: {
      action: "onSubmit",
    },
  },
} as ComponentMeta<typeof DeliveryPage>;

const Template: ComponentStory<typeof DeliveryPage> = (args) => (
  <DeliveryPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  chartDeliveryTime: {
    date: "2022-11-22",
    time: 2,
  },
  deliveryTimeOptions: [
    {
      id: 1,
      name: "指定なし",
    },
  ],
  isDiscountSelectable: true,
  isDiscountEnabled: true,
  isShortest: true,
  shortestDateRange: {
    min: "2022-10-01",
    max: "2022-11-01",
  },
  selectableDateRange: {
    min: "2022-10-01",
    max: "2022-12-01",
  },
  selectedDate: "2022-11-01",
  selectedDeliveryTime: "1",
  isLoading: true,
};
