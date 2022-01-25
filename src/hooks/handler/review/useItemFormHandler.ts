import { useState } from "react";
import { FormResponse } from "../../../models/review/FormResponse";
import { Review } from "../../../models/review/Review";

type ItemFormHandler = {
  readonly review: Review;
  readonly rating: number;
  readonly inputRate: (ratingNum: number) => void;
  readonly onSelectSize: (review: Review) => void;
  readonly changeFreeText: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export const useItemFormHandler = (
  item: FormResponse,
  onSelectReview: (review: Review) => void
): ItemFormHandler => {
  const [review, setReview] = useState<Review>({
    chartItemId: item.chartItemId,
    rating: undefined,
    sizeErrors: [],
    freeText: item.textFeedback,
  });
  const [rating, setRating] = useState<number>(0);

  const inputRate = (ratingNum: number) => {
    setRating(ratingNum);
    const newReview = { ...review, rating: ratingNum };
    setReview(newReview);
    onSelectReview(newReview);
  };

  const onSelectSize = (review: Review) => {
    setReview(review);
    onSelectReview(review);
  };

  const changeFreeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newReview = { ...review, freeText: event.target.value };
    setReview(newReview);
    onSelectReview(newReview);
  };
  return {
    review,
    rating,
    inputRate,
    onSelectSize,
    changeFreeText,
  };
};
