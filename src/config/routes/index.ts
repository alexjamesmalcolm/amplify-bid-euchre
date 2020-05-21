import { lazy } from "react";

interface IRoute {
  name: string;
  href: string;
  isExternal?: boolean;
  Component: Function;
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
const lobby: IRoute = {
  name: "Lobby",
  href: "/lobby/{lobbyId}",
  Component: lazy(() => import("pages/Lobby")),
};
const game: IRoute = {
  name: "Game",
  href: "/game/{gameId}",
  Component: lazy(() => import("pages/Game")),
};

export const routes = {
  lobbies,
  home,
  lobby,
  game,
};
