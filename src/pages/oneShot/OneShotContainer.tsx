import liff from "@line/liff";
import { useState } from "react";
import { useChartCreateForOneShot } from "../../api/charts/useChartCreateForOneShot";
import { TCategorizedForm } from "../../api/hearings/TCategorizedForm";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useSerialCodesIndex } from "../../api/serialCodes/useSerialCodesIndex";
import { AlertDialog } from "../../components/baseParts/dialogs/AlertDialog";
import { CheckIcon } from "../../components/baseParts/icons/CheckIcon";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { OneShotStartingConfirm } from "../../components/pageParts/oneShot/OneShotStartingConfirm";
import { RankSelectingForm } from "../../components/pageParts/oneShot/RankSelectingForm";
import { StartHearingPage } from "../../components/pageParts/oneShot/StartHearingPage";
import { WearingDateForm } from "../../components/pageParts/oneShot/WearingDateForm";
import { WelcomePage } from "../../components/pageParts/oneShot/WelcomePage";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import {
  HEARING_FORM,
  sortHearingConfirm,
} from "../../models/hearing/THearingForms";
import { OneShot } from "../../models/shared/OneShot";
import { withTax } from "../../models/shared/Tax";
import { AnsweredHearings, TAnsweredForm } from "../hearing/HearingContainer";
import { OneShotHearingContainer } from "./OneShotHearingContainer";

type TProps = {
  readonly memberData: TMembersIndexResponse;
  readonly daysFrom: string;
};

