import { Button } from "semantic-ui-react";
import {
  ButtonState,
  useSizePartButtonHandler,
} from "../../hooks/handler/review/useSizePartButtonHandler";
import { Review } from "../../models/review/Review";
import styles from "../../styles/review/SizePartButtons.module.css";

type Props = {
  readonly sizePart: SizePart;
  readonly review: Review;
  readonly onSelectSize: (review: Review) => void;
};
type SizePart = {
  readonly value: number;
  readonly name: string;
};
export const SizePartButtons = (props: Props) => {
  const handler = useSizePartButtonHandler(props.review, props.onSelectSize);

  return (
    <div style={{ marginBottom: "1em" }}>
      {props.sizePart.name}
      <Button.Group fluid>
        <Button
          className={
            handler.active === ButtonState.TooSmall
              ? styles.activeButton
              : styles.inactiveButton
          }
          onClick={() =>
            handler.addSizeError({
              sizePart: props.sizePart.value,
              errorType: 2,
            })
          }
        >
          小さい
        </Button>
        <Button
          className={
            handler.active === ButtonState.JustFit
              ? styles.activeButton
              : styles.inactiveButton
          }
          onClick={() => handler.clearSizeError(props.sizePart.value)}
        >
          丁度いい
        </Button>
        <Button
          className={
            handler.active === ButtonState.TooBig
              ? styles.activeButton
              : styles.inactiveButton
          }
          onClick={() =>
            handler.addSizeError({
              sizePart: props.sizePart.value,
              errorType: 1,
            })
          }
        >
          大きい
        </Button>
      </Button.Group>
    </div>
  );
};
