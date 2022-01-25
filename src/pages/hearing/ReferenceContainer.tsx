import { useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { useStylingReferenceUpdate } from "../../api/stylingReference/useStylingReferenceUpdate";
import { BusinessSleeveForm } from "../../components/hearing/BusinessSleeveForm";
import { ReferenceDocument } from "../../components/hearing/ReferenceDocument";
import { CasualSleeveForm } from "../../components/hearing/CasualSleeveForm";
import { TargetForm } from "../../components/hearing/TargetForm";
import { REFERENCE_CATEGORY_IDS } from "../../models/hearing/ReferenceCategorieIds";
import { TReferenceChoice } from "../../models/hearing/TReferenceChoice";
import { ImpressionForm } from "./ImpressionForm";
import { useReferenceContainerHandlers } from "./useReferenceContainerHandlers";
import { RequiredCategoryForms } from "./RequiredCategoryForms";
import { useReferenceContainerPresenters } from "./useReferenceContainerPresenter";

type Props = {
  readonly member: TMembersIndexResponse;
  readonly stylingReference: TStylingReferenceShowResponse[];
};

export const ReferenceContainer = ({ member, stylingReference }: Props) => {
  const [modifiedChoices, setModifiedChoices] = useState<TReferenceChoice[]>(
    []
  );
  const [editingCategory, setEditingCategory] =
    useState<number | undefined>(undefined);
  const { mutate } = useStylingReferenceUpdate(
    modifiedChoices.flatMap((choice) => choice.optionIds),
    member.id
  );
  const {
    handleFormCancel,
    handleTargetFormSubmit,
    handleSleeveFormSubmit,
    handleBusinessSleeveFormSubmit,
    handleImpressionsFormSubmit,
    handleRequiredFormsSubmit,
    handleDocumentSubmit,
  } = useReferenceContainerHandlers(
    stylingReference,
    modifiedChoices,
    setEditingCategory,
    setModifiedChoices,
    mutate
  );
  const {
    presentReference,
    presentImpressionsReference,
    presentSleeveReference,
    presentRequiredCategoryIds,
    presentCurrentOptionId,
    presentCurrentOptionIds,
    presentAllowHearingSkip,
  } = useReferenceContainerPresenters(
    stylingReference,
    member,
    modifiedChoices
  );

  const requiredCategoryIds = presentRequiredCategoryIds();
  if (requiredCategoryIds.length > 0) {
    return (
      <RequiredCategoryForms
        categoryIds={requiredCategoryIds}
        onSubmit={handleRequiredFormsSubmit}
      />
    );
  }

  switch (editingCategory) {
    case REFERENCE_CATEGORY_IDS.TARGET:
      return (
        <TargetForm
          defaultValue={presentCurrentOptionId(REFERENCE_CATEGORY_IDS.TARGET)}
          onSubmit={handleTargetFormSubmit}
          onCancel={handleFormCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS:
      return (
        <ImpressionForm
          defaultValues={presentCurrentOptionIds(
            REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS
          )}
          onSubmit={handleImpressionsFormSubmit}
          onCancel={handleFormCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE:
      return (
        <CasualSleeveForm
          defaultValue={presentCurrentOptionId(
            REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE
          )}
          onSubmit={handleSleeveFormSubmit}
          onCancel={handleFormCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE:
      return (
        <BusinessSleeveForm
          defaultValue={presentCurrentOptionId(
            REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE
          )}
          onSubmit={handleBusinessSleeveFormSubmit}
          onCancel={handleFormCancel}
        />
      );
  }

  return (
    <ReferenceDocument
      targetReference={presentReference(REFERENCE_CATEGORY_IDS.TARGET)}
      impressionReference={presentImpressionsReference()}
      sleeveReference={presentSleeveReference()}
      summaryReference={stylingReference.find(
        (reference) => reference.categoryId === REFERENCE_CATEGORY_IDS.SUMMARY
      )}
      otherReference={stylingReference.find(
        (reference) => reference.categoryId === REFERENCE_CATEGORY_IDS.OTHER
      )}
      referenceChanged={modifiedChoices.length > 0}
      allowHearingSkip={presentAllowHearingSkip()}
      onClickEdit={setEditingCategory}
      onSubmit={handleDocumentSubmit}
    />
  );
};
