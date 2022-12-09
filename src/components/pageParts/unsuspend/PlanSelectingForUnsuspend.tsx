import { Tab } from "@headlessui/react";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
  TPlan,
} from "../../../models/shared/Plans";
import { ConfirmDialog } from "../../baseParts/dialogs/ConfirmDialog";
import { Page } from "../../baseParts/legacy/Page";
import { TabMenu } from "../../baseParts/TabMenu";
import { PlanChangePanel } from "../planChange/PlanChangePanel";

type TProps = {
  readonly planId: number;
  readonly isLoading: boolean;
  readonly selectedPlan?: TPlan;
  readonly onSubmit: () => void;
  readonly onPlanSelect: ({ planId }: { planId: number }) => void;
  readonly onCancel: () => void;
};

export const PlanSelectingForUnsuspend = ({
  planId,
  isLoading,
  selectedPlan,
  onSubmit,
  onPlanSelect,
  onCancel,
}: TProps) => {
  const TOP_TEXT = {
    CURRENT_PLAN: <span className="text-red">現在停止中のプランです</span>,
    ANOTHER_PLAN: "こちらのプランに変更いただけます",
  } as const;

  return (
    <Page className="flex flex-col h-full min-h-screen justify-between items-center text-themeGray p-3">
      {selectedPlan && (
        <ConfirmDialog
          open={!!selectedPlan}
          title={`${selectedPlan.jpName}プランで再開しますか？`}
          description={
            <>
              {`料金: ${selectedPlan.price.withTax}(税込)`}
              <br />
              次回決済日: 次回出荷日
            </>
          }
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
                planId === LIGHT_PLAN.id
                  ? TOP_TEXT.CURRENT_PLAN
                  : TOP_TEXT.ANOTHER_PLAN
              }
              buttonText="プランを再開する"
              onSubmit={() => onPlanSelect({ planId: LIGHT_PLAN.id })}
              isLoading={isLoading}
            />
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={STANDARD_PLAN}
              text={
                planId === STANDARD_PLAN.id
                  ? TOP_TEXT.CURRENT_PLAN
                  : TOP_TEXT.ANOTHER_PLAN
              }
              buttonText="プランを再開する"
              onSubmit={() => onPlanSelect({ planId: STANDARD_PLAN.id })}
              isLoading={isLoading}
            />
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={PREMIUM_PLAN}
              text={
                planId === PREMIUM_PLAN.id
                  ? TOP_TEXT.CURRENT_PLAN
                  : TOP_TEXT.ANOTHER_PLAN
              }
              buttonText="プランを再開する"
              onSubmit={() => onPlanSelect({ planId: PREMIUM_PLAN.id })}
              isLoading={isLoading}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
