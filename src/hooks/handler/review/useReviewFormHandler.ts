import { FormResponse } from "../../../models/review/FormResponse";
import { useContext, useState } from "react";
import { Review } from "../../../models/review/Review";
import { IdTokenContext, StylistIdContext } from "../../../App";
import { customAxios } from "../../../models/shared/customAxios";

type ReviewFormHandler = {
  readonly onClick: () => void;
  readonly onSelectReview: (review: Review) => void;
  readonly reviews: Review[];
  readonly validation: string | null;
  readonly loading: boolean;
};

export const useReviewFormHandler = (
  data: FormResponse[] | undefined,
  karteId: number
): ReviewFormHandler => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [validation, setValidation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const onClick = async () => {
    if (reviews.length !== data?.length) {
      setValidation("入力していないレビューがあります。");
      return;
    }
    setLoading(true);
    await customAxios
      .post(
        `${process.env.REACT_APP_HOST_URL}/reviews`,
        { stylistId, reviews: reviews, chartId: karteId },
        { headers: { Authorization: idToken } }
      )
      .then(() => closeLiffApp())
      .catch((error) => {
        endPostReviews(error.response.data.message);
      });
  };

  const closeLiffApp = async () => {
    const liff = (await import("@line/liff")).default;
    liff.closeWindow();
  };

  const endPostReviews = async (message: string) => {
    await setValidation(message);
    await setLoading(false);
  };

  const onSelectReview = (review: Review) => {
    const result = reviews.filter((r) => r.chartItemId !== review.chartItemId);
    setReviews([...result, review]);
  };

  return {
    onClick,
    onSelectReview,
    reviews,
    validation,
    loading,
  };
};
