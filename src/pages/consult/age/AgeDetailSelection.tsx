import { Button } from "../../../components/baseParts/Button";
import { IconButton } from "../../../components/baseParts/IconButton";
import { ArrowIcon } from "../../../components/baseParts/icons/ArrowIcon";
import { ExpandableImage } from "../../../components/baseParts/images/ExpandableImage";
import { Page } from "../../../components/baseParts/Page";
import { Typography } from "../../../components/baseParts/Typography";
import {
  AGE_CHOICES,
  TAGE_CHOICES,
} from "../../../models/consult/choice/AgeChoice";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";

type TProps = {
  selectedItem: TConsultingItem;
  onSelect: (choice: TAGE_CHOICES) => void;
  onCancel: () => void;
};

export const AgeDetailSelection = ({
  selectedItem,
  onSelect,
  onCancel,
}: TProps) => {
  return (
    <Page>
      <div className="p-8">
        <IconButton onClick={onCancel}>
          <ArrowIcon className="h-10 my-auto" />
        </IconButton>
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
              onClick={() => onSelect(choice)}
            >
              {choice}
            </Button>
          ))}
        </div>
      </div>
    </Page>
  );
};
