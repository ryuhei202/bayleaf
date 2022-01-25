import { useState } from "react";
import { MultipleImpressionsForm } from "../../components/hearing/MultipleImpressionsForm";
import { PrimaryImpressionForm } from "../../components/hearing/PrimaryImpressionForm";
import { REFERENCE_CATEGORY_IDS } from "../../models/hearing/ReferenceCategorieIds";
import { TReferenceChoice } from "../../models/hearing/TReferenceChoice";

type Props = {
  readonly defaultValues?: number[];
  readonly onCancel?: () => void;
  readonly onSubmit: (choices: TReferenceChoice[]) => void;
};

export const ImpressionForm = ({
  defaultValues,
  onCancel,
  onSubmit,
}: Props) => {
  const [options, setOptions] = useState<number[] | undefined>(undefined);

  if (options) {
    return (
      <PrimaryImpressionForm
        options={options}
        onSubmit={(optionId: number) => {
          onSubmit([
            {
              categoryId: REFERENCE_CATEGORY_IDS.MULTIPLE_IMPRESSIONS,
              optionIds: options,
            },
            {
              categoryId: REFERENCE_CATEGORY_IDS.PRIMARY_IMPRESSION,
              optionIds: [optionId],
            },
          ]);
        }}
        onCancel={() => setOptions(undefined)}
      />
    );
  } else {
    return (
      <MultipleImpressionsForm
        defaultValues={defaultValues}
        onSubmit={setOptions}
        onCancel={onCancel}
      />
    );
  }
};
