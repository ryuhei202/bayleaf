import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { Button } from "../../components/baseParts/legacy/Button";
import { CoordinateItemImages } from "../../components/baseParts/legacy/CoordinateItemImages";
import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { convertItemsToItemImagesProps } from "../../components/review/convertItemsToItemImagesProps";

type Props = {
  readonly coordinate: TCoordinateResponse;
  readonly reviewOptions: TReviewOptionResponse[];
  readonly onSubmit: (choicedReviewOptionId: number) => void;
};

export const ReviewForm = ({ coordinate, reviewOptions, onSubmit }: Props) => {
  return (
    <Page>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5">
          <PageHeader
            title={
              <>
                今回のコーデはお使いの場所でご利用して、ご満足いただけましたでしょうか?
              </>
            }
            className="mb-16"
          />
          <CoordinateItemImages
            {...convertItemsToItemImagesProps(coordinate.items)}
          />
        </div>
        <div className="flex flex-col space-y-3 bg-white p-5">
          {reviewOptions.map((option) => (
            <Button
              onClick={() => onSubmit(option.id)}
              border
              disableElevation
              key={option.id}
            >
              {option.name}
            </Button>
          ))}
        </div>
      </div>
    </Page>
  );
};
