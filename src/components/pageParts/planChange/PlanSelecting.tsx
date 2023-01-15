import { Tab } from "@headlessui/react";
import liff from "@line/liff/dist/lib";
import { useState } from "react";
import {
  findPlanById,
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
  TPlan,
} from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { CheckBox } from "../../baseParts/checkbox/CheckBox";
import { AlertDialog } from "../../baseParts/dialogs/AlertDialog";
import { ConfirmDialog } from "../../baseParts/dialogs/ConfirmDialog";
import { CheckIcon } from "../../baseParts/icons/CheckIcon";
import { Page } from "../../baseParts/legacy/Page";
import { TabMenu } from "../../baseParts/TabMenu";
import { CancelActionText } from "../../baseParts/text/CancelActionText";
import { PlanChangePanel } from "./PlanChangePanel";

type TPlanSelectingMemberInfo = {
  readonly mPlanId: number;
  readonly nextPaymentDate: string;
  readonly rentalRemainingNum: number;
  readonly requestedPlanId?: number;
};

type TProps = {
  readonly memberData: TPlanSelectingMemberInfo;
  readonly isPlanChangeLoading: boolean;
  readonly isRequestDestroyLoading: boolean;
  readonly selectedPlan?: TPlan;
  readonly isNextPayment: boolean;
  readonly isCompleted: boolean;
  readonly isCancelCompleted: boolean;
  readonly onSubmit: () => void;
  readonly onPlanSelect: ({ planId }: { planId: number }) => void;
  readonly onCancel: () => void;
  readonly onTimingChange: () => void;
  readonly onCancelPlanChange: () => void;
};

