import "devextreme/dist/css/dx.light.css";
import React from "react";
import { MyContextProvider } from "./store/ContextProvider";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  );
};
