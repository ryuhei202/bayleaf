import { Tab } from "@headlessui/react";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { Page } from "../../baseParts/legacy/Page";
import { TabMenu } from "../../baseParts/TabMenu";
import { PlanChangePanel } from "./PlanChangePanel";

type TProps = {
  readonly reason: React.ReactNode;
};
export const PlanChangeWithValidation = ({ reason }: TProps) => {
  return (
    <Page className="flex h-full min-h-screen flex-col items-center justify-between p-3 text-themeGray">
      <Tab.Group>
        <Tab.List className="mt-6 flex w-full">
          <TabMenu className="w-1/3 font-semibold">ライト</TabMenu>
          <TabMenu className="w-1/3 font-semibold">スタンダード</TabMenu>
          <TabMenu className="w-1/3 font-semibold">プレミアム</TabMenu>
        </Tab.List>
        <Tab.Panels className="w-[90%] pb-12">
          <Tab.Panel>
            <PlanChangePanel plan={LIGHT_PLAN} text={reason}>
              <Button size="large" className="mt-4" disabled onClick={() => {}}>
                プラン変更できません
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel plan={STANDARD_PLAN} text={reason}>
              <Button size="large" className="mt-4" disabled onClick={() => {}}>
                プラン変更できません
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
          <Tab.Panel>
            <PlanChangePanel plan={PREMIUM_PLAN} text={reason}>
              <Button size="large" className="mt-4" disabled onClick={() => {}}>
                プラン変更できません
              </Button>
            </PlanChangePanel>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
