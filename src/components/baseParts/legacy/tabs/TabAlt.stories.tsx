import { Tab } from "@headlessui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabAlt } from "./TabAlt";

export default {
  title: "BaseParts/Tabs/Tab",
  component: TabAlt,
} as ComponentMeta<typeof TabAlt>;

const Template: ComponentStory<typeof TabAlt> = (args) => <TabAlt {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Tab.Group>
        <Tab.List>
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
  children: "タブ",
};

export const Styled = Template.bind({});
Styled.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Tab.Group>
        <Tab.List>
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
Styled.args = {
  children: "タブ",
  className: "w-1/3",
  disableElevation: true,
  size: "small",
  radius: "small",
};
