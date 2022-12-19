import { Tab } from "@headlessui/react";
import { TMembersIndexResponse } from "../../../api/members/TMembersIndexResponse";
import {
  findPlanById,
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
  TPlan,
} from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { CheckBox } from "../../baseParts/checkbox/CheckBox";
import { ConfirmDialog } from "../../baseParts/dialogs/ConfirmDialog";
import { Page } from "../../baseParts/legacy/Page";
import { TabMenu } from "../../baseParts/TabMenu";
import { PlanChangePanel } from "./PlanChangePanel";

type TProps = {
  readonly memberData: TMembersIndexResponse;
  readonly isLoading: boolean;
  readonly selectedPlan?: TPlan;
  readonly isNextPayment: boolean;
  readonly onSubmit: () => void;
  readonly onPlanSelect: ({ planId }: { planId: number }) => void;
  readonly onCancel: () => void;
  readonly onTimingChange: () => void;
};

export const PlanSelecting = ({
  memberData,
  isLoading,
  selectedPlan,
  isNextPayment,
  onSubmit,
  onCancel,
  onPlanSelect,
  onTimingChange,
}: TProps) => {
  const TOP_TEXT = {
    CURRENT_PLAN: "現在ご契約のプランです",
    ANOTHER_PLAN: "こちらのプランに変更いただけます",
  } as const;
  const BUTTON_TEXT = {
    CURRENT_PLAN: "現在ご契約のプランです",
    ANOTHER_PLAN: "このプランに変更する",
  } as const;

  const getDiffPrice = ({ selectedPlan }: { selectedPlan: TPlan }) => {
    return (
      selectedPlan.price.withTax -
      findPlanById(memberData.mPlanId).price.withTax
    );
  };

  return (
    <Page className="flex flex-col h-full min-h-screen justify-between items-center text-themeGray p-3">
      {selectedPlan && (
        <ConfirmDialog
          open={!!selectedPlan}
          title={`${selectedPlan.jpName}プランで再開しますか？`}
          description={
            isNextPayment ? (
              <>
                プラン変更適用日: 次回決済日
                <br />
                次回発送日: 次回決済日以降
                <br />
                {`料金: ${selectedPlan.price.withTax}(税込)`}
                <br />※ 次回決済日に料金が発生します。（詳しくは
                <a
                  href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/plan#r31rwhb07dy`}
                  target="_blank"
                  rel="noreferrer"
                >
                  こちら
                </a>
                ）
              </>
            ) : (
              <>
                プラン変更適用日: 本日
                <br />
                次回発送日: 本日以降
                <br />
                {`料金: ${
                  getDiffPrice({ selectedPlan }) <= 0
                    ? 0
                    : getDiffPrice({ selectedPlan })
                }(税込)`}
                <br />※ 本日料金が発生します。（詳しくは
                <a
                  href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/plan#r31rwhb07dy`}
                  target="_blank"
                  rel="noreferrer"
                >
                  こちら
                </a>
                ）
              </>
            )
          }
          isLoading={isLoading}
          onClickOk={onSubmit}
          onClose={onCancel}
          onClickCancel={onCancel}
        />
      )}
      <Tab.Group>
        <Tab.List className="flex w-full mt-6">
          <TabMenu className="font-semibold w-1/3">ライト</TabMenu>
          <TabMenu className="font-semibold w-1/3">スタンダード</TabMenu>
          <TabMenu className="font-semibold w-1/3">プレミアム</TabMenu>
        </Tab.List>
        <Tab.Panels className="w-[90%] pb-12">
          <Tab.Panel>
            <PlanChangePanel
              plan={LIGHT_PLAN}
              text={
                memberData.mPlanId === LIGHT_PLAN.id
                  ? TOP_TEXT.CURRENT_PLAN
                  : TOP_TEXT.ANOTHER_PLAN
              }
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
                isLoading={isLoading}
                disabled={memberData.mPlanId === LIGHT_PLAN.id}
                onClick={() => onPlanSelect({ planId: LIGHT_PLAN.id })}
              >
                {memberData.mPlanId === LIGHT_PLAN.id
                  ? BUTTON_TEXT.CURRENT_PLAN
                  : BUTTON_TEXT.ANOTHER_PLAN}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={LIGHT_PLAN}
              text={
                memberData.mPlanId === STANDARD_PLAN.id
                  ? TOP_TEXT.CURRENT_PLAN
                  : TOP_TEXT.ANOTHER_PLAN
              }
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
                isLoading={isLoading}
                disabled={memberData.mPlanId === STANDARD_PLAN.id}
                onClick={() => onPlanSelect({ planId: STANDARD_PLAN.id })}
              >
                {memberData.mPlanId === STANDARD_PLAN.id
                  ? BUTTON_TEXT.CURRENT_PLAN
                  : BUTTON_TEXT.ANOTHER_PLAN}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={LIGHT_PLAN}
              text={
                memberData.mPlanId === PREMIUM_PLAN.id
                  ? TOP_TEXT.CURRENT_PLAN
                  : TOP_TEXT.ANOTHER_PLAN
              }
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
                isLoading={isLoading}
                disabled={memberData.mPlanId === PREMIUM_PLAN.id}
                onClick={() => onPlanSelect({ planId: PREMIUM_PLAN.id })}
              >
                {memberData.mPlanId === PREMIUM_PLAN.id
                  ? BUTTON_TEXT.CURRENT_PLAN
                  : BUTTON_TEXT.ANOTHER_PLAN}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
