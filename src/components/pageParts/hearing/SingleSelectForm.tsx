import { useEffect, useState } from "react";
import { TOptionParams } from "../../../api/charts/TOptionParams";
import { THearingFormShowResponse } from "../../../api/hearingForms/THearingFormShowResponse";
import { TAnsweredForm } from "../../../pages/hearing/HearingContainer";
import { Button } from "../../baseParts/legacy/Button";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { IconButton } from "../../baseParts/legacy/IconButton";
import { ArrowIcon } from "../../baseParts/legacy/icons/ArrowIcon";
import { TextAreaAlt } from "../../baseParts/legacy/inputs/TextAreaAlt";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { SelectButton } from "../../baseParts/legacy/SelectButton";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  readonly response: THearingFormShowResponse;
  readonly onSubmit: (answer: TAnsweredForm, nextFormId: number | null) => void;
  readonly onCancel: () => void;
  readonly beforeAnswerText?: TOptionParams[];
  readonly memberId?: number;
  readonly isEspeciallyCategory: boolean;
};

type TSelectedOption = TOptionParams & { readonly name: string };

export const SingleSelectForm = ({
  response,
  onSubmit,
  onCancel,
  beforeAnswerText,
  memberId,
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
      const answer: TAnsweredForm = {
        id: response.id,
        title: response.title,
        options: [selectedOption],
        categoryId: response.categoryId,
        categoryName: response.categoryName,
      };
      const nextFormId = response.options.find(
        (o) => o.id === selectedOption.id
      )?.nextFormId;
      setSelectedOption(undefined);
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
    setSelectedOption({ id, text, name });
  };

  const validateNextButton = (): boolean => {
    if (selectedOption === undefined) return true;
    if (isEspeciallyCategory) return false;

    // テキストが必要な選択肢でテキストが存在しない場合はtrueを返す
    const requiredTextOptionIds = response.options
      .filter((o) => o.isText)
      .map((r) => r.id);
    return (
      requiredTextOptionIds.includes(selectedOption.id) && !selectedOption.text
    );
  };

  return (
    <Page className="h-screen">
      <div className="flex flex-col justify-between h-screen">
        <div className="px-5 pb-5">
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
                  onSelectTransitionEnd={() => {
                    if (response.options.every((o) => !o.isText))
                      handleSubmit();
                  }}
                  disabled={
                    selectedOption !== undefined &&
                    selectedOption.id !== option.id &&
                    response.options.every((o) => !o.isText)
                  }
                >
                  {option.name}
                </SelectButton>
              )
            )}
          </div>
        </div>
        <FooterWrapper className="px-3 py-4">
          <div className="flex flex-row">
            <IconButton
              className="flex-none"
              onClick={onCancel}
              GAEvent={{
                action: "back_to_the_last",
                category: "hearing",
                label: memberId,
              }}
            >
              <ArrowIcon className="h-10 my-auto" />
            </IconButton>
            {response.options.some((o) => o.isText) && (
              <Button
                disabled={validateNextButton()}
                size="none"
                className="grow ml-3"
                onClick={handleSubmit}
              >
                <Typography className="my-auto">次へ</Typography>
              </Button>
            )}
          </div>
        </FooterWrapper>
      </div>
    </Page>
  );
};