export const PlanSelecting = ({
  memberData,
  isPlanChangeLoading,
  isRequestDestroyLoading,
  selectedPlan,
  isNextPayment,
  isCompleted,
  isCancelCompleted,
  onSubmit,
  onCancel,
  onPlanSelect,
  onTimingChange,
  onCancelPlanChange,
}: TProps) => {
  const TOP_TEXT = {
    CURRENT_PLAN: "現在ご契約のプランです",
    ANOTHER_PLAN: "こちらのプランに変更いただけます",
    REQUESTED_PLAN: "こちらのプランに変更予定です",
  } as const;
  const BUTTON_TEXT = {
    CURRENT_PLAN: "現在ご契約のプランです",
    ANOTHER_PLAN: "このプランに変更する",
    REQUESTED_PLAN: "このプランに変更予定です",
  } as const;

  const [isOpenCancelDialog, setIsOpenCancelDialog] = useState<boolean>(false);

  const getDiffPrice = ({ selectedPlan }: { selectedPlan: TPlan }) => {
    return (
      selectedPlan.price.withTax -
      findPlanById(memberData.mPlanId).price.withTax
    );
  };

  const getDialogDescription = ({
    selectedPlan,
  }: {
    selectedPlan: TPlan;
  }): React.ReactNode => {
    return isNextPayment ? (
      <>
        プラン変更適用日（決済日）： {memberData.nextPaymentDate}
        <br />
        次回発送日: {memberData.nextPaymentDate}以降
        <br />
        {`料金: ¥${selectedPlan.price.withTax}(税込)`}
        <br />※ 次回決済日に料金が発生します（詳しくは
        <a
          href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/plan#r31rwhb07dy`}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          こちら
        </a>
        ）
      </>
    ) : (
      <>
        プラン変更適用日（決済日）: 本日
        <br />
        次回発送日: 準備でき次第配送
        <br />
        {`料金: ¥${
          getDiffPrice({ selectedPlan }) <= 0
            ? 0
            : getDiffPrice({ selectedPlan })
        }(税込)`}
        <br />※
        プラン変更が反映された日から1ヶ月後が次回決済日となり、プラン変更後の月額料金をお支払い頂きます（詳しくは
        <a
          href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/plan#r31rwhb07dy`}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          こちら
        </a>
        ）
      </>
    );
  };

  const getTopText = (planId: number) => {
    switch (planId) {
      case memberData.mPlanId:
        return TOP_TEXT.CURRENT_PLAN;
      case memberData.requestedPlanId:
        return (
          <>
            こちらのプランに変更予定です
            <br />
            <CancelActionText onClick={() => setIsOpenCancelDialog(true)}>
              プラン変更予約を取り消す
            </CancelActionText>
          </>
        );
      default:
        return TOP_TEXT.ANOTHER_PLAN;
    }
  };

  const getButtonText = (planId: number) => {
    switch (planId) {
      case memberData.mPlanId:
        return BUTTON_TEXT.CURRENT_PLAN;
      case memberData.requestedPlanId:
        return BUTTON_TEXT.REQUESTED_PLAN;
      default:
        return BUTTON_TEXT.ANOTHER_PLAN;
    }
  };

  return (
    <Page className="flex flex-col h-full min-h-screen justify-between items-center text-themeGray p-3">
      <ConfirmDialog
        open={isOpenCancelDialog}
        title="プラン変更予約を取り消しますか？"
        isLoading={isRequestDestroyLoading}
        onClickOk={onCancelPlanChange}
        onClickCancel={() => setIsOpenCancelDialog(false)}
        onClose={() => setIsOpenCancelDialog(false)}
        description={
          <>
            プラン変更予約を取り消した場合、
            <br />
            再度ヒアリングに答えていただく必要があります。
          </>
        }
        okBtnText="はい"
        cancelBtnText="いいえ"
      ></ConfirmDialog>
      <AlertDialog
        open={isCancelCompleted}
        title={"変更予約を取り消しました"}
        description={<CheckIcon />}
        onClick={() => liff.closeWindow()}
        onClose={() => liff.closeWindow()}
        okBtnText="閉じる"
      />
      {selectedPlan && (
        <>
          <ConfirmDialog
            open={selectedPlan !== undefined}
            title={`${selectedPlan.jpName}プランに変更しますか？`}
            okBtnText="変更する"
            cancelBtnText="変更しない"
            description={getDialogDescription({ selectedPlan })}
            isLoading={isPlanChangeLoading}
            onClickOk={onSubmit}
            onClose={onCancel}
            onClickCancel={onCancel}
          />
          <AlertDialog
            open={isCompleted && selectedPlan !== undefined}
            title={
              isNextPayment
                ? "プラン変更予約が完了しました"
                : "プラン変更が完了しました"
            }
            description={<CheckIcon />}
            onClick={() => liff.closeWindow()}
            onClose={() => liff.closeWindow()}
            okBtnText="閉じる"
          />
        </>
      )}
      <Tab.Group>
        <Tab.List className="flex w-full mt-6">
          <TabMenu className="font-semibold w-1/3">ライト</TabMenu>
          <TabMenu className="font-semibold w-1/3">スタンダード</TabMenu>
          <TabMenu className="font-semibold w-1/3">プレミアム</TabMenu>
        </Tab.List>
        <Tab.Panels className="w-[90%] pb-12">
          <Tab.Panel>
            <PlanChangePanel plan={LIGHT_PLAN} text={getTopText(LIGHT_PLAN.id)}>
              {memberData.rentalRemainingNum > 0 && (
                <CheckBox
                  className="mt-4"
                  checked={!isNextPayment}
                  onChange={onTimingChange}
                >
                  即時でプラン変更をする
                </CheckBox>
              )}
              <Button
                size="large"
                className="mt-4"
                isLoading={isPlanChangeLoading}
                disabled={
                  memberData.mPlanId === LIGHT_PLAN.id ||
                  memberData.requestedPlanId === LIGHT_PLAN.id
                }
                onClick={() => onPlanSelect({ planId: LIGHT_PLAN.id })}
              >
                {getButtonText(LIGHT_PLAN.id)}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={STANDARD_PLAN}
              text={getTopText(STANDARD_PLAN.id)}
            >
              {memberData.rentalRemainingNum > 0 && (
                <CheckBox
                  className="mt-4"
                  checked={!isNextPayment}
                  onChange={onTimingChange}
                >
                  即時でプラン変更をする
                </CheckBox>
              )}
              <Button
                size="large"
                className="mt-4"
                isLoading={isPlanChangeLoading}
                disabled={
                  memberData.mPlanId === STANDARD_PLAN.id ||
                  memberData.requestedPlanId === STANDARD_PLAN.id
                }
                onClick={() => onPlanSelect({ planId: STANDARD_PLAN.id })}
              >
                {getButtonText(STANDARD_PLAN.id)}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={PREMIUM_PLAN}
              text={getTopText(PREMIUM_PLAN.id)}
            >
              {memberData.rentalRemainingNum > 0 && (
                <CheckBox
                  className="mt-4"
                  checked={!isNextPayment}
                  onChange={onTimingChange}
                >
                  即時でプラン変更をする
                </CheckBox>
              )}
              <Button
                size="large"
                className="mt-4"
                isLoading={isPlanChangeLoading}
                disabled={
                  memberData.mPlanId === PREMIUM_PLAN.id ||
                  memberData.requestedPlanId === PREMIUM_PLAN.id
                }
                onClick={() => onPlanSelect({ planId: PREMIUM_PLAN.id })}
              >
                {getButtonText(PREMIUM_PLAN.id)}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
