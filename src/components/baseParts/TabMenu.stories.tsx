import { Tab } from "@headlessui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabMenu } from "./TabMenu";

export default {
  title: "BaseParts/TabMenu",
  component: TabMenu,
} as ComponentMeta<typeof TabMenu>;

const Template: ComponentStory<typeof TabMenu> = (args) => (
  <TabMenu {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className=" w-full bg-clay p-3">
      <Tab.Group>
        <Tab.List className="flex">
          <Story />
          <Story />
          <Story />
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>パネル 1</Tab.Panel>
          <Tab.Panel>パネル 2</Tab.Panel>
          <Tab.Panel>パネル 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  ),
];
Default.args = {
  children: (
    <div className="text-themeGray">
      <span className="pr-2 font-semibold">コーデ</span>
      <span className="font-lora text-2xl  font-bold tracking-widest">01</span>
    </div>
  ),
  className: "w-1/3",
};
