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

export const routes: IRoutes = {
  lobbies: {
    name: "Lobbies",
    href: "/lobby",
    Component: lazy(() => import("pages/Lobbies")),
  },
  home: {
    name: "Home",
    href: "/",
    Component: lazy(() => import("pages/Home")),
  },
};
