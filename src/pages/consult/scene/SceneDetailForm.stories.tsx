import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SceneDetailForm } from "./SceneDetailForm";

export default {
  title: "Consult/Scene/SceneDetailForm",
  component: SceneDetailForm,
} as ComponentMeta<typeof SceneDetailForm>;

const Template: ComponentStory<typeof SceneDetailForm> = (args) => (
  <SceneDetailForm {...args} />
);
export const Default = Template.bind({});
