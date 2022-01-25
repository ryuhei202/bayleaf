import { useState } from "react";
import { IconButton } from "../baseParts/IconButton";
import { ArrowIcon } from "../baseParts/icons/ArrowIcon";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { SelectButton } from "../baseParts/SelectButton";

type Props = {
  options: (6 | 7 | 8 | 9 | 10 | 11)[];
  onSubmit: (id: number) => void;
  onCancel: () => void;
};

export const PrimaryImpressionForm = ({
  options,
  onSubmit,
  onCancel,
}: Props) => {
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
            {options.includes(6) ? (
              <SelectButton
                selected={value === 6}
                onClick={() => setValue(6)}
                onSelectTransitionEnd={handleSubmit}
              >
                優しい
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(7) ? (
              <SelectButton
                selected={value === 7}
                onClick={() => setValue(7)}
                onSelectTransitionEnd={handleSubmit}
              >
                若々しい
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(8) ? (
              <SelectButton
                selected={value === 8}
                onClick={() => setValue(8)}
                onSelectTransitionEnd={handleSubmit}
              >
                年齢に合った
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(9) ? (
              <SelectButton
                selected={value === 9}
                onClick={() => setValue(9)}
                onSelectTransitionEnd={handleSubmit}
              >
                清潔感のある
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(10) ? (
              <SelectButton
                selected={value === 10}
                onClick={() => setValue(10)}
                onSelectTransitionEnd={handleSubmit}
              >
                落ち着いた
              </SelectButton>
            ) : (
              <></>
            )}
            {options.includes(11) ? (
              <SelectButton
                selected={value === 11}
                onClick={() => setValue(11)}
                onSelectTransitionEnd={handleSubmit}
              >
                活発な(アクティブな)
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
