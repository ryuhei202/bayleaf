import { Button } from "../../components/baseParts/legacy/Button";
import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { Typography } from "../../components/baseParts/legacy/Typography";

type TProps = {
  readonly title: React.ReactNode;
  readonly subTitle: string;
  readonly btnText: string;
  readonly onClick: () => void;
};
export const AfterConsult = ({ title, subTitle, btnText, onClick }: TProps) => {
  return (
    <Page>
      <div className="flex h-full flex-col justify-between">
        <div className="relative h-[50vh]	space-y-1 text-center">
          <div className="absolute bottom-0 w-[100vw] px-5 py-3">
            <PageHeader title={title} className="mb-8" />
            <Typography>{subTitle}</Typography>
          </div>
        </div>
        <div className="my-auto flex flex-col space-y-1 px-5 py-3 align-middle">
          <Button onClick={onClick} variant="primary">
            {btnText}
          </Button>
        </div>
      </div>
    </Page>
  );
};
