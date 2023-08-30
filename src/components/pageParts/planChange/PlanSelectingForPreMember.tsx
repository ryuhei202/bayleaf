import { Tab } from "@headlessui/react";
import liff from "@line/liff";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { TabMenu } from "../../baseParts/TabMenu";
import { AlertDialog } from "../../baseParts/dialogs/AlertDialog";
import { CheckIcon } from "../../baseParts/icons/CheckIcon";
import { Page } from "../../baseParts/legacy/Page";
import { PlanChangePanel } from "./PlanChangePanel";

type TProps = {
  readonly planId: number;
  readonly onSubmit: (planId: number) => void;
  readonly isLoading: boolean;
  readonly selectedPlanName?: string;
};
export const PlanSelectingForPreMember = ({
  planId,
  onSubmit,
  isLoading,
  selectedPlanName,
}: TProps) => {
  const CURRENT_PLAN_TEXT = "現在ご契約のプランです";
  const SELECTABLE_PLAN_TEXT = {
    BUTTON: "このプランに変更する",
    TOP: "こちらのプランに変更いただけます",
  } as const;
  return (
    <Page className="flex h-full min-h-screen flex-col items-center justify-between p-3 text-themeGray">
      {selectedPlanName && (
        <AlertDialog
          open={selectedPlanName !== undefined}
          title={`${selectedPlanName}プランに変更しました`}
          description={<CheckIcon />}
          onClose={() => {
            liff.closeWindow();
          }}
          onClick={() => {
            liff.closeWindow();
          }}
        />
      )}
      <Tab.Group>
        <Tab.List className="mt-6 flex w-full">
          <TabMenu className="w-1/3 font-semibold">ライト</TabMenu>
          <TabMenu className="w-1/3 font-semibold">スタンダード</TabMenu>
          <TabMenu className="w-1/3 font-semibold">プレミアム</TabMenu>
        </Tab.List>
        <Tab.Panels className="w-[90%] pb-12">
          <Tab.Panel>
            <PlanChangePanel
              plan={LIGHT_PLAN}
              text={
                planId === LIGHT_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.TOP
              }
            >
              <Button
                size="large"
                className="mt-8"
                disabled={planId === LIGHT_PLAN.id}
                isLoading={isLoading}
                onClick={() => onSubmit(LIGHT_PLAN.id)}
              >
                {planId === LIGHT_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.BUTTON}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={STANDARD_PLAN}
              text={
                planId === STANDARD_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.TOP
              }
            >
              <Button
                size="large"
                className="mt-8"
                disabled={planId === STANDARD_PLAN.id}
                isLoading={isLoading}
                onClick={() => onSubmit(STANDARD_PLAN.id)}
              >
                {planId === STANDARD_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.BUTTON}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              plan={PREMIUM_PLAN}
              text={
                planId === PREMIUM_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.TOP
              }
            >
              <Button
                size="large"
                className="mt-8"
                disabled={planId === PREMIUM_PLAN.id}
                isLoading={isLoading}
                onClick={() => onSubmit(PREMIUM_PLAN.id)}
              >
                {planId === PREMIUM_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.BUTTON}
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
