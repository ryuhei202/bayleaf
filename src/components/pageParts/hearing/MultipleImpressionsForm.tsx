import { useState } from "react";
import { ReferenceOptions } from "../../../models/hearing/ReferenceOptions";
import { Button } from "../../baseParts/Button";
import { IconButton } from "../../baseParts/IconButton";
import { ArrowIcon } from "../../baseParts/icons/ArrowIcon";
import { Page } from "../../baseParts/Page";
import { PageHeader } from "../../baseParts/PageHeader";
import { SelectButton } from "../../baseParts/SelectButton";
import { Typography } from "../../baseParts/Typography";

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
            {Object.values(MULTIPLE_IMPRESSIONS).map((option) => (
              <SelectButton
                selected={values?.includes(option.id) ?? false}
                disabled={
                  values &&
                  values.length >= CHOICE_NUMBER &&
                  !values.includes(option.id)
                }
                onClick={() => handleClick(option.id)}
                onSelectTransitionEnd={
                  defaultValues !== undefined ? undefined : handleSubmit
                }
                key={option.id}
              >
                {option.name}
              </SelectButton>
            ))}
          </div>
        </div>
        <div className="flex flex-row mb-10">
          {onCancel ? (
            <IconButton className="flex-none" onClick={onCancel}>
              <ArrowIcon className="h-10 my-auto" />
            </IconButton>
          ) : (
            <></>
          )}
          {defaultValues ? (
            <Button
              disabled={values?.length !== 3}
              size="none"
              className="grow ml-3"
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
