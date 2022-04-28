import { Loader } from "semantic-ui-react";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
import { useReviewOptionIndex } from "../../api/reviews/useReviewOptionIndex";
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

  return (
    <ReviewContainer
      coordinateResponses={coordinateData.coodinates}
      reviewOptionResponses={reviewOptionData.options}
      reviewReasonOptionResponses={reviewOptionData.reasonOptions}
    />
  );
};
