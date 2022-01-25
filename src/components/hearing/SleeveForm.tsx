import { useState } from "react";
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
  defaultValue?: 23 | 24 | 25 | 26;
  onSubmit: (id: number) => void;
  onCancel: () => void;
};

export const SleeveForm = ({ defaultValue, onSubmit, onCancel }: Props) => {
  const [value, setValue] = useState<number | undefined>(defaultValue);
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
                トップスの長袖・半袖の
                <br />
                枚数を選んでください
              </>
            }
            className="mb-16"
          />
          <div className="space-y-5">
            <SelectButton
              selected={value === 23}
              onClick={() => setValue(23)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <LongSleeveIcon className="-ml-4" />
              <LongSleeveIcon className="-ml-4" />
              <Typography>長袖3 / 半袖0</Typography>
            </SelectButton>
            <SelectButton
              selected={value === 24}
              onClick={() => setValue(24)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <LongSleeveIcon className="-ml-4" />
              <ShortSleeveIcon className="ml-4" />
              <Typography>長袖2 / 半袖1</Typography>
            </SelectButton>
            <SelectButton
              selected={value === 25}
              onClick={() => setValue(25)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <LongSleeveIcon />
              <ShortSleeveIcon className="ml-4" />
              <ShortSleeveIcon className="-ml-2" />
              <Typography>長袖1 / 半袖2</Typography>
            </SelectButton>
            <SelectButton
              selected={value === 26}
              onClick={() => setValue(26)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <ShortSleeveIcon />
              <ShortSleeveIcon className="-ml-2" />
              <ShortSleeveIcon className="-ml-2" />
              <Typography>長袖0 / 半袖3</Typography>
            </SelectButton>
          </div>
        </div>
        <div className="mt-auto mb-10 flex flex-row space-x-3">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 w-fit my-auto" />
          </IconButton>
          {defaultValue ? (
            <Button size="none" className="grow" onClick={handleSubmit}>
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
