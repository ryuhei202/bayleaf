import { useState } from "react";
import { Button } from "../../../components/baseParts/Button";
import { TextAreaAlt } from "../../../components/baseParts/inputs/TextAreaAlt";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";

type TProps = {
  readonly onSubmit: (freeText: string) => void;
};
export const SceneDetailForm = ({ onSubmit }: TProps) => {
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
        <div className="flex flex-col space-y-1 px-5 py-3">
          <Button onClick={() => onSubmit(freeText)} disabled={freeText === ""}>
            完了
          </Button>
        </div>
      </div>
    </Page>
  );
};
