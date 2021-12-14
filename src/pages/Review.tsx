import React, { useEffect, useState } from "react";
import { KarteLists } from "../components/review/KarteLists";
import { ReviewForm } from "../components/review/ReviewForm";
import { useSearchParams } from "react-router-dom";

const Review = () => {
  const [searchParams] = useSearchParams();
  const karteId = searchParams.get("karteId");
  const [selectedKarteId, setSelectedKarteId] = useState<number | undefined>(
    Number(karteId)
  );

  useEffect(() => {
    document.title = "leeap|レビュー";
  });

  return (
    <>
      {selectedKarteId ? (
        <ReviewForm selectedKarteId={selectedKarteId} />
      ) : (
        <KarteLists onSelectKarte={(id: number) => setSelectedKarteId(id)} />
      )}
    </>
  );
};
export default Review;
