import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { useReviewOptionIndex } from "../../api/reviews/useReviewOptionIndex";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { ReviewContainer } from "./ReviewContainer";

type TProps = {
  readonly coordinates: TCoordinateResponse[];
};

export const ReviewFetcher = ({ coordinates }: TProps) => {
  const { data: reviewOptionData, error: reviewOptionError } =
    useReviewOptionIndex();

  if (reviewOptionError)
    return <ErrorMessage message={reviewOptionError.message} />;

  if (!coordinates || !reviewOptionData) return <LoaderPage />;

  return (
    <ReviewContainer
      coordinateResponses={coordinates}
      reviewOptionResponses={reviewOptionData.options}
      reviewReasonOptionResponses={reviewOptionData.reasonOptions}
    />
  );
};
