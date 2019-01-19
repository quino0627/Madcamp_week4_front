import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "shared/App";
import { Provider } from "react-redux";

// 우리의 웹어플리케이션에 BrowserRouter를 적용한다

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

export default Root;
