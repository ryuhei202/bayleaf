import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewFormData } from "../../models/review/TReviewFormData";
import { validReviewForm } from "../../models/review/validReviewForm";
import { REVIEW_FORM_TYPE } from "../../models/review/ReviewFormType";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { REVIEW_OPTIONS } from "../../models/review/ReviewOptions";

type TReviewContainerPresenter = {
  isSatisfiedCurrentReview: () => boolean;
  currentReviewReasonOptionIds: () => number[];
  currentReviewReasonText: () => string;
  isValidCurrentReview: () => boolean;
  currentFormType: () => REVIEW_FORM_TYPE;
  displayReasonOptions: () => TReviewOptionResponse[];
  selectedCoordinate: () => TCoordinateResponse;
  isLastCoordinate: () => boolean;
};

type TReviewContainerPresenterArgs = {
  coodinates: TCoordinateResponse[];
  reviewReasonOptionResponses: TReviewOptionResponse[];
  selectedCoordinateId: number;
  reviewFormData: TReviewFormData;
};

export const getReviewContainerPresenter = ({
  coodinates,
  reviewReasonOptionResponses,
  selectedCoordinateId,
  reviewFormData,
}: TReviewContainerPresenterArgs): TReviewContainerPresenter => {
  const currentReview = () => {
    return reviewFormData.reviews.find(
      (review) => review.coordinateId === selectedCoordinateId
    )!;
  };

  const currentReviewOptionId = () => {
    return currentReview().choices.reviewOptionId;
  };

  const currentReviewReasonOptionIds = () => {
    return currentReview().choices.reviewReasonOptionIds;
  };

  const currentReviewReasonText = () => {
    return currentReview().choices.reviewReasonText;
  };

  const isValidCurrentReview = () => {
    return validReviewForm(currentReview());
  };

  const currentFormType = () => {
    return currentReviewOptionId() == null
      ? REVIEW_FORM_TYPE.REVIEW
      : REVIEW_FORM_TYPE.REVIEW_REASON;
  };

  const isSatisfiedCurrentReview = () => {
    return currentReviewOptionId() === REVIEW_OPTIONS.SATISFIED_ID;
  };

  const displayReasonOptions = () => {
    if (isSatisfiedCurrentReview()) {
      return reviewReasonOptionResponses.filter((option) =>
        REVIEW_OPTIONS.SATISFIED_REASON_OPTION_IDS.includes(option.id)
      );
    } else {
      return reviewReasonOptionResponses;
    }
  };

  const selectedCoordinate = () => {
    return coodinates.find((c) => c.id === selectedCoordinateId)!;
  };

  const isLastCoordinate = () => {
    return coodinates[coodinates.length - 1].id === selectedCoordinateId;
  };

  return {
    isSatisfiedCurrentReview,
    currentReviewReasonOptionIds,
    currentReviewReasonText,
    isValidCurrentReview,
    currentFormType,
    displayReasonOptions,
    selectedCoordinate,
    isLastCoordinate,
  };
};
