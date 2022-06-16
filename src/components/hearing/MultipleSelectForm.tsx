import { useEffect, useState } from "react";
import { TOptionParams } from "../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../api/hearingForms/THearingFormShowResponse";
import { AnsweredHearing } from "../../pages/hearing/HearingContainer";
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
  readonly onSubmit: (
    answer: AnsweredHearing,
    nextFormId: number | null
  ) => void;
  readonly onCancel: () => void;
};
type TSelectedOption = TOptionParams & { readonly name: string };

export const MultipleSelectForm = ({
  response,
  onSubmit,
  onCancel,
}: TProps) => {
  const [selectedOptions, setSelectedOptions] = useState<TSelectedOption[]>([]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [response]);

  const handleClick = (
    optionId: number,
    isSingleAnswer: boolean,
    name: string
  ) => {
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
      setSelectedOptions([...newSelectedOptions, { id: optionId, name }]);
    }
  };

  const handleSubmit = () => {
    const answer: AnsweredHearing = {
      id: response.id,
      title: response.title,
      options: selectedOptions,
      categoryName: response.categoryName,
    };
    const nextFormId =
      selectedOptions.length > 1
        ? response.multipleAnswerNextFormId
        : response.options.find((o) => o.id === selectedOptions[0].id)
            ?.nextFormId;
    if (nextFormId !== undefined) onSubmit(answer, nextFormId);
  };

  const handleChangeText = ({
    id,
    text,
    name,
  }: {
    id: number;
    text: string;
    name: string;
  }) => {
    const newSelectedOptions = selectedOptions.filter((o) => o.id !== id);
    setSelectedOptions([...newSelectedOptions, { id, text, name }]);
  };

  const validateNextButton = (): boolean => {
    if (selectedOptions.length < 1) return true;

    // テキストが必要な選択肢でテキストが存在しない場合はtrueを返す
    const requiredTextOptionIds = response.options
      .filter((o) => o.isText)
      .map((r) => r.id);
    return selectedOptions.some(
      (option) =>
        requiredTextOptionIds.includes(option.id) && option.text === undefined
    );
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
                  <SelectButton
                    key={option.id}
                    selected={selectedOptions
                      .map((option) => option.id)
                      .includes(option.id)}
                    onClick={() =>
                      handleClick(option.id, option.isSingleAnswer, option.name)
                    }
                  >
                    {option.name}
                  </SelectButton>
                  <TextAreaAlt
                    className="h-[120px]"
                    placeholder={`${option.name}を選んだ場合は入力してください`}
                    value={
                      selectedOptions.find((o) => o.id === option.id)?.text ??
                      ""
                    }
                    onChange={(event) =>
                      handleChangeText({
                        id: option.id,
                        text: event.target.value as string,
                        name: option.name,
                      })
                    }
                    disabled={
                      !selectedOptions
                        .map((option) => option.id)
                        .includes(option.id)
                    }
                  />
                </>
              ) : (
                <SelectButton
                  key={option.id}
                  selected={selectedOptions
                    .map((option) => option.id)
                    .includes(option.id)}
                  onClick={() =>
                    handleClick(option.id, option.isSingleAnswer, option.name)
                  }
                  className={option.isSingleAnswer ? "mb-7" : ""}
                >
                  {option.name}
                </SelectButton>
              )
            )}
          </div>
        </div>
        <div className="flex flex-row my-10">
          <IconButton className="flex-none" onClick={onCancel}>
            <ArrowIcon className="h-10 my-auto" />
          </IconButton>
          <Button
            disabled={validateNextButton()}
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
