import { Dispatch, SetStateAction } from "react";

import { Button } from "../../../components/baseParts/Button";
import { ExpandableImage } from "../../../components/baseParts/images/ExpandableImage";
import { Page } from "../../../components/baseParts/Page";
import { Typography } from "../../../components/baseParts/Typography";
import {
  AGE_CHOICES,
  TAGE_CHOICES,
} from "../../../models/consult/choice/AgeChoice";
import { TAgeAnswer } from "../../../models/consult/TAgeAnswer";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";

type TProps = {
  selectedItem: TConsultingItem;
  answeredItems: TAgeAnswer[];
  setAnsweredItems: Dispatch<SetStateAction<TAgeAnswer[]>>;
  handleCurrentAnswerItemIndex: () => void;
};

export const AgeDetailSelection = ({
  selectedItem,
  answeredItems,
  setAnsweredItems,
  handleCurrentAnswerItemIndex,
}: TProps) => {
  const onClickChoice = (ageOption: TAGE_CHOICES) => {
    setAnsweredItems([
      ...answeredItems,
      { item: selectedItem, ageOption: ageOption },
    ]);
    handleCurrentAnswerItemIndex();
  };

  return (
    <Page>
      <div className="px-5">
        <div className="w-[120px] my-16 ml-auto mr-auto">
          <ExpandableImage
            defaultImageSrc={selectedItem.imagePaths.largeThumb}
            ExpandedImageSrc={selectedItem.imagePaths.large}
          />
          <Typography
            className="mt-1 text-center"
            size="xs"
            color="primary"
            weight="medium"
          >
            {`${selectedItem.cateSmallName}／${selectedItem.color}`}
          </Typography>
        </div>
        <Typography className="text-xl">気になる点を教えてください</Typography>
        <div className="mt-8">
          {Object.values(AGE_CHOICES).map((choice) => (
            <Button
              className="my-3"
              variant="primary"
              onClick={() => onClickChoice(choice)}
            >
              {choice}
            </Button>
          ))}
        </div>
      </div>
    </Page>
  );
};
