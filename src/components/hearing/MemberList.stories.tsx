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
      email: "kiizan0807@kiizan-kiizan.co.jp",
      nextPaymentDate: "2022/10/31",
      mPlanId: 1,
    },
    {
      id: 2,
      email: "kiizan0808@kiizan-kiizan.co.jp",
      nextPaymentDate: "2022/11/31",
      mPlanId: 3,
    },
    {
      id: 3,
      email: "kiizan0809@kiizan-kiizan.co.jp",
      nextPaymentDate: "2022/12/31",
      mPlanId: 3,
    },
  ],
};
