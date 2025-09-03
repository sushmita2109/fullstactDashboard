export const intialState = {
  allProducts: [],
  grandTotal: [
    {
      name: "",
      number: 0,
    },
  ],
  lineChart: {
    xAxis: { data: [] },
    series: [{ data: [] }],
  },
  error: null,
  loading: false,
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, allProducts: action.payload };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "GENERATE_TOTAL":
      return {
        ...state,
        grandTotal: state.allProducts.reduce(
          (totals, product) => {
            totals[0].number += product.customer ? 1 : 0;
            totals[1].number += product.stock ? 1 : 0;
            totals[2].number += product.price ? product.price : 0;
            totals[3].number += product.rating ? product.rating : 0;
            return totals;
          },
          [
            { name: "Total customer", number: 0 },
            { name: "Total Orders", number: 0 },
            { name: "Total Revenue", number: 0 },
            { name: "Total Returns", number: 0 },
          ]
        ),
      };
    case "LINE_CHART":
      return {
        ...state,
        lineChart: {
          xAxis: {
            data: state.allProducts.map((item) => item.rating), // X-Axis = ratings
          },
          series: [
            {
              data: state.allProducts.map((item) => item.stock), // Y-Axis = stock
              area: true,
            },
          ],
        },
      };
    default:
      return state;
  }
};
