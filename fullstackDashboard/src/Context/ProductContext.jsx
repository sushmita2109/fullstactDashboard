import { useReducer } from "react";
import { createContext } from "react";
import { intialState, productReducer } from "../Reducer/ProductReducer";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    intialState
  );

  const fetchProductData = async () => {
    productDispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    try {
      const response = await axios.get("http://localhost:5544/api/products");
      productDispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: response.data,
      }); // <-- axios uses .data
    } catch (error) {
      productDispatch({
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error.message,
      });
    }
  };
  return (
    <ProductContext.Provider
      value={{ productDispatch, productState, fetchProductData }}
    >
      {children}
    </ProductContext.Provider>
  );
};
