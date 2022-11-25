import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { BusinessSleeveForm } from "../../components/pageParts/hearing/BusinessSleeveForm";
import { CasualSleeveForm } from "../../components/pageParts/hearing/CasualSleeveForm";
import { TargetForm } from "../../components/pageParts/hearing/TargetForm";
import { REFERENCE_CATEGORY_IDS } from "../../models/hearing/ReferenceCategorieIds";
import { TReferenceChoice } from "../../models/hearing/TReferenceChoice";
import { ImpressionForm } from "./ImpressionForm";

type Props = {
  readonly categoryIds: number[];
  readonly onSubmit: (values: TReferenceChoice[]) => void;
};

export const RequiredCategoryForms = ({ categoryIds, onSubmit }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChoices, setCurrentChoices] = useState<TReferenceChoice[]>([]);

  const updateCurrentChoices = (newChoices: TReferenceChoice[]) => {
    let updatedChoices = [...currentChoices];
    newChoices.forEach((newChoice) => {
      const currentChoiceIndex = currentChoices.findIndex(
        (currentChoice) => currentChoice.categoryId === newChoice.categoryId
      );
      if (currentChoiceIndex === -1) {
        updatedChoices.push(newChoice);
      } else {
        updatedChoices[currentChoiceIndex] = newChoice;
      }
    });
    setCurrentChoices(updatedChoices);
  };

  const updateCurrentIndex = () => {
    if (currentIndex + 1 >= categoryIds.length) {
      onSubmit(currentChoices);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleTargetFormSubmit = (optionId: number) => {
    updateCurrentChoices([
      {
        categoryId: REFERENCE_CATEGORY_IDS.TARGET,
        optionIds: [optionId],
      },
    ]);
    updateCurrentIndex();
  };

  const handleImpressionFormSubmit = (choices: TReferenceChoice[]) => {
    updateCurrentChoices(choices);
    updateCurrentIndex();
  };

  const handleCasualSleeveFormSubmit = (optionId: number) => {
    updateCurrentChoices([
      {
        categoryId: REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE,
        optionIds: [optionId],
      },
    ]);
    updateCurrentIndex();
  };

  const handleBusinessSleeveFormSubmit = (optionId: number) => {
    updateCurrentChoices([
      {
        categoryId: REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE,
        optionIds: [optionId],
      },
    ]);
    updateCurrentIndex();
  };

  const handleCancel = () => {
    if (currentIndex === 0) return undefined;
    setCurrentIndex(currentIndex - 1);
  };

  switch (categoryIds[currentIndex]) {
    case REFERENCE_CATEGORY_IDS.TARGET:
      return (
        <TargetForm
          onSubmit={handleTargetFormSubmit}
          onCancel={currentIndex === 0 ? undefined : handleCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS:
      return (
        <ImpressionForm
          onSubmit={handleImpressionFormSubmit}
          onCancel={currentIndex === 0 ? undefined : handleCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE:
      return (
        <CasualSleeveForm
          onSubmit={handleCasualSleeveFormSubmit}
          onCancel={currentIndex === 0 ? undefined : handleCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE:
      return (
        <BusinessSleeveForm
          onSubmit={handleBusinessSleeveFormSubmit}
          onCancel={currentIndex === 0 ? undefined : handleCancel}
        />
      );
    default:
      return <Loader active />;
  }
};
