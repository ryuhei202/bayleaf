import { ComponentProps } from "react";
import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { Button } from "../../components/baseParts/Button";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { CoordinateItemImages } from "../../components/review/CoordinateItemImages";

type Props = {
  readonly coordinate: TCoordinateResponse;
  readonly reviewOptions: TReviewOptionResponse[];
  readonly onSubmit: (choicedReviewOptionId: number) => void;
};

export const ReviewForm = ({ coordinate, reviewOptions, onSubmit }: Props) => {
  const itemImagesProps = (): ComponentProps<typeof CoordinateItemImages> => {
    const items = coordinate.items.map((item) => {
      return {
        imagePaths: {
          defaultPath: item.imagePaths.largeThumb,
          expandedPath: item.imagePaths.large,
        },
        caption: item.cateSmallName,
      };
    });

    return {
      items,
    };
  };

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
          <CoordinateItemImages {...itemImagesProps()} />
        </div>
        <div className="flex flex-col space-y-3 bg-white p-5">
          {reviewOptions.map((option) => {
            return (
              <Button
                onClick={() => onSubmit(option.id)}
                border
                disableElevation
              >
                {option.name}
              </Button>
            );
          })}
        </div>
      </div>
    </Page>
  );
};
