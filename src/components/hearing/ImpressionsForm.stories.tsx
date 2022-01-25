import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImpressionsForm } from "./ImpressionsForm";

export default {
  title: "Hearing/ImpressionsForm",
  component: ImpressionsForm,
} as ComponentMeta<typeof ImpressionsForm>;

const Template: ComponentStory<typeof ImpressionsForm> = (args) => (
  <ImpressionsForm {...args} />
);

export const NoDefaultValues = Template.bind({});

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  defaultValues: [6, 8, 9],
};
