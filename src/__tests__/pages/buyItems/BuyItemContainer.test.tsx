import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { TChartItemsIndexResponse } from "../../../api/chartItems/TChartItemsIndexResponse";
import { getChartItemIndexMock } from "../../../mocks/chartItems/getChartItemIndexMock";
import { server } from "../../../mocks/server";
import { BuyItemContainer } from "../../../pages/buyItem/BuyItemContainer";
import { createQueryWrapper } from "../../utils/MockProvider";

const { queryWrapper: QueryWrapper } = createQueryWrapper();
const AllTheProviders = ({
  children,
}: {
  children: React.ReactElement;
}): ReactElement => {
  return (
    <BrowserRouter>
      <QueryWrapper>{children}</QueryWrapper>
    </BrowserRouter>
  );
};
const CHART_ID = 444444;
const ITEM_DISCOUNTED_PRICE = 12000;
const createChartItemIndexResponse = ({
  id,
  isPurchased,
  isForSale,
}: {
  id: number;
  isPurchased: boolean;
  isForSale: boolean;
}): TChartItemsIndexResponse => {
  return {
    id,
    itemInfo: {
      id: 111111,
      isPurchased,
      isForSale,
      brandName: "leeap original",
      imagePaths: {
        original:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        large:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
        largeThumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        thumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      },
      categoryName: "ジャケット",
      colorName: "ブラック",
      price: 15000,
      discountedPrice: ITEM_DISCOUNTED_PRICE,
      purchasePoint: 864,
      locationId: 1,
      discountRate: 20,
      rank: "A",
      isTops: true,
    },
  };
};

