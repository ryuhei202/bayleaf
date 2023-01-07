import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";
import { ItemCard } from "./ItemCard";
import { ItemCardWrapper } from "./ItemCardWrapper";
export default {
  title: "resourceParts/item/ItemCardWrapper",
  component: ItemCardWrapper,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ItemCardWrapper>;

const Template: ComponentStory<typeof ItemCardWrapper> = (args) => (
  <ItemCardWrapper {...args} />
);

export const Default = Template.bind({});

Default.args = {
  visible: false,
};
const itemCards = [
  {
    imagePaths: {
      defaultPath: ITEM_TEST_IMAGE_URL.largeThumb,
      expandedPath: ITEM_TEST_IMAGE_URL.large,
    },
    categoryName: "シャツ",
    colorName: "オレンジ",
  },
  {
    imagePaths: {
      defaultPath: ITEM_TEST_IMAGE_URL.largeThumb,
      expandedPath: ITEM_TEST_IMAGE_URL.large,
    },
    categoryName: "シャツ",
    colorName: "オレンジ",
  },
  {
    imagePaths: {
      defaultPath: ITEM_TEST_IMAGE_URL.largeThumb,
      expandedPath: ITEM_TEST_IMAGE_URL.large,
    },
    categoryName: "LUCIANO-c シャツ",
    colorName: "ブラック",
  },
];
Default.decorators = [
  (Story) => (
    <div className="flex justify-center bg-clay gap-3 py-10">
      {itemCards.map((itemCard, index) => {
        return (
          <ItemCard
            key={index}
            imagePaths={{
              defaultPath: itemCard.imagePaths.defaultPath,
              expandedPath: itemCard.imagePaths.expandedPath,
            }}
            categoryName={itemCard.categoryName}
            colorName={itemCard.colorName}
            id={index}
            price={12000}
            originPrice={15000}
            discountRate={20}
            selectedItems={[]}
            selectItem={() => {}}
          />
        );
      })}
    </div>
  ),
];
