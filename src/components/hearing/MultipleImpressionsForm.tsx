import { useState } from "react";
import { ReferenceOptions } from "../../models/hearing/ReferenceOptions";
import { Button } from "../baseParts/Button";
import { IconButton } from "../baseParts/IconButton";
import { ArrowIcon } from "../baseParts/icons/ArrowIcon";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";

type Props = {
  defaultValues?: number[];
  onSubmit: (optionIds: number[]) => void;
  onCancel?: () => void;
};

export const MultipleImpressionsForm = ({
  defaultValues,
  onSubmit,
  onCancel,
}: Props) => {
  const MULTIPLE_IMPRESSIONS = ReferenceOptions.MULTIPLE_IMPRESSIONS;
  const CHOICE_NUMBER = 3;
  const [values, setValues] = useState<number[] | undefined>(defaultValues);

  const handleClick = (value: number) => {
    if (values === undefined) {
      setValues([value]);
      return;
    }
    const index = values.indexOf(value);
    const newValues = [...values];
    if (index === -1) {
      if (newValues.length >= CHOICE_NUMBER) return;
      newValues.push(value);
    } else {
      newValues.splice(index, 1);
    }
    setValues(newValues);
  };

  const handleSubmit = () => {
    if (values !== undefined && values.length === CHOICE_NUMBER)
      onSubmit(values);
  };

  return (
    <Page className="px-5">
      <div className="flex flex-col justify-between h-full">
        <div>
          <PageHeader
            title={
              <>
                相手にどんな印象を
                <br />
                与えたいですか？
              </>
            }
            subtitle="(３つ選んでください)"
            className="mb-16"
          />
          <div className="space-y-5">
            <SelectButton
              selected={values?.includes(MULTIPLE_IMPRESSIONS.KIND.id) ?? false}
              disabled={
                values &&
                values.length >= CHOICE_NUMBER &&
                !values.includes(MULTIPLE_IMPRESSIONS.KIND.id)
              }
              onClick={() => handleClick(MULTIPLE_IMPRESSIONS.KIND.id)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              {MULTIPLE_IMPRESSIONS.KIND.name}
            </SelectButton>
            <SelectButton
              selected={
                values?.includes(MULTIPLE_IMPRESSIONS.YOUNG.id) ?? false
              }
              disabled={
                values &&
                values.length >= CHOICE_NUMBER &&
                !values.includes(MULTIPLE_IMPRESSIONS.YOUNG.id)
              }
              onClick={() => handleClick(MULTIPLE_IMPRESSIONS.YOUNG.id)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              {MULTIPLE_IMPRESSIONS.YOUNG.name}
            </SelectButton>
            <SelectButton
              selected={
                values?.includes(MULTIPLE_IMPRESSIONS.AGE_FIT.id) ?? false
              }
              disabled={
                values &&
                values.length >= 3 &&
                !values.includes(MULTIPLE_IMPRESSIONS.AGE_FIT.id)
              }
              onClick={() => handleClick(MULTIPLE_IMPRESSIONS.AGE_FIT.id)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              {MULTIPLE_IMPRESSIONS.AGE_FIT.name}
            </SelectButton>
            <SelectButton
              selected={
                values?.includes(MULTIPLE_IMPRESSIONS.CLEAN.id) ?? false
              }
              disabled={
                values &&
                values.length >= CHOICE_NUMBER &&
                !values.includes(MULTIPLE_IMPRESSIONS.CLEAN.id)
              }
              onClick={() => handleClick(MULTIPLE_IMPRESSIONS.CLEAN.id)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              {MULTIPLE_IMPRESSIONS.CLEAN.name}
            </SelectButton>
            <SelectButton
              selected={values?.includes(MULTIPLE_IMPRESSIONS.CALM.id) ?? false}
              disabled={
                values &&
                values.length >= CHOICE_NUMBER &&
                !values.includes(MULTIPLE_IMPRESSIONS.CALM.id)
              }
              onClick={() => handleClick(MULTIPLE_IMPRESSIONS.CALM.id)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              {MULTIPLE_IMPRESSIONS.CALM.name}
            </SelectButton>
            <SelectButton
              selected={
                values?.includes(MULTIPLE_IMPRESSIONS.ACTIVE.id) ?? false
              }
              disabled={
                values &&
                values.length >= CHOICE_NUMBER &&
                !values.includes(MULTIPLE_IMPRESSIONS.ACTIVE.id)
              }
              onClick={() => handleClick(MULTIPLE_IMPRESSIONS.ACTIVE.id)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              {MULTIPLE_IMPRESSIONS.ACTIVE.name}
            </SelectButton>
          </div>
        </div>
        <div className="mt-auto mb-10 flex flex-row space-x-3">
          {onCancel ? (
            <IconButton className="flex-none" onClick={onCancel}>
              <ArrowIcon className="h-10 w-fit my-auto" />
            </IconButton>
          ) : (
            <></>
          )}
          {defaultValues ? (
            <Button
              disabled={values?.length !== 3}
              size="none"
              className="grow"
              onClick={handleSubmit}
            >
              <Typography className="my-auto">変更を適用する</Typography>
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Page>
  );
};
