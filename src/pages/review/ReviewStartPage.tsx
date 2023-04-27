import { Fragment, useState } from "react";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
import { Button } from "../../components/baseParts/legacy/Button";
import { CoordinateItemImages } from "../../components/baseParts/legacy/CoordinateItemImages";
import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { convertItemsToItemImagesProps } from "../../components/pageParts/review/convertItemsToItemImagesProps";
import { ReviewFetcher } from "./ReviewFetcher";

type TProps = {
  readonly chartId: number;
};

export const ReviewStartPage = ({ chartId }: TProps) => {
  const [isWantReview, setIsWantReview] = useState<boolean>(false);
  const { data: coordinateData, error: coordinateError } = useCoordinateIndex({
    chartId,
  });

  if (coordinateError) return <ErrorPage message={coordinateError.message} />;

  if (!coordinateData) return <LoaderPage />;

  const reviewTargetCoordinates = coordinateData.coordinates.filter(
    (c) => !c.isReviewed
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
                  <Fragment key={coorde.id}>
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
                  </Fragment>
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
            </div>
          </div>
        </Page>
      )}
    </>
  );
};
