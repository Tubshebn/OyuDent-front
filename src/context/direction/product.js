import { useReducer, useMemo } from "react";
import ProductReducer from "./productReducer";

const initialState = {
  production: {},
};

export const Product = () => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const handlers = useMemo(
    () => ({
      setProduction: async (data) => {
        dispatch({ type: "SET_PRODUCTION", payload: data });
      },
    }),
    [state]
  );
  return { dirFunc: handlers, dirState: state };
};
