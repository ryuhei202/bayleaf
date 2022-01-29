import { REFERENCE_CATEGORY_IDS } from "./../../models/hearing/ReferenceCategorieIds";
import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { M_PLAN_IDS } from "../../models/hearing/MPlanIds";
import { ReferenceOptions } from "../../models/hearing/ReferenceOptions";
import { TReferenceChoice } from "../../models/hearing/TReferenceChoice";

type ReferenceContainerPresenter = {
  presentReference: (
    categoryId: number
  ) => TStylingReferenceShowResponse | undefined;
  presentImpressionsReference: () =>
    | {
        multipleImpressionsReference: TStylingReferenceShowResponse;
        primaryImpressionReference: TStylingReferenceShowResponse;
      }
    | undefined;
  presentSleeveReference: () => TStylingReferenceShowResponse | undefined;
  presentRequiredCategoryIds: () => number[];
  presentCurrentOptionId: (categoryId: number) => number | undefined;
  presentCurrentOptionIds: (categoryId: number) => number[] | undefined;
  presentAllowHearingSkip: () => boolean;
};

export const getReferenceContainerPresenter = (
  stylingReference: TStylingReferenceShowResponse[],
  member: TMembersIndexResponse,
  modifiedChoices: TReferenceChoice[]
): ReferenceContainerPresenter => {
  const presentReference = (categoryId: number) => {
    let modifiedChoice = modifiedChoices.find(
      (choice) => choice.categoryId === categoryId
    );
    if (modifiedChoice) {
      return {
        categoryId: categoryId,
        choices: modifiedChoice.optionIds.map((optionsId) => {
          return {
            id: optionsId,
            name: ReferenceOptions.findById(optionsId)?.name ?? "",
          };
        }),
        text: null,
      };
    } else {
      return stylingReference.find(
        (reference) => reference.categoryId === categoryId
      );
    }
  };

  const presentImpressionsReference = () => {
    const multipleImpressionsReference = presentReference(
      REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS
    );
    const primaryImpressionReference = presentReference(
      REFERENCE_CATEGORY_IDS.PRIMARY_IMPRESSION
    );
    if (multipleImpressionsReference && primaryImpressionReference)
      return { multipleImpressionsReference, primaryImpressionReference };
    return undefined;
  };

  const presentSleeveReference = () => {
    switch (member.mPlanId) {
      case M_PLAN_IDS.CASUAL:
        return presentReference(REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE);
      case M_PLAN_IDS.BUSINESS:
        return presentReference(REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE);
      default:
        return undefined;
    }
  };

  const presentRequiredCategoryIds = () => {
    const requiredCategoryIds = [
      REFERENCE_CATEGORY_IDS.TARGET,
      // TODO: コーデルール適用後uncomment
      // REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS,
    ];
    switch (member.mPlanId) {
      case M_PLAN_IDS.CASUAL:
        requiredCategoryIds.push(REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE);
        break;
      case M_PLAN_IDS.BUSINESS:
        requiredCategoryIds.push(REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE);
    }
    return requiredCategoryIds
      .filter(
        (categoryId) =>
          stylingReference.findIndex(
            (reference) => reference.categoryId === categoryId
          ) === -1
      )
      .filter(
        (categoryId) =>
          modifiedChoices.findIndex(
            (choice) => choice.categoryId === categoryId
          ) === -1
      );
  };

  const presentCurrentOptionId = (categoryId: number) => {
    let modifiedChoice = modifiedChoices.find(
      (choice) => choice.categoryId === categoryId
    );
    if (modifiedChoice) {
      return modifiedChoice.optionIds[0];
    } else {
      return stylingReference
        .find((reference) => reference.categoryId === categoryId)
        ?.choices.map((choice) => choice.id)[0];
    }
  };

  const presentCurrentOptionIds = (categoryId: number) => {
    let modifiedChoice = modifiedChoices.find(
      (choice) => choice.categoryId === categoryId
    );
    if (modifiedChoice) {
      return [...modifiedChoice.optionIds];
    } else {
      const modifiedIds = stylingReference
        .find((reference) => reference.categoryId === categoryId)
        ?.choices.map((choice) => choice.id)
        .map((x) => x);
      return modifiedIds ? [...modifiedIds] : undefined;
    }
  };

  const presentAllowHearingSkip = () => {
    const isSleeveChoice =
      modifiedChoices.length === 1 &&
      [
        REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE,
        REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE,
      ].includes(modifiedChoices[0].categoryId);
    return modifiedChoices.length === 0 || isSleeveChoice;
  };

  return {
    presentReference,
    presentImpressionsReference,
    presentSleeveReference,
    presentRequiredCategoryIds,
    presentCurrentOptionId,
    presentCurrentOptionIds,
    presentAllowHearingSkip,
  };
};
