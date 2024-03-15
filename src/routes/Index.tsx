import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Layout from "../layout/dashboard_layout/Layout";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Positions from "../pages/positions/Positions";
import ClosedPositions from "../pages/closed-positions/ClosedPositions";
import ProfitAndLossReport from "../pages/profit-and-loss-report/ProfitAndLossReport";
import AddFund from "../pages/add-fund/AddFund";
import Team from "../pages/team/Team";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Suspense fallback={<h4>Loading....</h4>}>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        { element: <Dashboard />, index: true },
        { path:'positions',element: <Positions />},
        { path:'positions-closed',element: <ClosedPositions />},
        { path:'profit-and-loss-report',element: <ProfitAndLossReport />},
        { path:'add-fund',element: <AddFund />},
        { path:'team',element: <Team />},
      ],
      
    },
  ]);
}
