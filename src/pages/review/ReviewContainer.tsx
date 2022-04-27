import { useState } from "react";
import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { REVIEW_FORM_TYPE } from "../../models/review/ReviewFormType";
import { TReviewFormData } from "../../models/review/TReviewFormData";
import { getReviewContainerHandler } from "./getReviewContainerHandler";
import { getReviewContainerPresenter } from "./getReviewContainerPresenter";
import { ReviewForm } from "./ReviewForm";
import { ReviewReasonForm } from "./ReviewReasonForm";

type Props = {
  coordinateResponses: TCoordinateResponse[];
  reviewOptionResponses: TReviewOptionResponse[];
  reviewReasonOptionResponses: TReviewOptionResponse[];
};

const setInitReviewFormData = (
  coordinateResponses: TCoordinateResponse[]
): TReviewFormData => {
  const targetCoodinates = coordinateResponses.filter((c) => !c.isReviewed);
  const reviews = targetCoodinates.map((coordinate) => {
    return {
      coordinateId: coordinate.id,
      choices: {
        reviewOptionId: null,
        reviewReasonOptionIds: [],
        reviewReasonText: "",
      },
    };
  });
  return { reviews };
};

export const ReviewContainer = ({
  coordinateResponses,
  reviewOptionResponses,
  reviewReasonOptionResponses,
}: Props) => {
  const [reviewFormData, setReviewFormData] = useState<TReviewFormData>(
    setInitReviewFormData(coordinateResponses)
  );

  const [selectedCoordinateId, setSelectedCoordinateId] = useState<number>(
    reviewFormData.reviews[0].coordinateId
  );

  const handler = getReviewContainerHandler({
    selectedCoordinateId,
    reviewFormData,
    setReviewFormData,
    setSelectedCoordinateId,
  });

  const presenter = getReviewContainerPresenter({
    coodinates: coordinateResponses,
    reviewReasonOptionResponses,
    selectedCoordinateId,
    reviewFormData,
  });

  switch (presenter.currentFormType()) {
    case REVIEW_FORM_TYPE.REVIEW:
      return (
        <ReviewForm
          coordinate={presenter.selectedCoordinate()}
          reviewOptions={reviewOptionResponses}
          onSubmit={handler.handleReviewFormSubmit}
        />
      );
    case REVIEW_FORM_TYPE.REVIEW_REASON:
      return (
        <ReviewReasonForm
          reviewReasonOptions={presenter.displayReasonOptions()}
          choicedReasonIds={presenter.currentReviewReasonOptionIds()}
          text={presenter.currentReviewReasonText()}
          isSatisfied={presenter.isSatisfiedCurrentReview()}
          isValid={presenter.isValidCurrentReview()}
          onClickReasonOption={handler.handleClickReviewReason}
          onSubmit={handler.handleReviewReasonFormSubmit}
          onCancel={handler.handleCanselReviewReason}
          onChangeText={handler.handleChangeReasonText}
        />
      );
    default:
      return <></>;
  }
};
