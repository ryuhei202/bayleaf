import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { Button } from "../../components/baseParts/Button";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { Typography } from "../../components/baseParts/Typography";
import { convertItemsToItemImagesProps } from "../../components/pageParts/review/convertItemsToItemImagesProps";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { ReviewFetcher } from "./ReviewFetcher";
import { useReviewSkip } from "../../api/reviews/useReviewSkip";
import liff from "@line/liff/dist/lib";
import { CoordinateItemImages } from "../../components/baseParts/CoordinateItemImages";

type TProps = {
  readonly chartId: number;
};

export const ReviewSkipForm = ({ chartId }: TProps) => {
  const [isWantReview, setIsWantReview] = useState<boolean>(false);
  const { data: coordinateData, error: coordinateError } = useCoordinateIndex({
    chartId,
  });
  const { mutate: mutateReviewSkip } = useReviewSkip();
  const onClickSkipButton = () => {
    mutateReviewSkip(
      { chartId },
      {
        onSuccess: () => {
          liff.closeWindow();
        },
      }
    );
  };

  if (coordinateError)
    return <ErrorMessage message={coordinateError.message} />;

  if (!coordinateData) return <Loader active />;

  const reviewTargetCoordinates = coordinateData.coordinates.filter(
    (c) => !c.isReviewedOrSkipped
  );

  if (reviewTargetCoordinates.length === 0) {
    return (
      <Page className="flex justify-center items-center">
        <Typography>
          <>レビュー対象のコーデはありません。</>
        </Typography>
      </Page>
    );
  }

  return (
    <>
      {isWantReview ? (
        <ReviewFetcher coordinates={reviewTargetCoordinates} />
      ) : (
        <Page>
          <div className="flex flex-col justify-between h-full">
            <div className="px-5">
              <PageHeader
                title={
                  <>
                    今回のコーデのご感想を
                    <br />
                    お教えください
                  </>
                }
                className="mb-16"
              />
              {reviewTargetCoordinates.map((coorde, idx) => {
                return (
                  <div key={coorde.id}>
                    <Typography
                      size="base"
                      weight="bold"
                      className="text-center mt-10 mb-4"
                    >
                      コーデ {idx + 1}
                    </Typography>
                    <CoordinateItemImages
                      {...convertItemsToItemImagesProps(coorde.items)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col space-y-3 bg-white p-5">
              <Button
                onClick={() => setIsWantReview(true)}
                variant="primary"
                disableElevation
              >
                レビューを回答する
              </Button>
              <Button onClick={onClickSkipButton} variant="text">
                レビューに回答せずに進める
              </Button>
            </div>
          </div>
        </Page>
      )}
    </>
  );
};
