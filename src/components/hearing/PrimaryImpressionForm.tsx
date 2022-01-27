import { useState } from "react";
import { ReferenceOptions } from "../../models/hearing/ReferenceOptions";
import { IconButton } from "../baseParts/IconButton";
import { ArrowIcon } from "../baseParts/icons/ArrowIcon";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { SelectButton } from "../baseParts/SelectButton";

type Props = {
  options: number[];
  onSubmit: (optionId: number) => void;
  onCancel: () => void;
};

export const PrimaryImpressionForm = ({
  options,
  onSubmit,
  onCancel,
}: Props) => {
  const MULTIPLE_IMPRESSIONS = ReferenceOptions.MULTIPLE_IMPRESSIONS;
  const PRIMARY_IMPRESSION = ReferenceOptions.PRIMARY_IMPRESSIONS;
  const [value, setValue] = useState<number | undefined>(undefined);

  const handleSubmit = () => {
    if (value !== undefined) onSubmit(value);
  };

  const selections = options
    .map((option) => {
      switch (option) {
        case MULTIPLE_IMPRESSIONS.KIND.id:
          return PRIMARY_IMPRESSION.KIND;
        case MULTIPLE_IMPRESSIONS.YOUNG.id:
          return PRIMARY_IMPRESSION.YOUNG;
        case MULTIPLE_IMPRESSIONS.AGE_FIT.id:
          return PRIMARY_IMPRESSION.AGE_FIT;
        case MULTIPLE_IMPRESSIONS.CLEAN.id:
          return PRIMARY_IMPRESSION.CLEAN;
        case MULTIPLE_IMPRESSIONS.CALM.id:
          return PRIMARY_IMPRESSION.CALM;
        case MULTIPLE_IMPRESSIONS.ACTIVE.id:
          return PRIMARY_IMPRESSION.ACTIVE;
        default:
          return undefined;
      }
    })
    .filter(
      (option): option is Exclude<typeof option, undefined> =>
        option !== undefined
    );

  return (
    <Page className="px-5">
      <div className="flex flex-col justify-between h-full">
        <div>
          <PageHeader
            title={
              <>
                その中でも特に意識したい
                <br />
                印象はどれですか？
              </>
            }
            className="mb-16"
          />
          <div className="space-y-5">
            {selections.map((selection) => (
              <SelectButton
                selected={value === selection.id}
                onClick={() => setValue(selection.id)}
                onSelectTransitionEnd={handleSubmit}
                key={selection.id}
              >
                {selection.name}
              </SelectButton>
            ))}
          </div>
        </div>
        <div className="mt-auto mb-10 flex flex-row space-x-3">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 w-fit my-auto" />
          </IconButton>
        </div>
      </div>
    </Page>
  );
};
