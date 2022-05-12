import { Button } from "../../../components/baseParts/Button";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";
import {
  COMBINATION_FORM,
  TCombiantionForm,
} from "../../../models/consult/TCombinationForm";

type TProps = {
  readonly setCurrentFormType: React.Dispatch<
    React.SetStateAction<TCombiantionForm>
  >;
};
export const CombinationConsult = ({ setCurrentFormType }: TProps) => {
  return (
    <Page>
      <div className="flex flex-col px-5 h-full">
        <PageHeader
          title={
            <>
              使いたいアイテムの写真を
              <br />
              送ってください
            </>
          }
          className="mb-8"
        />
        <div>
          <Button onClick={() => {}} variant="primary" className="mb-3">
            撮影する
          </Button>
          <Button onClick={() => {}} variant="primary" className="mb-3">
            画像フォルダから選ぶ
          </Button>
          <Button
            onClick={() => setCurrentFormType(COMBINATION_FORM.ITEM_CATEGORY)}
            variant="text"
          >
            今は写真を用意できない
          </Button>
        </div>
      </div>
    </Page>
  );
};
