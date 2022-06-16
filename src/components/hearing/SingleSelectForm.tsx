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
  readonly beforeAnswerText?: TOptionParams[];
  readonly isEspeciallyCategory: boolean;
};

type TSelectedOption = TOptionParams & { readonly name: string };

export const SingleSelectForm = ({
  response,
  onSubmit,
  onCancel,
  beforeAnswerText,
  isEspeciallyCategory,
}: TProps) => {
  const [selectedOption, setSelectedOption] =
    useState<TSelectedOption | undefined>(undefined);

  useEffect(() => {
    setSelectedOption(undefined);
  }, [response]);

  const handleClick = (id: number, name: string, text?: string) => {
    if (selectedOption?.id === id) {
      setSelectedOption(undefined);
    } else {
      setSelectedOption({ id, text, name });
    }
  };
  const handleSubmit = () => {
    if (isSelectedOption(selectedOption)) {
      const answer: AnsweredHearing = {
        id: response.id,
        title: response.title,
        options: [selectedOption],
        categoryName: response.categoryName,
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

  const handleChangeText = ({
    id,
    name,
    text,
  }: {
    id: number;
    name: string;
    text: string;
  }) => {
    if (text === "") {
      setSelectedOption(undefined);
    } else {
      setSelectedOption({ id, text, name });
    }
  };

  const validateNextButton = (): boolean => {
    if (selectedOption === undefined) return true;
    if (isEspeciallyCategory) return false;

    // テキストが必要な選択肢でテキストが存在しない場合はtrueを返す
    const requiredTextOptionIds = response.options
      .filter((o) => o.isText)
      .map((r) => r.id);
    return (
      requiredTextOptionIds.includes(selectedOption.id) &&
      selectedOption.text === undefined
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
                isEspeciallyCategory ? (
                  <>
                    <SelectButton
                      key={option.id}
                      selected={selectedOption?.id === option.id}
                      onClick={() =>
                        handleClick(
                          option.id,
                          option.name,
                          beforeAnswerText?.find((t) => t.id === option.id)
                            ?.text
                        )
                      }
                    >
                      {option.name}
                    </SelectButton>
                    <Typography className="ml-2">
                      {option.name}の回答内容：
                      {beforeAnswerText?.find((t) => t.id === option.id)
                        ?.text || ""}
                    </Typography>
                  </>
                ) : (
                  <>
                    <SelectButton
                      key={option.id}
                      selected={selectedOption?.id === option.id}
                      onClick={() => handleClick(option.id, option.name)}
                    >
                      {option.name}
                    </SelectButton>
                    <TextAreaAlt
                      className="h-[120px]"
                      placeholder={`${option.name}を選んだ場合は入力してください`}
                      value={selectedOption?.text ?? ""}
                      onChange={(event) =>
                        handleChangeText({
                          id: option.id,
                          name: option.name,
                          text: event.target.value as string,
                        })
                      }
                      disabled={selectedOption?.id !== option.id}
                    />
                  </>
                )
              ) : (
                <SelectButton
                  key={option.id}
                  selected={selectedOption?.id === option.id}
                  onClick={() => handleClick(option.id, option.name)}
                  onSelectTransitionEnd={handleSubmit}
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
