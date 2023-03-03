// import { useState } from "react";
// import { useMemberPaymentsIndex } from "../../../api/memberPayments/useMemberPaymentsIndex";
// import { ErrorPage } from "../../baseParts/pages/ErrorPage";
// import { LoaderPage } from "../../baseParts/pages/LoaderPage";
// import { MemberPayment } from "./MemberPayment";

// export const MemberPaymentContainer = () => {
//   const [selectedPage, setSelectedPage] = useState<number>(1);
//   const { data: memberPaymentsData, error: memberPaymentError } =
//     useMemberPaymentsIndex({
//       params: { limit: 10, offset: (selectedPage - 1) * 10, order: "desc" },
//     });
//   const handleClickPagination = (page: number) => {
//     setSelectedPage(page);
//   };
//   const handleClickReceiptButton = (memberPaymentId: number) => {
//     alert(`${memberPaymentId}の領収書を表示`);
//   };
//   if (memberPaymentError)
//     return <ErrorPage message={memberPaymentError.message} />;

//   if (!memberPaymentsData) return <LoaderPage />;

//   return (
//     <div>
//       <MemberPayment
//         currentPage={selectedPage}
//         onClickPagenation={handleClickPagination}
//         maxPage={memberPaymentsData.totalCount / 10 + 1}
//         paymentData={memberPaymentsData.memberPayments}
//         nextPaymentDate={""}
//         onClickReceiptButton={handleClickReceiptButton}
//       ></MemberPayment>
//     </div>
//   );
// };
