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
import { ReferenceOptions } from "../../models/hearing/ReferenceOptions";

type Props = {
  defaultValue?: number;
  onSubmit: (optionId: number) => void;
  onCancel?: () => void;
};

export const TargetForm = ({ defaultValue, onSubmit, onCancel }: Props) => {
  const TARGET = ReferenceOptions.TARGET;
  const [value, setValue] = useState<number | undefined>(defaultValue);
  const handleSubmit = () => {
    if (value) {
      onSubmit(value);
    }
  };

  return (
    <Page className="px-5">
      <div className="flex flex-col h-full justify-between">
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
              selected={value === TARGET.COWORKER.id}
              onClick={() => setValue(TARGET.COWORKER.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <CoworkerIcon className="mb-3" />
              <Typography>{TARGET.COWORKER.name}</Typography>
            </SelectButton>
            <SelectButton
              className="basis-1/2"
              selected={value === TARGET.FAMILY.id}
              onClick={() => setValue(TARGET.FAMILY.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <FamilyIcon className="mb-3" />
              <Typography>{TARGET.FAMILY.name}</Typography>
            </SelectButton>
          </div>
          <div className="mb-5 flex flex-row space-x-5">
            <SelectButton
              className="basis-1/2"
              selected={value === TARGET.PARTNER.id}
              onClick={() => setValue(TARGET.PARTNER.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <PartnerIcon className="mb-3" />
              <Typography>{TARGET.PARTNER.name}</Typography>
            </SelectButton>
            <SelectButton
              className="basis-1/2"
              selected={value === TARGET.FRIEND.id}
              onClick={() => setValue(TARGET.FRIEND.id)}
              onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
            >
              <FriendIcon className="mb-3" />
              <Typography>{TARGET.FRIEND.name}</Typography>
            </SelectButton>
          </div>
          <SelectButton
            selected={value === TARGET.NONE.id}
            onClick={() => setValue(TARGET.NONE.id)}
            onSelectTransitionEnd={defaultValue ? undefined : handleSubmit}
          >
            <Typography>{TARGET.NONE.name}</Typography>
          </SelectButton>
        </div>
        <div className="mb-10 flex flex-row space-x-3">
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
