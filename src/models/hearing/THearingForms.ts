import { TCategorizedForm } from "../../api/hearings/TCategorizedForm";
import { TAnsweredForm } from "../../pages/hearing/HearingContainer";

export const HEARING_FORM = {
  FIRST: 1,
  ONE_SHOT_FIRST: 3,
  AVOID_ITEM: 36,
} as const;

export const HEARING_CATEGORY = {
  SCENE: 1,
  ESPECIALLY_SCENE: 7,
  SOMEONE: 2,
  ESPECIALLY_SOMEONE: 8,
  IMPRESSION: 4,
  ESPECIALLY_IMPRESSION: 9,
} as const;

// 相手、シーン、印象の「特に」のカテゴリの並び替えを行う
export const sortHearings = (
  hearing: TCategorizedForm[]
): TCategorizedForm[] => {
  return hearing.reduce((answer: TCategorizedForm[], value) => {
    switch (value.categoryId) {
      case HEARING_CATEGORY.ESPECIALLY_SCENE:
        answer.splice(
          answer.indexOf(
            answer.find(
              (a) => a.categoryId === HEARING_CATEGORY.SCENE
            ) as TCategorizedForm
          ) + 1,
          0,
          value
        );
        break;
      case HEARING_CATEGORY.ESPECIALLY_SOMEONE:
        answer.splice(
          answer.indexOf(
            answer.find(
              (a) => a.categoryId === HEARING_CATEGORY.SOMEONE
            ) as TCategorizedForm
          ) + 1,
          0,
          value
        );
        break;
      case HEARING_CATEGORY.ESPECIALLY_IMPRESSION:
        answer.splice(
          answer.indexOf(
            answer.find(
              (a) => a.categoryId === HEARING_CATEGORY.IMPRESSION
            ) as TCategorizedForm
          ) + 1,
          0,
          value
        );
        break;
      default:
        answer.push(value);
    }
    return answer;
  }, []);
};

export const sortHearingConfirm = (
  categorizedForms: TCategorizedForm[],
  answeredForm: TAnsweredForm
) => {
  const newAnswer = {
    categoryId: answeredForm.categoryId,
    categoryName: answeredForm.categoryName,
    forms: [
      {
        title: answeredForm.title,
        options: answeredForm.options.map((o) => {
          return {
            name: o.name,
            text: o.text ?? null,
          };
        }),
      },
    ],
  };
  switch (answeredForm.categoryId) {
    case HEARING_CATEGORY.ESPECIALLY_SCENE:
      categorizedForms.splice(
        categorizedForms.indexOf(
          categorizedForms.find(
            (a) => a.categoryId === HEARING_CATEGORY.SCENE
          ) as TCategorizedForm
        ) + 1,
        0,
        newAnswer
      );
      break;
    case HEARING_CATEGORY.ESPECIALLY_SOMEONE:
      categorizedForms.splice(
        categorizedForms.indexOf(
          categorizedForms.find(
            (a) => a.categoryId === HEARING_CATEGORY.SOMEONE
          ) as TCategorizedForm
        ) + 1,
        0,
        newAnswer
      );
      break;
    case HEARING_CATEGORY.ESPECIALLY_IMPRESSION:
      categorizedForms.splice(
        categorizedForms.indexOf(
          categorizedForms.find(
            (a) => a.categoryId === HEARING_CATEGORY.IMPRESSION
          ) as TCategorizedForm
        ) + 1,
        0,
        newAnswer
      );
      break;
    default:
      categorizedForms.push(newAnswer);
  }
};
