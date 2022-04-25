import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { ReviewReasonForm } from "./ReviewReasonForm";

export default {
  title: "Review/ReviewReasonForm",
  component: ReviewReasonForm,
} as ComponentMeta<typeof ReviewReasonForm>;

const Template: ComponentStory<typeof ReviewReasonForm> = (args) => (
  <ReviewReasonForm {...args} />
);

export const Default = Template.bind({});

const reviewReasonOptions = [
  { id: 1, name: "コーデの色バランス" },
  { id: 2, name: "コーデの組み合わせ" },
  { id: 3, name: "コーデのサイズ感" },
  { id: 4, name: "コーデの色バランス" },
  { id: 5, name: "コーデの組み合わせ" },
  { id: 6, name: "コーデのサイズ感" },
];

const choicedReasonIds = [1, 3];

Default.args = {
  reviewReasonOptions,
  choicedReasonIds,
};

Default.decorators = [(Story) => <Story />];
