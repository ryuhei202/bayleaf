import React from "react";
import { Button } from "semantic-ui-react";
import styles from "../../styles/shared/PostButton.module.css";

type Props = {
  readonly onClick: () => void;
  readonly buttonText: string;
  readonly loading: boolean;
};
export const PostButton = (props: Props) => {
  return (
    <>
      {!props.loading ? (
        <Button fluid onClick={props.onClick} className={styles.postButton}>
          {props.buttonText}
        </Button>
      ) : (
        <Button fluid loading className={styles.postButton}>
          Loading
        </Button>
      )}
    </>
  );
};
