import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { ChartList } from "./ChartList";

export default {
  title: "Chart/ChartList",
  component: ChartList,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ChartList>;

const Template: ComponentStory<typeof ChartList> = (args) => (
  <ChartList {...args} />
);

export const Default = Template.bind({});
const charts = [...Array(2)].map((): TChartResponse => {
  return {
    id: 1,
    rentalStartedAt: "2022/03/12",
    itemImagePaths: [
      "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
    ],
    planName: "カジュアルプラン",
  };
});

Default.args = {
  chartResponses: charts,
};

Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full h-screen p-5">
      <Story />
    </div>
  ),
];
