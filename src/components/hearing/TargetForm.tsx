import { useState } from "react";
import { Button } from "../baseParts/Button";
import { IconButton } from "../baseParts/IconButton";
import { ArrowIcon } from "../baseParts/icons/ArrowIcon";
import { CoworkerIcon } from "../baseParts/icons/CoworkerIcon";
import { FamilyIcon } from "../baseParts/icons/FamilyIcon";
import { FriendIcon } from "../baseParts/icons/FriendIcon";
import { PartnerIcon } from "../baseParts/icons/PartnerIcon";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";

type Props = {
  defaultValue?: 1 | 2 | 3 | 4 | 5;
  onSubmit: (id: number) => void;
  onCancel: () => void;
};

export const TargetForm = ({ defaultValue, onSubmit, onCancel }: Props) => {
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
                誰を意識した洋服を
                <br />
                着たいですか？
              </>
            }
            className="mb-16"
          />
          <div className="mb-5 flex flex-row space-x-5">
            <SelectButton
              className="basis-1/2"
              selected={value === 1}
              onClick={() => setValue(1)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <CoworkerIcon className="mb-3" />
              <Typography>職場</Typography>
            </SelectButton>
            <SelectButton
              className="basis-1/2"
              selected={value === 2}
              onClick={() => setValue(2)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <FamilyIcon className="mb-3" />
              <Typography>家族</Typography>
            </SelectButton>
          </div>
          <div className="mb-5 flex flex-row space-x-5">
            <SelectButton
              className="basis-1/2"
              selected={value === 3}
              onClick={() => setValue(3)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <PartnerIcon className="mb-3" />
              <Typography>異性(恋人)</Typography>
            </SelectButton>
            <SelectButton
              className="basis-1/2"
              selected={value === 4}
              onClick={() => setValue(4)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <FriendIcon className="mb-3" />
              <Typography>友人</Typography>
            </SelectButton>
          </div>
          <SelectButton
            selected={value === 5}
            onClick={() => setValue(5)}
            onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
          >
            <Typography>特になし</Typography>
          </SelectButton>
        </div>
        <div className="mt-auto mb-10 flex flex-row space-x-3">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 w-fit my-auto" />
          </IconButton>
          {defaultValue ? (
            <Button
              disabled={value === undefined}
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
