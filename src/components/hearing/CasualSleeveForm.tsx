import { useState } from "react";
import { ReferenceOptions } from "../../models/hearing/ReferenceOptions";
import { Button } from "../baseParts/Button";
import { IconButton } from "../baseParts/IconButton";
import { ArrowIcon } from "../baseParts/icons/ArrowIcon";
import { LongSleeveIcon } from "../baseParts/icons/LongSleeveIcon";
import { ShortSleeveIcon } from "../baseParts/icons/ShortSleeveIcon";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";

type Props = {
  defaultValue?: number;
  onSubmit: (optionId: number) => void;
  onCancel?: () => void;
};

export const CasualSleeveForm = ({
  defaultValue,
  onSubmit,
  onCancel,
}: Props) => {
  const CASUAL_SLEEVE = ReferenceOptions.CASUAL_SLEEVE;
  const [value, setValue] = useState<number | undefined>(defaultValue);
  const handleSubmit = () => {
    if (value) onSubmit(value);
  };

  return (
    <Page className="px-5">
      <div className="flex flex-col h-full justify-between">
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
              selected={value === CASUAL_SLEEVE.LONG_3_SHORT_0.id}
              onClick={() => setValue(CASUAL_SLEEVE.LONG_3_SHORT_0.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <LongSleeveIcon className="-ml-4" />
              <LongSleeveIcon className="-ml-4" />
              <Typography>{CASUAL_SLEEVE.LONG_3_SHORT_0.name}</Typography>
            </SelectButton>
            <SelectButton
              selected={value === CASUAL_SLEEVE.LONG_2_SHORT_1.id}
              onClick={() => setValue(CASUAL_SLEEVE.LONG_2_SHORT_1.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <LongSleeveIcon className="-ml-4" />
              <ShortSleeveIcon className="ml-4" />
              <Typography>{CASUAL_SLEEVE.LONG_2_SHORT_1.name}</Typography>
            </SelectButton>
            <SelectButton
              selected={value === CASUAL_SLEEVE.LONG_1_SHORT_2.id}
              onClick={() => setValue(CASUAL_SLEEVE.LONG_1_SHORT_2.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <ShortSleeveIcon className="ml-4" />
              <ShortSleeveIcon className="-ml-2" />
              <Typography>{CASUAL_SLEEVE.LONG_1_SHORT_2.name}</Typography>
            </SelectButton>
            <SelectButton
              selected={value === CASUAL_SLEEVE.LONG_0_SHORT_3.id}
              onClick={() => setValue(CASUAL_SLEEVE.LONG_0_SHORT_3.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <ShortSleeveIcon />
              <ShortSleeveIcon className="-ml-2" />
              <ShortSleeveIcon className="-ml-2" />
              <Typography>{CASUAL_SLEEVE.LONG_0_SHORT_3.name}</Typography>
            </SelectButton>
          </div>
        </div>
        <div className="w-full flex flex-row mb-10">
          {onCancel ? (
            <IconButton className="flex-none" onClick={onCancel}>
              <ArrowIcon className="h-10 w-fit my-auto" />
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
