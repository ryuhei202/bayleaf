import { Loader } from "semantic-ui-react";
import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { useSimplifiedHearingShow } from "../../api/simplifiedHearings/useSimplifiedHearingShow";
import { Button } from "../../components/baseParts/Button";
import { CoordinateItemImages } from "../../components/baseParts/CoordinateItemImages";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { convertItemsToItemImagesProps } from "../../components/pageParts/review/convertItemsToItemImagesProps";
import { SimpifiedHearing } from "../../components/resourceParts/simplifiedHearing/SimpifiedHearing";
import { ErrorMessage } from "../../components/shared/ErrorMessage";

type Props = {
  readonly coordinate: TCoordinateResponse;
  readonly reviewOptions: TReviewOptionResponse[];
  readonly onSubmit: (choicedReviewOptionId: number) => void;
};

export const ReviewForm = ({ coordinate, reviewOptions, onSubmit }: Props) => {
  const { data: simplifiedHearing, error: simplifiedHearingError } =
    useSimplifiedHearingShow({
      coordinateId: coordinate.id,
    });
  if (!simplifiedHearing) return <Loader active />;
  if (simplifiedHearingError)
    return <ErrorMessage message={simplifiedHearingError.message} />;
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
        <SimpifiedHearing
          title="今回のコーデ情報"
          target={simplifiedHearing?.target as string}
          scene={simplifiedHearing?.scene as string}
          impression={simplifiedHearing?.impression as string}
        />
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
