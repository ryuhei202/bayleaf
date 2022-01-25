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
            {options.includes(MULTIPLE_IMPRESSIONS.KIND.id) ? (
              <SelectButton
                selected={value === PRIMARY_IMPRESSION.KIND.id}
                onClick={() => setValue(PRIMARY_IMPRESSION.KIND.id)}
                onSelectTransitionEnd={handleSubmit}
              >
                {PRIMARY_IMPRESSION.KIND.name}
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(MULTIPLE_IMPRESSIONS.YOUNG.id) ? (
              <SelectButton
                selected={value === PRIMARY_IMPRESSION.YOUNG.id}
                onClick={() => setValue(PRIMARY_IMPRESSION.YOUNG.id)}
                onSelectTransitionEnd={handleSubmit}
              >
                {PRIMARY_IMPRESSION.YOUNG.name}
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(MULTIPLE_IMPRESSIONS.AGE_FIT.id) ? (
              <SelectButton
                selected={value === PRIMARY_IMPRESSION.AGE_FIT.id}
                onClick={() => setValue(PRIMARY_IMPRESSION.AGE_FIT.id)}
                onSelectTransitionEnd={handleSubmit}
              >
                {PRIMARY_IMPRESSION.AGE_FIT.name}
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(MULTIPLE_IMPRESSIONS.CLEAN.id) ? (
              <SelectButton
                selected={value === PRIMARY_IMPRESSION.CLEAN.id}
                onClick={() => setValue(PRIMARY_IMPRESSION.CLEAN.id)}
                onSelectTransitionEnd={handleSubmit}
              >
                {PRIMARY_IMPRESSION.CLEAN.name}
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(MULTIPLE_IMPRESSIONS.CALM.id) ? (
              <SelectButton
                selected={value === PRIMARY_IMPRESSION.CALM.id}
                onClick={() => setValue(PRIMARY_IMPRESSION.CALM.id)}
                onSelectTransitionEnd={handleSubmit}
              >
                {PRIMARY_IMPRESSION.CALM.name}
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(MULTIPLE_IMPRESSIONS.ACTIVE.id) ? (
              <SelectButton
                selected={value === PRIMARY_IMPRESSION.ACTIVE.id}
                onClick={() => setValue(PRIMARY_IMPRESSION.ACTIVE.id)}
                onSelectTransitionEnd={handleSubmit}
              >
                {PRIMARY_IMPRESSION.ACTIVE.name}
              </SelectButton>
            ) : (
              <></>
            )}
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
