import { REVIEW_OPTIONS } from "./ReviewOptions";
import { TReviewFormDataReview } from "./TReviewFormData";

export const validReviewForm = (review: TReviewFormDataReview): boolean => {
  if (review.choices.reviewOptionId == null) return false;

  if (review.choices.reviewOptionId === REVIEW_OPTIONS.SATISFIED_ID)
    return true;

  if (review.choices.reviewReasonText.length) return true;

  return review.choices.reviewReasonOptionIds.length > 0;
};
