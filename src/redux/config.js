import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers";

const logger = createLogger({ collapsed: true });
const store = createStore(
  reducers,
  __DEV__ ? compose(applyMiddleware(thunk, logger)) : applyMiddleware(thunk),
);

export default () => store;
export const getStore = () => store;
