import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { REFERENCE_CATEGORY_IDS } from "../../models/hearing/ReferenceCategorieIds";
import { TReferenceChoice } from "../../models/hearing/TReferenceChoice";

type ReferenceContainerHandler = {
  handleFormCancel: () => void;
  handleTargetFormSubmit: (optionId: number) => void;
  handleSleeveFormSubmit: (optionId: number) => void;
  handleBusinessSleeveFormSubmit: (optionId: number) => void;
  handleImpressionsFormSubmit: (choices: TReferenceChoice[]) => void;
  handleRequiredFormsSubmit: (choices: TReferenceChoice[]) => void;
  handleDocumentSubmit: (isSkipingHearing: boolean) => void;
};

export const getReferenceContainerHandler = (
  stylingReference: TStylingReferenceShowResponse[],
  modifiedChoices: TReferenceChoice[],
  setEditingCategory: (categoryId: number | undefined) => void,
  setModifiedChoices: (modifiedChoice: TReferenceChoice[]) => void
): ReferenceContainerHandler => {
  const updateModifiedChoices = (choice: TReferenceChoice) => {
    const currentIndex = modifiedChoices.findIndex(
      (previousChoice) => previousChoice.categoryId === choice.categoryId
    );
    const newModifiedChoices = [...modifiedChoices];
    if (currentIndex === -1) {
      newModifiedChoices.push(choice);
    } else {
      newModifiedChoices.splice(currentIndex, 1);
      if (
        stylingReference
          .find((reference) => reference.categoryId === choice.categoryId)
          ?.choices.map((choice) => choice.id) !== choice.optionIds
      ) {
        newModifiedChoices.push(choice);
      }
    }
    setModifiedChoices(newModifiedChoices);
    setEditingCategory(undefined);
  };

  const handleFormCancel = () => {
    setEditingCategory(undefined);
  };

  const handleTargetFormSubmit = (optionId: number) => {
    updateModifiedChoices({
      categoryId: REFERENCE_CATEGORY_IDS.TARGET,
      optionIds: [optionId],
    });
  };

  const handleSleeveFormSubmit = (optionId: number) => {
    updateModifiedChoices({
      categoryId: REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE,
      optionIds: [optionId],
    });
  };

  const handleBusinessSleeveFormSubmit = (optionId: number) => {
    updateModifiedChoices({
      categoryId: REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE,
      optionIds: [optionId],
    });
  };

  const handleImpressionsFormSubmit = (choices: TReferenceChoice[]) => {
    choices.forEach((choice) => {
      updateModifiedChoices(choice);
    });
  };

  const handleDocumentSubmit = (isSkipingHearing: boolean) => {};

  const handleRequiredFormsSubmit = (choices: TReferenceChoice[]) => {
    setModifiedChoices(choices);
  };

  return {
    handleFormCancel,
    handleTargetFormSubmit,
    handleSleeveFormSubmit,
    handleBusinessSleeveFormSubmit,
    handleImpressionsFormSubmit,
    handleRequiredFormsSubmit,
    handleDocumentSubmit,
  };
};
