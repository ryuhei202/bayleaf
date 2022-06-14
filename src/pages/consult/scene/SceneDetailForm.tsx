import { useState } from "react";
import { TextAreaAlt } from "../../../components/baseParts/inputs/TextAreaAlt";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";
import { CompleteButton } from "../../../components/baseParts/CompleteButton";

type TProps = {
  readonly onSubmit: (freeText: string) => void;
  readonly onCancel: () => void;
};
export const SceneDetailForm = ({ onSubmit, onCancel }: TProps) => {
  const [freeText, setFreeText] = useState<string>("");
  return (
    <Page>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5">
          <PageHeader
            title={
              <>
                使いたいシーンを
                <br />
                記載してください
              </>
            }
            className="mb-8"
          />
          <TextAreaAlt
            className="h-[150PX]"
            value={freeText}
            onChange={(event) => setFreeText(event.target.value)}
            placeholder="娘の参観日、レストランにデート"
          />
        </div>
        <CompleteButton
          onClickComplete={() => onSubmit(freeText)}
          disabled={freeText === ""}
          onClickBack={onCancel}
        >
          完了
        </CompleteButton>
      </div>
    </Page>
  );
};
