import {
  TReviewFormData,
  TReviewFormDataReview,
} from "../../models/review/TReviewFormData";

type TReviewContainerHandler = {
  handleReviewFormSubmit: (choicedOptionId: number) => void;
  handleClickReviewReason: (clickedOptionId: number) => void;
  handleReviewReasonFormSubmit: () => void;
  handleCanselReviewReason: () => void;
  handleChangeReasonText: (text: string) => void;
};

type TReviewContainerHandlerArgs = {
  selectedCoordinateId: number;
  reviewFormData: TReviewFormData;
  setReviewFormData: (formData: TReviewFormData) => void;
  setSelectedCoordinateId: (id: number) => void;
};

export const getReviewContainerHandler = ({
  selectedCoordinateId,
  reviewFormData,
  setReviewFormData,
  setSelectedCoordinateId,
}: TReviewContainerHandlerArgs): TReviewContainerHandler => {
  const currentReviewIndex = () => {
    return reviewFormData.reviews.findIndex(
      (r) => r.coordinateId === selectedCoordinateId
    );
  };

  const currentReview = () => {
    return reviewFormData.reviews[currentReviewIndex()];
  };

  const handleReviewFormSubmit = (choicedOptionId: number) => {
    updateFormData(assingChoicesToCurrent({ reviewOptionId: choicedOptionId }));
  };

  const handleClickReviewReason = (clickedOptionId: number) => {
    const oldIds = currentReview().choices.reviewReasonOptionIds;
    let newIds = [];
    if (oldIds.includes(clickedOptionId)) {
      newIds = oldIds.filter((i) => i !== clickedOptionId);
    } else {
      newIds = [...oldIds, clickedOptionId];
    }

    updateFormData(
      assingChoicesToCurrent({
        reviewReasonOptionIds: newIds,
      })
    );
  };

  const handleCanselReviewReason = () => {
    updateFormData(
      assingChoicesToCurrent({
        reviewOptionId: null,
        reviewReasonOptionIds: [],
        reviewReasonText: "",
      })
    );
  };

  const handleChangeReasonText = (text: string) => {
    updateFormData(assingChoicesToCurrent({ reviewReasonText: text }));
  };

  const handleReviewReasonFormSubmit = () => {
    const nextReview = reviewFormData.reviews[currentReviewIndex() + 1];
    if (nextReview == undefined) {
      // TODO POST処理を実装
    } else {
      setSelectedCoordinateId(nextReview.coordinateId);
    }
  };

  const assingChoicesToCurrent = (
    reviewChoices: {
      [K in keyof TReviewFormDataReview["choices"]]?: TReviewFormDataReview["choices"][K];
    }
  ): TReviewFormDataReview => {
    return {
      ...currentReview(),
      choices: { ...currentReview().choices, ...reviewChoices },
    };
  };

  const updateFormData = (review: TReviewFormDataReview) => {
    const dupReviews = reviewFormData.reviews.concat();
    dupReviews[currentReviewIndex()] = review;
    setReviewFormData({ reviews: dupReviews });
  };

  return {
    handleReviewFormSubmit,
    handleClickReviewReason,
    handleReviewReasonFormSubmit,
    handleCanselReviewReason,
    handleChangeReasonText,
  };
};
