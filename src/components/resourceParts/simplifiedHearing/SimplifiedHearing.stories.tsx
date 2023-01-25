import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SimpifiedHearing } from "./SimpifiedHearing";

export default {
  title: "resourceParts/SimplifiedHearing/SimplifiedHearing",
  component: SimpifiedHearing,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof SimpifiedHearing>;

const Template: ComponentStory<typeof SimpifiedHearing> = (args) => (
  <SimpifiedHearing {...args} />
);

export const Default = Template.bind({});

Default.args = {
  target: "恋人",
  scene: "ショッピング、外食",
  impression: "清潔感",
};

Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full h-screen p-5">
      <Story />
    </div>
  ),
];
