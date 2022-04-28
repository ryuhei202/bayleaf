import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { Button } from "../../components/baseParts/Button";
import { TextAreaAlt } from "../../components/baseParts/inputs/TextAreaAlt";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { Typography } from "../../components/baseParts/Typography";

type Props = {
  readonly reviewReasonOptions: TReviewOptionResponse[];
  readonly choicedReasonIds: number[];
  readonly text: string;
  readonly isSatisfied: boolean;
  readonly isValid: boolean;
  readonly isLastCoordinate: boolean;
  readonly isLoadingReviewCreate: boolean;
  readonly onClickReasonOption: (optionIds: number) => void;
  readonly onChangeText: (text: string) => void;
  readonly onSubmit: () => void;
  readonly onCancel: () => void;
};

export const ReviewReasonForm = ({
  reviewReasonOptions,
  choicedReasonIds,
  text,
  isSatisfied,
  isValid,
  isLastCoordinate,
  isLoadingReviewCreate,
  onClickReasonOption,
  onChangeText,
  onSubmit,
  onCancel,
}: Props) => {
  const subtitleStr = `(複数選択可${isSatisfied ? "・任意" : ""})`;
  const textAreaTitleStr = `その他満足${
    isSatisfied ? "した" : "できなかった"
  }点を教えてください`;
  const textAreaPlaceholderStr = () => {
    if (isSatisfied) {
      return "・コーデの色味が自分に似合っていると思った\n・緑のカーデが初めて着たけどお気に入りだった";
    } else {
      return "・コーデの色味が自分に似合っていないと思った\n・緑のカーデが初めて着たけど気に入らなかった";
    }
  };

  return (
    <Page>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5">
          <PageHeader
            title={<>その理由について教えてください。</>}
            subtitle={subtitleStr}
            className="mb-8"
          />
          <div className="flex flex-col space-y-3">
            {reviewReasonOptions.map((option) => {
              return (
                <Button
                  onClick={() => onClickReasonOption(option.id)}
                  size="small"
                  variant={
                    choicedReasonIds.includes(option.id) ? "primary" : "default"
                  }
                  border
                  disableElevation
                >
                  {option.name}
                </Button>
              );
            })}

            <div>
              <Typography className="mb-2" size="sm" color="primary">
                {textAreaTitleStr}
              </Typography>
              <TextAreaAlt
                className="h-28"
                value={text}
                onChange={(e) => onChangeText(e.target.value)}
                placeholder={textAreaPlaceholderStr()}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1 bg-white px-5 py-3">
          <Button
            onClick={onSubmit}
            variant="primary"
            disabled={!isValid}
            isLoading={isLoadingReviewCreate}
          >
            {isLastCoordinate ? "回答を完了する" : "次のコーデへ進む"}
          </Button>

          <Button onClick={onCancel} variant="text">
            一つ前の回答に戻る
          </Button>
        </div>
      </div>
    </Page>
  );
};
