import React from "react";
import { Loader, Header, Container, Divider } from "semantic-ui-react";
import { ErrorMessage } from "../shared/ErrorMessage";
import { useReviewNewApi } from "../../hooks/api/useReviewNewApi";
import { ItemForm } from "./ItemForm";
import { PostButton } from "../shared/PostButton";
import { useReviewFormHandler } from "../../hooks/handler/review/useReviewFormHandler";
import { Review } from "../../models/review/Review";
import styles from "../../styles/review/ReviewForm.module.css";

type Props = {
  selectedKarteId: number;
};

export const ReviewForm = (props: Props) => {
  const { data, error } = useReviewNewApi(props.selectedKarteId);
  const handler = useReviewFormHandler(data, props.selectedKarteId);

  if (error) return <ErrorMessage message={error.response.data.message} />;
  if (!data) return <Loader active />;
  return (
    <>
      <Container fluid>
        <Header as="h1" className={styles.header}>
          コーデを利用してみての
          <br />
          感想を教えてください
        </Header>
        {data.map((item, index) => (
          <ItemForm
            key={index}
            item={item}
            onSelectReview={(review: Review) => handler.onSelectReview(review)}
          />
        ))}
        <Divider hidden />

        <span hidden={handler.validation == null} style={{ color: "red" }}>
          {handler.validation}
        </span>

        <PostButton
          onClick={() => handler.onClick()}
          buttonText={"レビューを完了する"}
          loading={handler.loading}
        />
        <Divider hidden />
      </Container>
    </>
  );
};
