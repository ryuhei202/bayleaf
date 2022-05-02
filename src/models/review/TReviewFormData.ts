export type TReviewFormData = {
  reviews: TReviewFormDataReview[];
};

export type TReviewFormDataReview = {
  coordinateId: number;
  choices: {
    reviewOptionId: number | null;
    reviewReasonOptionIds: number[];
    reviewReasonText: string;
  };
};
