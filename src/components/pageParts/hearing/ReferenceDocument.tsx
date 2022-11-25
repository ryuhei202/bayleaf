import { TStylingReferenceShowResponse } from "../../../api/stylingReference/TStylingReferenceShowResponse";
import { Button } from "../../baseParts/legacy/Button";
import { Divider } from "../../baseParts/legacy/Divider";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { Paper } from "../../baseParts/legacy/Paper";
import { Typography } from "../../baseParts/legacy/Typography";
import { ImpressionsAnswer } from "./ImpressionsAnswer";
import { SleeveAnswer } from "./SleeveAnswer";
import { TargetAnswer } from "./TargetAnswer";
import { TextAnswer } from "./TextAnswer";

type Props = {
  readonly targetReference?: TStylingReferenceShowResponse;
  readonly impressionReference?: {
    multipleImpressionsReference: TStylingReferenceShowResponse;
    primaryImpressionReference: TStylingReferenceShowResponse;
  };
  readonly sleeveReference?: TStylingReferenceShowResponse;
  readonly otherReference?: TStylingReferenceShowResponse;
  readonly summaryReference?: TStylingReferenceShowResponse;
  readonly referenceChanged: boolean;
  readonly allowHearingSkip: boolean;
  readonly onClickEdit: (id: number) => void;
  readonly onSubmit: (isSkipingHearing: boolean) => void;
};

export const ReferenceDocument = ({
  targetReference,
  impressionReference,
  sleeveReference,
  otherReference,
  summaryReference,
  referenceChanged,
  allowHearingSkip,
  onClickEdit,
  onSubmit,
}: Props) => {
  return (
    <>
      <div className="px-4 pb-8 overflow-auto h-screen bg-slate-200">
        <PageHeader
          title={referenceChanged ? "ヒアリング内容の確認" : "前回のコーデ情報"}
          className="my-8"
        />
        <Paper className="mb-28">
          {targetReference ? (
            <TargetAnswer
              stylingReference={targetReference}
              onClickEdit={() => onClickEdit(targetReference.categoryId)}
            />
          ) : (
            <></>
          )}
          {impressionReference ? (
            <>
              <Divider className="mb-4" />
              <ImpressionsAnswer
                multipleImpressionsReference={
                  impressionReference.multipleImpressionsReference
                }
                primaryImpressionReference={
                  impressionReference.primaryImpressionReference
                }
                onClickEdit={() =>
                  onClickEdit(
                    impressionReference.multipleImpressionsReference.categoryId
                  )
                }
              />
            </>
          ) : (
            <></>
          )}
          {sleeveReference ? (
            <>
              <Divider className="mb-4" />
              <SleeveAnswer
                stylingReference={sleeveReference}
                onClickEdit={() => onClickEdit(sleeveReference.categoryId)}
              />
            </>
          ) : (
            <></>
          )}
          {otherReference ? (
            <>
              <Divider />
              <TextAnswer
                stylingReference={otherReference}
                titleText="その他"
                className="mb-4  mt-4"
              />
            </>
          ) : (
            <></>
          )}
          {summaryReference && allowHearingSkip ? (
            <>
              <Divider />
              <TextAnswer
                stylingReference={summaryReference}
                titleText="コーデイメージ"
                className="mb-4  mt-4"
              />
            </>
          ) : (
            <></>
          )}
        </Paper>
      </div>
      <div className="px-3 py-4 w-screen space-y-3 fixed bottom-0 bg-white border-t-2 border-neutral-300">
        {allowHearingSkip ? (
          <Button
            variant="primary"
            size="medium"
            onClick={() => onSubmit(true)}
          >
            <Typography size="sm" className="my-auto">
              前回と同じ内容でコーデを作る
            </Typography>
          </Button>
        ) : (
          <></>
        )}
        <Button variant="primary" size="medium" onClick={() => onSubmit(false)}>
          <Typography size="sm" className="my-auto">
            スタイリストと相談してからコーデを作る
          </Typography>
        </Button>
      </div>
    </>
  );
};
