import { Review } from "../../../models/review/Review";
import { useState } from "react";

type SizePartButtonHandler = {
  readonly addSizeError: (sizePartError: SizeError) => void;
  readonly clearSizeError: (sizePart: number) => void;
  readonly active: ButtonState;
};
type SizeError = {
  readonly sizePart: number;
  readonly errorType: number;
};

export enum ButtonState {
  TooBig,
  TooSmall,
  JustFit,
}

export const useSizePartButtonHandler = (
  review: Review,
  onSelectSize: (review: Review) => void
): SizePartButtonHandler => {
  const [active, setActive] = useState<ButtonState>(ButtonState.JustFit);

  const isActiveButton = (errorType: number) => {
    if (errorType === 1) {
      setActive(ButtonState.TooBig);
    } else if (errorType === 2) {
      setActive(ButtonState.TooSmall);
    } else {
      setActive(ButtonState.JustFit);
    }
  };
  const addSizeError = (sizePartError: SizeError) => {
    const sizePartExists = review.sizeErrors.some(
      (se) => se.sizePart === sizePartError.sizePart
    );
    if (sizePartExists) {
      overwriteSizeError(sizePartError);
      return;
    }
    const newReview = {
      ...review,
      size_errors: [...review.sizeErrors, sizePartError],
    };
    onSelectSize(newReview);
    isActiveButton(sizePartError.errorType);
  };

  //size_partが既に存在する場合は更新する
  const overwriteSizeError = (sizePartError: SizeError) => {
    const result = review.sizeErrors.filter(
      (se) => se.sizePart !== sizePartError.sizePart
    );
    const newReview = {
      ...review,
      size_errors: [...result, sizePartError],
    };
    onSelectSize(newReview);
    isActiveButton(sizePartError.errorType);
  };
  //「丁度いい」の場合は何も返さない
  const clearSizeError = (sizePart: number) => {
    const result = review.sizeErrors.filter((se) => se.sizePart !== sizePart);
    const newReview = { ...review, sizeErrors: result };
    onSelectSize(newReview);
    isActiveButton(99);
  };

  return {
    addSizeError,
    clearSizeError,
    active,
  };
};
