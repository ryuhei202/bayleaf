import { Message } from "semantic-ui-react";

type Props = {
  message: string;
};

export const ErrorMessage = (props: Props) => {
  return (
    <Message negative>
      <Message.Header>{props.message}</Message.Header>
    </Message>
  );
};
