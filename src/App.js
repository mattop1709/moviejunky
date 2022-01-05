import React from "react";
import { Provider } from "react-redux";
import Index from "./screens/index";
import config from "./redux/config";

const App = () => (
  <Provider {...{ store: config() }}>
    <Index />
  </Provider>
);
export default App;
