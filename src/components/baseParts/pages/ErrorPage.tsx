import { Page } from "../legacy/Page";
import { Message } from "../messages/Message";

type TProps = {
  readonly message?: React.ReactNode;
};
export const ErrorPage = ({ message }: TProps) => {
  return (
    <Page>
      <Message variant="error" className="m-4">
        {message}
      </Message>
    </Page>
  );
};
