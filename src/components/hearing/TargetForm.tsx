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
import { Typography } from "../baseParts/Typography";

type Props = {
  defaultValue?: 1 | 2 | 3 | 4 | 5;
  onSubmit: (value: number) => void;
  onCancel: () => void;
};

export const TargetForm = ({ defaultValue, onSubmit, onCancel }: Props) => {
  const [value, setValue] = useState<number | undefined>(defaultValue);
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
            <Button
              className="basis-1/2"
              variant={value === 1 ? "primary" : "default"}
              onClick={defaultValue ? () => setValue(1) : () => onSubmit(1)}
            >
              <CoworkerIcon className="mb-3" />
              <Typography bold>職場</Typography>
            </Button>
            <Button
              className="basis-1/2"
              variant={value === 2 ? "primary" : "default"}
              onClick={defaultValue ? () => setValue(2) : () => onSubmit(2)}
            >
              <FamilyIcon className="mb-3" />
              <Typography bold>家族</Typography>
            </Button>
          </div>
          <div className="mb-5 flex flex-row space-x-5">
            <Button
              className="basis-1/2"
              variant={value === 3 ? "primary" : "default"}
              onClick={defaultValue ? () => setValue(3) : () => onSubmit(3)}
            >
              <PartnerIcon className="mb-3" />
              <Typography bold>異性(恋人)</Typography>
            </Button>
            <Button
              className="basis-1/2"
              variant={value === 4 ? "primary" : "default"}
              onClick={defaultValue ? () => setValue(4) : () => onSubmit(4)}
            >
              <FriendIcon className="mb-3" />
              <Typography bold>友人</Typography>
            </Button>
          </div>
          <Button
            variant={value === 5 ? "primary" : "default"}
            onClick={defaultValue ? () => setValue(5) : () => onSubmit(5)}
          >
            <Typography bold>特になし</Typography>
          </Button>
        </div>
        <div className="mt-auto mb-10 flex flex-row space-x-3">
          <IconButton className="flex-none">
            <ArrowIcon className="h-10 w-fit my-auto" />
          </IconButton>
          {defaultValue ? (
            <Button size="none" className="grow">
              <Typography bold className="my-auto">
                変更を適用する
              </Typography>
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Page>
  );
};
