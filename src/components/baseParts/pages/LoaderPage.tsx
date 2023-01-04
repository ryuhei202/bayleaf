import { Page } from "../legacy/Page";
import { Loader } from "../loaders/Loader";

type TProps = {
  readonly caption?: string;
};
export const LoaderPage = ({ caption }: TProps) => {
  return (
    <Page className="flex items-center justify-center">
      <Loader caption={caption} />
    </Page>
  );
};
