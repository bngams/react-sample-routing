import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

type Route = RouteObject & {
  label?: string;
}

type Routes = Route[];

// define routes
export const routes: Routes  = [
  {
    path: '/',
    element: <Home />,
    label: 'Home'
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    label: 'Dashboard'
  },
  {
    path: '/other',
    element: (<h1>Other</h1>),
    label: 'Other'
  },
  {
    path: '*',
    element: <NotFound />
  }
];

const toRouteObjectArray = (_routes: Routes): RouteObject[] => {
  return _routes.map(r => { return { path: r.path, element: r.element} as RouteObject });
}

// create BrowserRouter
export const myRouter = createBrowserRouter(toRouteObjectArray(routes));