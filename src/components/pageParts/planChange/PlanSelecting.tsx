import { Tab } from "@headlessui/react";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../../models/shared/Plans";
import { Page } from "../../baseParts/legacy/Page";
import { TabMenu } from "../../baseParts/TabMenu";
import { PlanChangePanel } from "./PlanChangePanel";

type TProps = {
  readonly planId: number;
  readonly onSubmit: (planId: number) => void;
  readonly isLoading: boolean;
};
export const PlanSelecting = ({ planId, onSubmit, isLoading }: TProps) => {
  const CURRENT_PLAN_TEXT = "現在ご契約のプランです";
  const SELECTABLE_PLAN_TEXT = {
    BUTTON: "このプランに変更する",
    TOP: "こちらのプランに変更いただけます",
  } as const;
  return (
    <Page className="justify-center items-center text-themeGray p-3">
      <Tab.Group>
        <Tab.List className="flex w-full">
          <TabMenu className="font-semibold w-1/3">ライト</TabMenu>
          <TabMenu className="font-semibold w-1/3">スタンダード</TabMenu>
          <TabMenu className="font-semibold w-1/3">プレミアム</TabMenu>
        </Tab.List>
        <Tab.Panels className="w-[95%] m-auto">
          <Tab.Panel>
            <PlanChangePanel
              currentPlanId={planId}
              plan={LIGHT_PLAN}
              text={
                planId == LIGHT_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.TOP
              }
              buttonText={
                planId == LIGHT_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.BUTTON
              }
              onSubmit={() => onSubmit(LIGHT_PLAN.id)}
              isLoading={isLoading}
            />
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              currentPlanId={planId}
              plan={STANDARD_PLAN}
              text={
                planId == STANDARD_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.TOP
              }
              buttonText={
                planId == STANDARD_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.BUTTON
              }
              onSubmit={() => onSubmit(STANDARD_PLAN.id)}
              isLoading={isLoading}
            />
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel
              currentPlanId={planId}
              plan={PREMIUM_PLAN}
              text={
                planId == PREMIUM_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.TOP
              }
              buttonText={
                planId == PREMIUM_PLAN.id
                  ? CURRENT_PLAN_TEXT
                  : SELECTABLE_PLAN_TEXT.BUTTON
              }
              onSubmit={() => onSubmit(PREMIUM_PLAN.id)}
              isLoading={isLoading}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
