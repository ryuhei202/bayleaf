import { Loader } from "semantic-ui-react";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
import { useReviewOptionIndex } from "../../api/reviews/useReviewOptionIndex";
import { Typography } from "../../components/baseParts/Typography";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { ReviewContainer } from "./ReviewContainer";

type TProps = {
  readonly chartId: number;
};

export const ReviewFetcher = ({ chartId }: TProps) => {
  const { data: coordinateData, error: coordinateError } = useCoordinateIndex({
    chartId,
  });
  const { data: reviewOptionData, error: reviewOptionError } =
    useReviewOptionIndex();

  [coordinateError, reviewOptionError].forEach((error) => {
    if (error) return <ErrorMessage message={error.message} />;
  });

  if (!coordinateData || !reviewOptionData) return <Loader active />;

  const reviewTargetCoordinates = coordinateData.coordinates.filter(
    (c) => !c.isReviewed
  );

  if (reviewTargetCoordinates.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography>
          <>レビュー対象のコーデはありません。</>
        </Typography>
      </div>
    );
  }

  return (
    <ReviewContainer
      coordinateResponses={reviewTargetCoordinates}
      reviewOptionResponses={reviewOptionData.options}
      reviewReasonOptionResponses={reviewOptionData.reasonOptions}
    />
  );
};
