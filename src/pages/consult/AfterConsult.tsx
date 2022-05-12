import { useEffect } from "react";
import { Button } from "../../components/baseParts/Button";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { Typography } from "../../components/baseParts/Typography";

type TProps = {
  readonly title: React.ReactNode;
  readonly subTitle: string;
  readonly btnText: string;
  readonly onClick: () => void;
};
export const AfterConsult = ({ title, subTitle, btnText, onClick }: TProps) => {
  return (
    <Page>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-1 text-center	h-[50vh] relative">
          <div className="absolute w-[100vw] px-5 py-3 bottom-0">
            <PageHeader title={title} className="mb-8" />
            <Typography>{subTitle}</Typography>
          </div>
        </div>
        <div className="flex flex-col space-y-1 align-middle px-5 py-3 my-auto">
          <Button onClick={onClick} variant="primary">
            {btnText}
          </Button>
        </div>
      </div>
    </Page>
  );
};
