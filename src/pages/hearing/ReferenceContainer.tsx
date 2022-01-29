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
import { getReferenceContainerHandler } from "./getReferenceContainerHandler";
import { RequiredCategoryForms } from "./RequiredCategoryForms";
import { getReferenceContainerPresenter } from "./getReferenceContainerPresenter";

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
  const handler = getReferenceContainerHandler(
    stylingReference,
    modifiedChoices,
    setEditingCategory,
    setModifiedChoices,
    mutate
  );
  const presenter = getReferenceContainerPresenter(
    stylingReference,
    member,
    modifiedChoices
  );

  const requiredCategoryIds = presenter.presentRequiredCategoryIds();
  if (requiredCategoryIds.length > 0) {
    return (
      <RequiredCategoryForms
        categoryIds={requiredCategoryIds}
        onSubmit={handler.handleRequiredFormsSubmit}
      />
    );
  }

  switch (editingCategory) {
    case REFERENCE_CATEGORY_IDS.TARGET:
      return (
        <TargetForm
          defaultValue={presenter.presentCurrentOptionId(
            REFERENCE_CATEGORY_IDS.TARGET
          )}
          onSubmit={handler.handleTargetFormSubmit}
          onCancel={handler.handleFormCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS:
      return (
        <ImpressionForm
          defaultValues={presenter.presentCurrentOptionIds(
            REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS
          )}
          onSubmit={handler.handleImpressionsFormSubmit}
          onCancel={handler.handleFormCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE:
      return (
        <CasualSleeveForm
          defaultValue={presenter.presentCurrentOptionId(
            REFERENCE_CATEGORY_IDS.CASUAL_SLEEVE
          )}
          onSubmit={handler.handleSleeveFormSubmit}
          onCancel={handler.handleFormCancel}
        />
      );
    case REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE:
      return (
        <BusinessSleeveForm
          defaultValue={presenter.presentCurrentOptionId(
            REFERENCE_CATEGORY_IDS.BUSINESS_SLEEVE
          )}
          onSubmit={handler.handleBusinessSleeveFormSubmit}
          onCancel={handler.handleFormCancel}
        />
      );
  }

  return (
    <ReferenceDocument
      targetReference={presenter.presentReference(
        REFERENCE_CATEGORY_IDS.TARGET
      )}
      impressionReference={presenter.presentImpressionsReference()}
      sleeveReference={presenter.presentSleeveReference()}
      summaryReference={stylingReference.find(
        (reference) => reference.categoryId === REFERENCE_CATEGORY_IDS.SUMMARY
      )}
      otherReference={stylingReference.find(
        (reference) => reference.categoryId === REFERENCE_CATEGORY_IDS.OTHER
      )}
      referenceChanged={modifiedChoices.length > 0}
      allowHearingSkip={presenter.presentAllowHearingSkip()}
      onClickEdit={setEditingCategory}
      onSubmit={handler.handleDocumentSubmit}
    />
  );
};