describe("BuyItemContainer.tsx", () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });
  test("アイテムが一つも選択されていない", async () => {
    server.use(
      getChartItemIndexMock({
        chartId: CHART_ID,
        status: 200,
        response: [
          createChartItemIndexResponse({
            id: 1,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 2,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 3,
            isPurchased: false,
            isForSale: true,
          }),
        ],
      })
    );

    render(<BuyItemContainer chartId={CHART_ID} possesedPoint={2000} />, {
      wrapper: AllTheProviders,
    });

    await waitFor(() => {
      expect(
        screen.queryByTestId("BuyItemSelectSelectableItemRemainingLabel")
      ).toBeInTheDocument();
    });
    expect(
      screen.queryByTestId("BuyItemSelectPriceWithoutDiscountLabel")
    ).toBeInTheDocument();
  });

  test("アイテムが一部選択されている", async () => {
    server.use(
      getChartItemIndexMock({
        chartId: CHART_ID,
        status: 200,
        response: [
          createChartItemIndexResponse({
            id: 1,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 2,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 3,
            isPurchased: false,
            isForSale: true,
          }),
        ],
      })
    );
    const user = userEvent.setup();

    render(<BuyItemContainer chartId={CHART_ID} possesedPoint={2000} />, {
      wrapper: AllTheProviders,
    });
    await waitFor(
      async () =>
        await user.click(screen.getByTestId("BuyItemSelectItemCard-1"))
    );

    await screen.findByTestId("BuyItemSelectSelectableItemRemainingLabel");
    expect(
      screen.queryByTestId("BuyItemSelectPriceWithoutDiscountLabel")
    ).toBeInTheDocument();

    user.click(screen.getByTestId("BuyItemSelectSubmitButton"));

    await waitFor(() =>
      expect(
        screen.queryByTestId("BillingInfoAllSelectedDiscountPriceLabel")
      ).not.toBeInTheDocument()
    );
  });

  test("アイテムが全て選択されている", async () => {
    server.use(
      getChartItemIndexMock({
        chartId: CHART_ID,
        status: 200,
        response: [
          createChartItemIndexResponse({
            id: 1,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 2,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 3,
            isPurchased: false,
            isForSale: true,
          }),
        ],
      })
    );
    const user = userEvent.setup();

    render(<BuyItemContainer chartId={CHART_ID} possesedPoint={2000} />, {
      wrapper: AllTheProviders,
    });
    await waitFor(
      async () =>
        await user.click(screen.getByTestId("BuyItemSelectItemCard-1"))
    );
    await user.click(screen.getByTestId("BuyItemSelectItemCard-2"));
    await user.click(screen.getByTestId("BuyItemSelectItemCard-3"));

    await screen.findByTestId("BuyItemSelectAllSelectedDiscountLabel");
    expect(
      screen.queryByTestId("BuyItemSelectAllSelectedDiscountPriceLabel")
    ).toBeInTheDocument();

    user.click(screen.getByTestId("BuyItemSelectSubmitButton"));

    await screen.findByTestId("BillingInfoAllSelectedDiscountPriceLabel");
    expect(
      screen.queryByTestId("BillingInfoAllSelectedDiscountPrice")
    ).toHaveTextContent(
      `-¥${Math.floor(ITEM_DISCOUNTED_PRICE * 3 * 0.1).toLocaleString()}`
    );
  });

  test("アイテムが一部購入されていて残りは選択されていない", async () => {
    server.use(
      getChartItemIndexMock({
        chartId: CHART_ID,
        status: 200,
        response: [
          createChartItemIndexResponse({
            id: 1,
            isPurchased: true,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 2,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 3,
            isPurchased: false,
            isForSale: true,
          }),
        ],
      })
    );

    render(<BuyItemContainer chartId={CHART_ID} possesedPoint={2000} />, {
      wrapper: AllTheProviders,
    });

    await waitFor(() => {
      expect(
        screen.queryByTestId("BuyItemSelectSelectableItemRemainingLabel")
      ).toBeInTheDocument();
    });
    expect(
      screen.queryByTestId("BuyItemSelectPriceWithoutDiscountLabel")
    ).toBeInTheDocument();
  });

  test("アイテムが一部購入されていて残りは一部選択されている", async () => {
    server.use(
      getChartItemIndexMock({
        chartId: CHART_ID,
        status: 200,
        response: [
          createChartItemIndexResponse({
            id: 1,
            isPurchased: true,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 2,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 3,
            isPurchased: false,
            isForSale: true,
          }),
        ],
      })
    );
    const user = userEvent.setup();

    render(<BuyItemContainer chartId={CHART_ID} possesedPoint={2000} />, {
      wrapper: AllTheProviders,
    });
    await waitFor(
      async () =>
        await user.click(screen.getByTestId("BuyItemSelectItemCard-2"))
    );

    await screen.findByTestId("BuyItemSelectSelectableItemRemainingLabel");
    expect(
      screen.queryByTestId("BuyItemSelectPriceWithoutDiscountLabel")
    ).toBeInTheDocument();

    user.click(screen.getByTestId("BuyItemSelectSubmitButton"));

    await waitFor(() =>
      expect(
        screen.queryByTestId("BillingInfoAllSelectedDiscountPriceLabel")
      ).not.toBeInTheDocument()
    );
  });

  test("アイテムが一部購入されていて残りが全て選択されている", async () => {
    server.use(
      getChartItemIndexMock({
        chartId: CHART_ID,
        status: 200,
        response: [
          createChartItemIndexResponse({
            id: 1,
            isPurchased: true,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 2,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 3,
            isPurchased: false,
            isForSale: true,
          }),
        ],
      })
    );
    const user = userEvent.setup();

    render(<BuyItemContainer chartId={CHART_ID} possesedPoint={2000} />, {
      wrapper: AllTheProviders,
    });
    await waitFor(
      async () =>
        await user.click(screen.getByTestId("BuyItemSelectItemCard-2"))
    );
    await user.click(screen.getByTestId("BuyItemSelectItemCard-3"));

    await screen.findByTestId("BuyItemSelectAllSelectedDiscountLabel");
    expect(
      screen.queryByTestId("BuyItemSelectAllSelectedDiscountPriceLabel")
    ).toBeInTheDocument();

    user.click(screen.getByTestId("BuyItemSelectSubmitButton"));

    await screen.findByTestId("BillingInfoAllSelectedDiscountPriceLabel");
    expect(
      screen.queryByTestId("BillingInfoAllSelectedDiscountPrice")
    ).toHaveTextContent(
      `-¥${Math.floor(ITEM_DISCOUNTED_PRICE * 2 * 0.1).toLocaleString()}`
    );
  });

  test("アイテムが一部購入不可で残りが全て選択されている", async () => {
    server.use(
      getChartItemIndexMock({
        chartId: CHART_ID,
        status: 200,
        response: [
          createChartItemIndexResponse({
            id: 1,
            isPurchased: false,
            isForSale: false,
          }),
          createChartItemIndexResponse({
            id: 2,
            isPurchased: false,
            isForSale: true,
          }),
          createChartItemIndexResponse({
            id: 3,
            isPurchased: false,
            isForSale: true,
          }),
        ],
      })
    );
    const user = userEvent.setup();

    render(<BuyItemContainer chartId={CHART_ID} possesedPoint={2000} />, {
      wrapper: AllTheProviders,
    });
    await waitFor(
      async () =>
        await user.click(screen.getByTestId("BuyItemSelectItemCard-2"))
    );
    await user.click(screen.getByTestId("BuyItemSelectItemCard-3"));

    await waitFor(() =>
      expect(
        screen.queryByTestId("BuyItemSelectAllSelectedDiscountLabel")
      ).not.toBeInTheDocument()
    );
    expect(
      screen.queryByTestId("BuyItemSelectAllSelectedDiscountPriceLabel")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("BuyItemSelectSelectableItemRemainingLabel")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("BuyItemSelectPriceWithoutDiscountLabel")
    ).toBeInTheDocument();

    user.click(screen.getByTestId("BuyItemSelectSubmitButton"));

    await waitFor(() =>
      expect(
        screen.queryByTestId("BillingInfoAllSelectedDiscountPriceLabel")
      ).not.toBeInTheDocument()
    );
  });
});
