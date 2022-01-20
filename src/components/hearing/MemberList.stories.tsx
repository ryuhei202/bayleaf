import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemberList } from "./MemberList";

export default {
  title: "Hearing/MemberList",
  component: MemberList,
} as ComponentMeta<typeof MemberList>;

const Template: ComponentStory<typeof MemberList> = (args) => (
  <MemberList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: 1,
      email: "id0807@kiizan-kiizan.co.jp",
      nextPaymentDate: "2022/10/22",
    },
    {
      id: 2,
      email: "id0808@kiizan-kiizan.co.jp",
      nextPaymentDate: "2022/12/22",
    },
    {
      id: 3,
      email: "id0809@kiizan-kiizan.co.jp",
      nextPaymentDate: "2022/11/22",
    },
  ],
  setMemberId: () => {},
};
