import liff from "@line/liff/dist/lib";
import { useState } from "react";
import { useChartCreate } from "../../api/charts/useChartCreate";
import { TCategorizedForm } from "../../api/hearings/TCategorizedForm";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { OneShotStartingConfirm } from "../../components/pageParts/oneShot/OneShotStartingConfirm";
import { StartHearingPage } from "../../components/pageParts/oneShot/StartHearingPage";
import { WearingDateForm } from "../../components/pageParts/oneShot/WearingDateForm";
import { WelcomePage } from "../../components/pageParts/oneShot/WelcomePage";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import {
  HEARING_FORM,
  sortHearingConfirm,
} from "../../models/hearing/THearingForms";
import { AnsweredHearings, TAnsweredForm } from "../hearing/HearingContainer";
import { HearingFormFetcher } from "../hearing/HearingFormFetcher";

type TProps = {
  readonly memberData: TMembersIndexResponse;
  readonly daysFrom: string;
};

export const OneShotContainer = ({ memberData, daysFrom }: TProps) => {
  const [step, setStep] =
    useState<"welcome" | "dateSelecting" | "hearing" | "confirm">("welcome");
  const [wearingDate, setWearingDate] = useState<string>("");
  const [answeredHearings, setAnsweredHearings] = useState<AnsweredHearings>({
    forms: [],
  });
  const [nextFormId, setNextFormId] = useState<number | null>(null);
  const [isBackTransition, setIsBackTransition] = useState<boolean>(false);
  const {
    mutate,
    isLoading: isPostLoading,
    error: postError,
  } = useChartCreate();

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
      setStep("confirm");
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

  switch (step) {
    case "welcome":
      return <WelcomePage onClickStart={handleClickStart} />;
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
          onClick={() => setNextFormId(HEARING_FORM.FIRST)}
          onCancel={() => setStep("dateSelecting")}
        />
      ) : (
        <HearingFormFetcher
          onSubmitForm={handleHearingSubmit}
          onCancelForm={handleHearingCancel}
          nextFormId={nextFormId}
          previousAnsweredHearing={answeredHearings.forms.slice(-1)[0]}
          isBackTransition={isBackTransition}
          member={memberData}
        />
      );
    case "confirm":
      return (
        <OneShotStartingConfirm
          confirmAnswer={categorizeHearingAnswers()}
          wearingDate={wearingDate}
          isPostLoading={isPostLoading}
          handleSubmitComplete={() => {
            mutate(
              {
                memberId: memberData.id,
                deliveryDate: getDeliveryDate().toLocaleDateString("ja-JP"),
                hearings: [
                  {
                    forms: answeredHearings.forms,
                  },
                ],
              },
              {
                onSuccess: () => liff.closeWindow(),
              }
            );
          }}
          handleCancelForm={() => {
            handleHearingCancel();
            setStep("hearing");
          }}
        />
      );
  }
  return <></>;
};
