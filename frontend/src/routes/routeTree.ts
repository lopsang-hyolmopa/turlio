import { createRootRoute } from "@tanstack/react-router";

import homeRoute from "./home.route";
import authRoute from "./auth.route";
import dashboardRoute from "./dashboard.route";
import RootLayout from "../RootLayout";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  authRoute,
  dashboardRoute,
]);