export const OneShotContainer = ({ memberData, daysFrom }: TProps) => {
  const [step, setStep] =
    useState<"welcome" | "dateSelecting" | "hearing" | "rank" | "confirm">(
      "welcome"
    );
  const [wearingDate, setWearingDate] = useState<string>("");
  const [answeredHearings, setAnsweredHearings] = useState<AnsweredHearings>({
    forms: [],
  });
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [isBackTransition, setIsBackTransition] = useState<boolean>(false);
  const [isPostComplete, setIsPostComplete] = useState(false);
  const [isSelectableBRank, setIsSelectableBRank] = useState<boolean>(false);
  const {
    mutate,
    isLoading: isPostLoading,
    error: postError,
  } = useChartCreateForOneShot();

  const { data: serialCodesIndexData, error: serialCodesIndexError } =
    useSerialCodesIndex({
      memberId: memberData.id,
      params: {
        isOneShot: true,
      },
    });

  const handleClickStart = () => {
    setStep("dateSelecting");
  };

  const handleWearingDateSelect = (date: string) => {
    setWearingDate(date);
  };

  const handleDeliveryDateSubmit = () => {
    setStep("hearing");
  };

  const handleHearingSubmit = (
    answer: TAnsweredForm,
    nextFormIdArg: number | null
  ) => {
    setAnsweredHearings({
      forms: [...answeredHearings?.forms, answer],
    });
    if (nextFormIdArg === null) {
      setStep("rank");
    }
    setNextFormId(nextFormIdArg);
    setIsBackTransition(false);
  };

  const handleHearingCancel = () => {
    const newAnswers = answeredHearings.forms.slice(0, -1);
    const lastAnswerId = answeredHearings.forms.slice(-1)[0]?.id;
    setAnsweredHearings({ forms: newAnswers });
    setNextFormId(lastAnswerId ?? null);
    setIsBackTransition(true);
  };

  const categorizeHearingAnswers = (): THearingAnswer => {
    return {
      answer: answeredHearings.forms.reduce(
        (answer: TCategorizedForm[], value) => {
          let someCategory = answer.find(
            (h) => h.categoryName === value.categoryName
          );
          if (someCategory) {
            someCategory.forms.push({
              title: value.title,
              options: value.options.map((o) => {
                return {
                  name: o.name,
                  text: o.text ?? null,
                };
              }),
            });
          } else {
            sortHearingConfirm(answer, value);
          }
          return answer;
        },
        []
      ),
    };
  };

  const getDeliveryDate = () => {
    const date = new Date(wearingDate);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 2);
  };

  if (postError) return <ErrorPage message={postError.message} />;

  if (serialCodesIndexError)
    return <ErrorPage message={serialCodesIndexError.message} />;
  if (!serialCodesIndexData) return <LoaderPage />;

  const discountPrice = (): number => {
    const singleUseDiscountPrice =
      serialCodesIndexData.find((data) => data.singleUse)?.discountPrice ?? 0;
    const recursionDiscountPrice =
      serialCodesIndexData.find((data) => !data.singleUse)?.discountPrice ?? 0;
    const totalDiscountPrice = singleUseDiscountPrice + recursionDiscountPrice;
    return totalDiscountPrice > OneShot.price.withoutTax
      ? OneShot.price.withoutTax
      : totalDiscountPrice;
  };

  const additionalPoint = (): number => {
    const singleUseAdditionalPoint =
      serialCodesIndexData.find((data) => data.singleUse)?.additionalPoint ?? 0;
    const recursionAdditionalPoint =
      serialCodesIndexData.find((data) => !data.singleUse)?.additionalPoint ??
      0;
    const totalAdditionalPoint =
      300 + singleUseAdditionalPoint + recursionAdditionalPoint;
    return totalAdditionalPoint;
  };

  switch (step) {
    case "welcome":
      return (
        <WelcomePage
          discountPrice={discountPrice()}
          onClickStart={handleClickStart}
          additionalPoint={additionalPoint()}
        />
      );
    case "dateSelecting":
      return (
        <WearingDateForm
          selectedDate={wearingDate}
          earliestDate={daysFrom}
          onSelect={handleWearingDateSelect}
          onSubmit={handleDeliveryDateSubmit}
        />
      );
    case "hearing":
      return nextFormId === null ? (
        <StartHearingPage
          onClick={() => setNextFormId(HEARING_FORM.ONE_SHOT_FIRST)}
          onCancel={() => setStep("dateSelecting")}
        />
      ) : (
        <OneShotHearingContainer
          onSubmitForm={handleHearingSubmit}
          onCancelForm={handleHearingCancel}
          nextFormId={nextFormId}
          previousAnsweredHearing={answeredHearings.forms.slice(-1)[0]}
          isBackTransition={isBackTransition}
          member={memberData}
        />
      );
    case "rank":
      return (
        <RankSelectingForm
          isSelectableBRank={isSelectableBRank}
          onSelect={(isSelectable: boolean) => {
            setIsSelectableBRank(isSelectable);
            setStep("confirm");
          }}
          onCancel={() => {
            handleHearingCancel();
            setStep("hearing");
          }}
        />
      );
    case "confirm":
      return (
        <>
          <OneShotStartingConfirm
            confirmAnswer={categorizeHearingAnswers()}
            wearingDate={wearingDate}
            isPostLoading={isPostLoading}
            isSelectableBRank={isSelectableBRank}
            onSubmit={() => {
              mutate(
                {
                  memberId: memberData.id,
                  deliveryDate: getDeliveryDate().toLocaleDateString("ja-JP"),
                  hearings: [
                    {
                      forms: answeredHearings.forms,
                    },
                  ],
                  isSelectableBRank,
                  priceTaxIn: withTax(
                    OneShot.price.withoutTax - discountPrice()
                  ),
                },
                {
                  onSuccess: () => setIsPostComplete(true),
                }
              );
            }}
            onCancelForm={() => {
              setStep("rank");
            }}
            discountPrice={discountPrice()}
            additionalPoint={additionalPoint()}
          />
          <AlertDialog
            open={isPostComplete}
            title="お支払いが完了しました"
            description={<CheckIcon />}
            onClick={() => liff.closeWindow()}
            onClose={() => liff.closeWindow()}
            okBtnText="閉じる"
          />
        </>
      );
  }
  return <></>;
};
