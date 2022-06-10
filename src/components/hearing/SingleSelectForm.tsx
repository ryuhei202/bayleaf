import { useEffect, useState } from "react";
import { TOptionParams } from "../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../api/hearingForms/THearingFormShowResponse";
import { ESPECIALLY_CATEGORY } from "../../models/hearing/THearingForms";
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
  readonly onSubmit: (
    answer: AnsweredHearing,
    nextFormId: number | null
  ) => void;
  readonly onCancel: () => void;
};

type TSelectedOption = TOptionParams;

export const SingleSelectForm = ({ response, onSubmit, onCancel }: TProps) => {
  const [selectedOption, setSelectedOption] =
    useState<TSelectedOption | undefined>(undefined);

  useEffect(() => {
    setSelectedOption(undefined);
  }, [response]);

  const handleClick = (id: number) => {
    if (selectedOption?.id === id) {
      setSelectedOption(undefined);
    } else {
      setSelectedOption({ id });
    }
  };
  const handleSubmit = () => {
    if (isSelectedOption(selectedOption)) {
      const answer: AnsweredHearing = {
        id: response.id,
        options: [selectedOption],
      };
      const nextFormId = response.options.find(
        (o) => o.id === selectedOption.id
      )?.nextFormId;
      if (nextFormId !== undefined) onSubmit(answer, nextFormId);
    }
  };
  const isSelectedOption = (
    selectedOption: any
  ): selectedOption is TSelectedOption => {
    return selectedOption !== undefined;
  };

  const handleChangeText = (id: number, text: string) => {
    if (text === "") {
      setSelectedOption(undefined);
    } else {
      setSelectedOption({ id, text });
    }
  };

  const validateNextButton = (): boolean => {
    if (selectedOption === undefined) return true;
    // テキストが必要な選択肢でテキストが存在しない場合はtureを返す
    const requiredTextOptionIds = response.options
      .filter((o) => o.isText)
      .map((r) => r.id);
    return (
      requiredTextOptionIds.includes(selectedOption.id) &&
      selectedOption.text == undefined
    );
  };

  return (
    <Page className="px-5">
      <div className="flex flex-col justify-between h-full">
        <div>
          <PageHeader
            title={<>{response.title}</>}
            subtitle="※一つ選んでください"
            className="mb-16"
          />
          <div className="space-y-5">
            {response.options.map((option) =>
              option.isText ? (
                Object.values(ESPECIALLY_CATEGORY).some(
                  (c) => c === response.categoryId
                ) ? (
                  <SelectButton
                    key={option.id}
                    selected={selectedOption?.id === option.id}
                    onClick={() => handleClick(option.id)}
                  >
                    {option.name}
                  </SelectButton>
                ) : (
                  <>
                    <SelectButton
                      key={option.id}
                      selected={selectedOption?.id === option.id}
                      onClick={() => handleClick(option.id)}
                    >
                      {option.name}
                    </SelectButton>
                    <TextAreaAlt
                      className="h-[120px]"
                      placeholder={`${option.name}を選んだ場合は入力してください`}
                      value={selectedOption?.text ?? ""}
                      onChange={(event) =>
                        handleChangeText(
                          option.id,
                          event.target.value as string
                        )
                      }
                      disabled={selectedOption?.id !== option.id}
                    />
                  </>
                )
              ) : (
                <SelectButton
                  key={option.id}
                  selected={selectedOption?.id === option.id}
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
