import { createBrowserRouter, RouteObject } from "react-router-dom";
import DashboardExample from '../dashboard-example-mui/Dashboard';
import { DasboardPage } from "../dashboard/pages/DasboardPage";
import { FederalizadosDashboard } from "../dashboard/components/FederalizadosDashboard";
import { Fideicomiso } from "../dashboard/components/Fideicomiso";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <DasboardPage/>,
        children: [
            {
              path: "/federalizado",
              element: <FederalizadosDashboard/>,
            },
            {
              path: "/fideicomisos",
              element: <Fideicomiso/>,
            },
            {
              path: "/about",
              element: <h1>About</h1>,
            },
          ]
    },
    {
        path: '/dashboard-example',
        element: <DashboardExample />
    }
];

export default createBrowserRouter(routes);