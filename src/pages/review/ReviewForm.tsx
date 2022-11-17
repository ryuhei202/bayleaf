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
import { ReviewFormFetcher } from "./ReviewFormFetcher";

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
  if (simplifiedHearingError)
    return <ErrorMessage message={simplifiedHearingError.message} />;
  // if (!simplifiedHearing) return <Loader active />;
  return (
    <ReviewFormFetcher
      coordinate={coordinate}
      simplifiedHearing={
        simplifiedHearing ?? { target: "", scene: "", impression: "" }
      }
      reviewOptions={reviewOptions}
      onSubmit={onSubmit}
    />
  );
};
