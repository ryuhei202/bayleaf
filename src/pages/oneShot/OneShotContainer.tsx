import liff from "@line/liff/dist/lib";
import { useState } from "react";
import { useChartCreate } from "../../api/charts/useChartCreate";
import { TCategorizedForm } from "../../api/hearings/TCategorizedForm";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { useSerialCodesIndex } from "../../api/serialCodes/useSerialCodesIndex";
import { AlertDialog } from "../../components/baseParts/dialogs/AlertDialog";
import { CheckIcon } from "../../components/baseParts/icons/CheckIcon";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { OneShotStartingConfirm } from "../../components/pageParts/oneShot/OneShotStartingConfirm";
import { StartHearingPage } from "../../components/pageParts/oneShot/StartHearingPage";
import { WearingDateForm } from "../../components/pageParts/oneShot/WearingDateForm";
import { WelcomePage } from "../../components/pageParts/oneShot/WelcomePage";
import { THearingAnswer } from "../../models/hearing/THearingAnswer";
import {
  HEARING_FORM,
  sortHearingConfirm,
} from "../../models/hearing/THearingForms";
import { campaignIndex } from "../../models/shared/Campaign";
import { AnsweredHearings, TAnsweredForm } from "../hearing/HearingContainer";
import { OneShotHearingContainer } from "./OneShotHearingContainer";

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
  const [isPostComplete, setIsPostComplete] = useState(false);
  const {
    mutate,
    isLoading: isPostLoading,
    error: postError,
  } = useChartCreate();

  const { data: membersData, error: membersError } = useMembersIndex();

  const { data: serialCodesIndexData, error: serialCodesIndexError } =
    useSerialCodesIndex({
      memberId: membersData ? membersData[0].id : undefined,
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

  if (membersError) return <ErrorPage message={membersError.message} />;
  if (!membersData) return <LoaderPage />;

  if (serialCodesIndexError)
    return <ErrorPage message={serialCodesIndexError.message} />;
  if (!serialCodesIndexData) return <LoaderPage />;

  const targetCampaign = serialCodesIndexData.find(
    (campaign) =>
      campaign.mSerialCampaignId ===
      campaignIndex[0].firstTimeOneShotSerialCampaignId
  );

  const discountPrice = targetCampaign
    ? targetCampaign.discountPrice
    : undefined;

  switch (step) {
    case "welcome":
      return (
        <WelcomePage
          discountPrice={discountPrice}
          onClickStart={handleClickStart}
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
    case "confirm":
      return (
        <>
          <OneShotStartingConfirm
            confirmAnswer={categorizeHearingAnswers()}
            wearingDate={wearingDate}
            isPostLoading={isPostLoading}
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
                },
                {
                  onSuccess: () => setIsPostComplete(true),
                }
              );
            }}
            onCancelForm={() => {
              handleHearingCancel();
              setStep("hearing");
            }}
            discountPrice={discountPrice}
          />
          <AlertDialog
            open={isPostComplete}
            title="お支払いが完了しました"
            description={<CheckIcon />}
            onClick={() => liff.closeWindow()}
            onClose={() => liff.closeWindow()}
            okBtnText="閉じる"
          ></AlertDialog>
        </>
      );
  }
  return <></>;
};
