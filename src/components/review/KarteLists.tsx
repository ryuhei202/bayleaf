import React from "react";
import {
  Container,
  Divider,
  Header,
  Image,
  List,
  Loader,
} from "semantic-ui-react";
import { useReviewIndexApi } from "../../hooks/api/useReviewIndexApi";
import { KarteListResponse } from "../../models/review/KarteListResponse";
import { ErrorMessage } from "../shared/ErrorMessage";

type Props = {
  onSelectKarte: (id: number) => void;
};

export const KarteLists = (props: Props) => {
  const { data, error } = useReviewIndexApi();
  if (error)
    return (
      <ErrorMessage
        message={
          error.response?.data?.message ?? "予期せぬエラーが発生しました。"
        }
      />
    );
  if (!data) return <Loader active />;
  return (
    <>
      {data.length === 1 ? (
        props.onSelectKarte(data[0].id)
      ) : (
        <Container>
          <Divider hidden />
          <Header as="h2">レビューするコーデを選択</Header>
          <Divider hidden />
          <List divided relaxed>
            {data.map((karte: KarteListResponse, index: number) => (
              <List.Item
                key={index}
                onClick={() => props.onSelectKarte(karte.id)}
              >
                <List.Content>
                  <List.Header as="h3">{karte.planName}</List.Header>
                  <span style={{ color: "grey" }}>
                    レンタル開始日: {karte.rentalStartedAt}
                  </span>
                  <Image.Group style={{ textAlign: "center" }}>
                    {karte.itemImageUrls.map((url: string, index: number) => (
                      <Image
                        src={url}
                        rounded
                        style={{ width: "50px" }}
                        key={index}
                      />
                    ))}
                  </Image.Group>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Container>
      )}
    </>
  );
};
