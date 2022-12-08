import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Route as AppRoute } from "src/core";
import {
  AppWrapper,
  Content,
  DynamicContent,
  NavigationWrapper,
} from "./App.styles";
import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";
import GlobalStyle from "./theme/GlobalStyles";

const TFO = React.lazy(() => import("./pages/tfo/tfo"));

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <Content>
        <Header></Header>

        <DynamicContent>
          <Routes>
            <Route
              element={
                <React.Suspense fallback={null}>
                  <TFO />
                </React.Suspense>
              }
              path={AppRoute.TFO}
            />
            <Route path="*" element={<Navigate to={AppRoute.TFO} />} />
          </Routes>
        </DynamicContent>
      </Content>
    </AppWrapper>
  );
};

export default App;
