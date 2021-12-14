import React from "react";
import { Form, Header, Image, TextArea } from "semantic-ui-react";
import { useItemFormHandler } from "../../hooks/handler/review/useItemFormHandler";
import { FormResponse } from "../../models/review/FormResponse";
import { Review } from "../../models/review/Review";
import { RatingStar } from "./RatingStar";
import { SizePartButtons } from "./SizePartButtons";
import styles from "../../styles/review/ItemForm.module.css";

type Props = {
  item: FormResponse;
  onSelectReview: (review: Review) => void;
};

export const ItemForm = (props: Props) => {
  const handler = useItemFormHandler(props.item, props.onSelectReview);

  return (
    <div className={styles.itemForm}>
      <Image src={props.item.itemImageUrl} size="small" rounded centered />
      <RatingStar inputRate={handler.inputRate} rating={handler.rating} />
      <div>
        <Header as="h2">サイズ</Header>
        {props.item.sizeParts.map((sizePart, index) => (
          <SizePartButtons
            key={index}
            sizePart={sizePart}
            review={handler.review}
            onSelectSize={(review: Review) => handler.onSelectSize(review)}
          />
        ))}
      </div>
      <Form className={styles.freeText}>
        <Header as="h2">その他感想</Header>
        <TextArea
          style={{ backgroundColor: "#eeeeee", borderWidth: 0, resize: "none" }}
          value={handler.review.freeText}
          onChange={(event) => handler.changeFreeText(event)}
          placeholder="例）色が好きでお気に入りです。&#13;例）友人に似合っていないと言われた。"
        />
      </Form>
    </div>
  );
};
