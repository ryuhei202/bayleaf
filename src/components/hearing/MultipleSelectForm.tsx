import { useEffect, useState } from "react";
import { TFormParams } from "../../api/charts/TFormParams";
import { TOptionParams } from "../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../api/hearingForms/THearingFormShowResponse";
import { AnsweredHearing } from "../../pages/hearing/HearingFetcher";
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
  readonly onSubmit: (answer: TFormParams, nextFormId: number | null) => void;
  readonly onCancel: () => void;
};

type TSelectedOption = TOptionParams;

export const MultipleSelectForm = ({
  response,
  onSubmit,
  onCancel,
}: TProps) => {
  const [selectedOptions, setSelectedOptions] = useState<TSelectedOption[]>([]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [response]);

  const handleClick = (optionId: number, isSingleAnswer: boolean) => {
    const selectedOptionIds = selectedOptions.map((option) => option.id);

    if (selectedOptionIds.includes(optionId)) {
      const newSelectedOptions = selectedOptions.filter(
        (o) => o.id !== optionId
      );
      setSelectedOptions(newSelectedOptions);
    } else {
      const someAnswerNum = response.options
        .filter((o) => o.isSingleAnswer === isSingleAnswer)
        .map((s) => s.id);
      const newSelectedOptions = selectedOptions.filter((s) =>
        someAnswerNum.includes(s.id)
      );
      setSelectedOptions([...newSelectedOptions, { id: optionId }]);
    }
  };
  const handleSubmit = () => {
    const answer: AnsweredHearing = {
      id: response.id,
      options: selectedOptions,
    };
    const nextFormId =
      selectedOptions.length > 1
        ? response.multipleAnswerNextFormId
        : response.options.find((o) => o.id === selectedOptions[0].id)
            ?.nextFormId;
    if (nextFormId !== undefined) onSubmit(answer, nextFormId);
  };

  const handleChangeText = (id: number, text: string) => {
    const newSelectedOptions = selectedOptions.filter((o) => o.id !== id);
    if (text === "") {
      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions([...newSelectedOptions, { id, text }]);
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
                      selectedOptions.find((o) => o.id === option.id)?.text ??
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
                  onClick={() => handleClick(option.id, option.isSingleAnswer)}
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
