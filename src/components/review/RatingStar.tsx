import React from "react";
import { Divider, Grid, GridColumn, GridRow, Icon } from "semantic-ui-react";
import styles from "../../styles/review/RatingStar.module.css";

type Props = {
  readonly rating: number;
  readonly inputRate: (ratingNum: number) => void;
};

export const RatingStar = (props: Props) => {
  const outlineStar = "star outline";
  const star = "star";
  let items = [];
  for (let i = 1; i <= 5; i++) {
    items.push(
      <GridColumn className={styles.gridColumn} key={i}>
        <Icon
          style={{ color: "#FFD400" }}
          name={i <= props.rating ? star : outlineStar}
          size="huge"
          onClick={() => props.inputRate(i)}
        />
      </GridColumn>
    );
  }
  return (
    <>
      <Grid columns="equal">
        <GridRow className={styles.ratingStar}>{items}</GridRow>
        <GridRow>
          <GridColumn>気に入らなかった</GridColumn>
          <GridColumn style={{ textAlign: "right" }}>気に入った</GridColumn>
        </GridRow>
      </Grid>
      <Divider hidden />
    </>
  );
};
