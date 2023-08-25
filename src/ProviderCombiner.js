import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
//@ts-ignore
import smoothscroll from "smoothscroll-polyfill";

import { routes } from "routes";

export const ProviderCombiner = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};
