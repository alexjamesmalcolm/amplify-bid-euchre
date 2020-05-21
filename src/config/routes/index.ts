import { lazy } from "react";

interface IRoute {
  name: string;
  href: string;
  isExternal?: boolean;
  Component: Function;
}

interface IRoutes {
  [routeKey: string]: IRoute;
}

const lobbies: IRoute = {
  name: "Lobbies",
  href: "/lobby",
  Component: lazy(() => import("pages/Lobbies")),
};
const home: IRoute = {
  name: "Home",
  href: "/",
  Component: lazy(() => import("pages/Home")),
};

export const routes = {
  lobbies,
  home,
};
