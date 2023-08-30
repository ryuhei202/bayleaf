import { Button } from "../../../components/baseParts/legacy/Button";
import { IconButton } from "../../../components/baseParts/legacy/IconButton";
import { ArrowIcon } from "../../../components/baseParts/legacy/icons/ArrowIcon";
import { ExpandableImage } from "../../../components/baseParts/legacy/images/ExpandableImage";
import { Page } from "../../../components/baseParts/legacy/Page";
import { Typography } from "../../../components/baseParts/legacy/Typography";
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
          <ArrowIcon className="my-auto h-10" />
        </IconButton>
        <div className="mx-auto my-16 w-[120px]">
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
            {`${selectedItem.categoryName}／${selectedItem.colorName}`}
          </Typography>
        </div>
        <Typography className="text-xl">気になる点を教えてください</Typography>
        <div className="mt-8">
          {Object.values(AGE_CHOICES).map((choice, index) => (
            <Button
              className="my-3"
              variant="primary"
              onClick={() => onSelect(choice)}
              key={index}
            >
              {choice}
            </Button>
          ))}
        </div>
      </div>
    </Page>
  );
};
