import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import CatApp from "./app/CatApp";
import store from "./store/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <CatApp />
  </Provider>
);
