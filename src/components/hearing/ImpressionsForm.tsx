import { useState } from "react";
import { Button } from "../baseParts/Button";
import { IconButton } from "../baseParts/IconButton";
import { ArrowIcon } from "../baseParts/icons/ArrowIcon";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";

type Props = {
  defaultValues?: (6 | 7 | 8 | 9 | 10 | 11)[];
  onSubmit: (ids: number[]) => void;
  onCancel: () => void;
};

export const ImpressionsForm = ({
  defaultValues,
  onSubmit,
  onCancel,
}: Props) => {
  const [values, setValues] = useState<number[] | undefined>(defaultValues);

  const handleClick = (value: number) => {
    if (values === undefined) {
      setValues([value]);
      return;
    }
    const index = values.indexOf(value);
    if (index === -1) {
      if (values.length >= 3) return;
      values.push(value);
    } else {
      values.splice(index, 1);
    }
    setValues([...values]);
  };
  const handleSubmit = () => {
    if (values !== undefined && values.length === 3) onSubmit(values);
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
              selected={values?.includes(6) ?? false}
              disabled={values && values.length >= 3 && !values.includes(6)}
              onClick={() => handleClick(6)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              優しい
            </SelectButton>
            <SelectButton
              selected={values?.includes(7) ?? false}
              disabled={values && values.length >= 3 && !values.includes(7)}
              onClick={() => handleClick(7)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              若々しい
            </SelectButton>
            <SelectButton
              selected={values?.includes(8) ?? false}
              disabled={values && values.length >= 3 && !values.includes(8)}
              onClick={() => handleClick(8)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              年齢に合った
            </SelectButton>
            <SelectButton
              selected={values?.includes(9) ?? false}
              disabled={values && values.length >= 3 && !values.includes(9)}
              onClick={() => handleClick(9)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              清潔感のある
            </SelectButton>
            <SelectButton
              selected={values?.includes(10) ?? false}
              disabled={values && values.length >= 3 && !values.includes(10)}
              onClick={() => handleClick(10)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              落ち着いた
            </SelectButton>
            <SelectButton
              selected={values?.includes(11) ?? false}
              disabled={values && values.length >= 3 && !values.includes(11)}
              onClick={() => handleClick(11)}
              onSelectTransitionEnd={
                defaultValues !== undefined ? undefined : handleSubmit
              }
            >
              活発な(アクティブな)
            </SelectButton>
          </div>
        </div>
        <div className="mt-auto mb-10 flex flex-row space-x-3">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 w-fit my-auto" />
          </IconButton>
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
