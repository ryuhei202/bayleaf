import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { useSimplifiedHearingShow } from "../../api/simplifiedHearings/useSimplifiedHearingShow";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { ReviewForm } from "./ReviewForm";

type Props = {
  readonly coordinate: TCoordinateResponse;
  readonly reviewOptions: TReviewOptionResponse[];
  readonly onSubmit: (choicedReviewOptionId: number) => void;
};

export const ReviewFormFetcher = ({
  coordinate,
  reviewOptions,
  onSubmit,
}: Props) => {
  const { data: simplifiedHearing, error: simplifiedHearingError } =
    useSimplifiedHearingShow({
      coordinateId: coordinate.id,
    });
  if (simplifiedHearingError)
    return <ErrorPage message={simplifiedHearingError.message} />;
  if (simplifiedHearing === undefined) return <LoaderPage />;
  return (
    <ReviewForm
      coordinate={coordinate}
      simplifiedHearing={simplifiedHearing}
      reviewOptions={reviewOptions}
      onSubmit={onSubmit}
    />
  );
};
