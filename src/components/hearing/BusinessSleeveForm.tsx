import { useState } from "react";
import { ReferenceOptions } from "../../models/hearing/ReferenceOptions";
import { Button } from "../baseParts/legacy/Button";
import { IconButton } from "../baseParts/legacy/IconButton";
import { ArrowIcon } from "../baseParts/legacy/icons/ArrowIcon";
import { LongSleeveIcon } from "../baseParts/legacy/icons/LongSleeveIcon";
import { ShortSleeveIcon } from "../baseParts/legacy/icons/ShortSleeveIcon";
import { Page } from "../baseParts/legacy/Page";
import { PageHeader } from "../baseParts/legacy/PageHeader";
import { SelectButton } from "../baseParts/legacy/SelectButton";
import { Typography } from "../baseParts/legacy/Typography";

type Props = {
  defaultValue?: number;
  onSubmit: (optionId: number) => void;
  onCancel?: () => void;
};

export const BusinessSleeveForm = ({
  defaultValue,
  onSubmit,
  onCancel,
}: Props) => {
  const BUSINESS_SLEEVE = ReferenceOptions.BUSINESS_SLEEVE;
  const [value, setValue] = useState<number | undefined>(defaultValue);
  const handleSubmit = () => {
    if (value) onSubmit(value);
  };

  return (
    <Page className="px-5">
      <div className="flex flex-col justify-between h-full">
        <div>
          <PageHeader
            title={
              <>
                トップスの長袖・半袖の
                <br />
                枚数を選んでください
              </>
            }
            className="mb-16"
          />
          <div className="space-y-5">
            <SelectButton
              selected={value === BUSINESS_SLEEVE.LONG_2_SHORT_0.id}
              onClick={() => setValue(BUSINESS_SLEEVE.LONG_2_SHORT_0.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <LongSleeveIcon className="-ml-4" />
              <Typography>{BUSINESS_SLEEVE.LONG_2_SHORT_0.name}</Typography>
            </SelectButton>
            <SelectButton
              selected={value === BUSINESS_SLEEVE.LONG_1_SHORT_1.id}
              onClick={() => setValue(BUSINESS_SLEEVE.LONG_1_SHORT_1.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <ShortSleeveIcon className="ml-4" />
              <Typography>{BUSINESS_SLEEVE.LONG_1_SHORT_1.name}</Typography>
            </SelectButton>
            <SelectButton
              selected={value === BUSINESS_SLEEVE.LONG_0_SHORT_2.id}
              onClick={() => setValue(BUSINESS_SLEEVE.LONG_0_SHORT_2.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <ShortSleeveIcon />
              <ShortSleeveIcon className="-ml-4" />
              <Typography>{BUSINESS_SLEEVE.LONG_0_SHORT_2.name}</Typography>
            </SelectButton>
          </div>
        </div>
        <div className="flex flex-row mb-10">
          {onCancel ? (
            <IconButton onClick={onCancel}>
              <ArrowIcon className="h-10 my-auto" />
            </IconButton>
          ) : (
            <></>
          )}
          {defaultValue ? (
            <Button
              disabled={defaultValue === value}
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
