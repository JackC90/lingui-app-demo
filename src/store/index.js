import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  locale: {
    language: "en-US",
  },
};
export const store = createStore(reducer, initialState);