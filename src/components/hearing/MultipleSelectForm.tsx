import { useState } from "react";
import { TOptionParams } from "../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../api/hearingForms/THearingFormShowResponse";
import { Button } from "../baseParts/Button";
import { IconButton } from "../baseParts/IconButton";
import { ArrowIcon } from "../baseParts/icons/ArrowIcon";
import { TextAreaAlt } from "../baseParts/inputs/TextAreaAlt";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly response: THearingFormShowResponse;
  readonly onSubmit: () => void;
  readonly onCancel: () => void;
};

type SelectedOptions = TOptionParams;

export const MultipleSelectForm = ({
  response,
  onSubmit,
  onCancel,
}: TProps) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions[]>([]);

  const handleClick = (optionId: number) => {
    const selectedOptionIds = selectedOptions.map((option) => option.id);
    if (selectedOptionIds.includes(optionId)) {
      const newSelectedOptions = selectedOptions.filter(
        (o) => o.id != optionId
      );
      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions([...selectedOptions, { id: optionId }]);
    }
  };
  const handleSubmit = () => {
    const hearingAnswers = {
      id: response.id,
      options: selectedOptions,
    };
    onSubmit();
  };

  const handleChangeText = (id: number, text: string) => {
    if (text === "") {
      const newSelectedOptions = selectedOptions.filter((o) => o.id != id);
      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions([...selectedOptions, { id, text }]);
    }
  };

  return (
    <Page className="px-5">
      <div className="flex flex-col justify-between h-full">
        <div>
          <PageHeader
            title={<>{response.title}</>}
            subtitle="※複数選択可"
            className="mb-16"
          />
          <div className="space-y-5">
            {response.options.map((option) =>
              option.isText ? (
                <>
                  <Typography>{option.name}</Typography>
                  <TextAreaAlt
                    className="h-[120px]"
                    value={
                      selectedOptions.find((o) => o.id === option.id)?.text ||
                      ""
                    }
                    onChange={(event) =>
                      handleChangeText(option.id, event.target.value as string)
                    }
                  />
                </>
              ) : (
                <SelectButton
                  key={option.id}
                  selected={selectedOptions
                    .map((option) => option.id)
                    .includes(option.id)}
                  onClick={() => handleClick(option.id)}
                >
                  {option.name}
                </SelectButton>
              )
            )}
          </div>
        </div>
        <div className="flex flex-row mb-10">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 my-auto" />
          </IconButton>
          <Button
            disabled={selectedOptions.length < 1}
            size="none"
            className="grow ml-3"
            onClick={handleSubmit}
          >
            <Typography className="my-auto">次へ</Typography>
          </Button>
        </div>
      </div>
    </Page>
  );
};
