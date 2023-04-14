import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { TItemResponse } from "../../api/shared/TItemResponse";
import { TSimplifiedHearingShowResponse } from "../../api/simplifiedHearings/TSimplifiedHearingShowResponse";
import { Button } from "../../components/baseParts/legacy/Button";
import { CoordinateItemImages } from "../../components/baseParts/legacy/CoordinateItemImages";
import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { convertItemsToItemImagesProps } from "../../components/pageParts/review/convertItemsToItemImagesProps";
import { SimpifiedHearing } from "../../components/resourceParts/simplifiedHearing/SimpifiedHearing";

type TProps = {
  readonly items: TItemResponse[];
  readonly reviewOptions: TReviewOptionResponse[];
  readonly simplifiedHearing: TSimplifiedHearingShowResponse;
  readonly onSubmit: (choicedReviewOptionId: number) => void;
};

export const ReviewForm = ({
  items,
  reviewOptions,
  simplifiedHearing,
  onSubmit,
}: TProps) => {
  return (
    <Page>
      <div className="flex flex-col justify-between h-full">
        <div className="px-5">
          <PageHeader
            title={
              <>
                今回のコーデはお使いの場所でご利用して、ご満足いただけましたでしょうか?
              </>
            }
            className="mb-16"
          />
          <CoordinateItemImages {...convertItemsToItemImagesProps(items)} />
        </div>
        {simplifiedHearing && (
          <SimpifiedHearing
            target={simplifiedHearing.target}
            scene={simplifiedHearing.scene}
            impression={simplifiedHearing.impression}
          />
        )}

        <div className="flex flex-col space-y-3 bg-white p-5">
          {reviewOptions.map((option) => (
            <Button
              onClick={() => onSubmit(option.id)}
              border
              disableElevation
              key={option.id}
            >
              {option.name}
            </Button>
          ))}
        </div>
      </div>
    </Page>
  );
};
