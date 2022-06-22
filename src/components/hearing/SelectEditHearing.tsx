import { THearing } from "../../api/hearings/THearing";
import { Button } from "../baseParts/Button";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { AnswerConfirm } from "./AnswerConfirm";

type TProps = {
  readonly hearings: THearing[];
  readonly onClick: (coordinateId: number) => void;
  readonly onCancel: () => void;
};
export const SelectEditHearing = ({ hearings, onClick, onCancel }: TProps) => {
  return (
    <Page>
      <div className="px-2 mb-10">
        <PageHeader title={<>変更するコーデを選択してください</>} />
        <div className="mx-1.5">
          {hearings.map((hearing, index) => (
            <>
              <AnswerConfirm answer={hearing.categorizedForms} index={index} />
              <Button
                onClick={() => onClick(hearing.coordinateId)}
                variant="primary"
                className="mt-5 py-1.5"
              >
                編集する
              </Button>
            </>
          ))}
          <Button onClick={onCancel} className="mt-5" variant="text">
            前に戻る
          </Button>
        </div>
      </div>
    </Page>
  );
};
