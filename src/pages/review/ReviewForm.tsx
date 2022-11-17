import { Loader } from "semantic-ui-react";
import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { useSimplifiedHearingShow } from "../../api/simplifiedHearings/useSimplifiedHearingShow";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { ReviewFormFetcher } from "./ReviewFormFetcher";

type Props = {
  readonly coordinate: TCoordinateResponse;
  readonly reviewOptions: TReviewOptionResponse[];
  readonly onSubmit: (choicedReviewOptionId: number) => void;
};

export const ReviewForm = ({ coordinate, reviewOptions, onSubmit }: Props) => {
  const {
    data: simplifiedHearing,
    error: simplifiedHearingError,
    isLoading,
  } = useSimplifiedHearingShow({
    coordinateId: coordinate.id,
  });
  if (simplifiedHearingError)
    return <ErrorMessage message={simplifiedHearingError.message} />;
  if (isLoading) return <Loader active />;
  return (
    <ReviewFormFetcher
      coordinate={coordinate}
      simplifiedHearing={simplifiedHearing ?? null}
      reviewOptions={reviewOptions}
      onSubmit={onSubmit}
    />
  );
};
