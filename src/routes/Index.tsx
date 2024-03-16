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
import Transaction from "../pages/transactions/Transactions";
import AuthGuard, { IsLogin } from "../guard/AuthGuard";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <AuthGuard>
          <Layout>
            <Suspense fallback={<h4>Loading....</h4>}>
              <Outlet />
            </Suspense>
          </Layout>
        </AuthGuard>
      ),
      children: [
        { element: <Dashboard />, index: true },
        { path: "positions", element: <Positions /> },
        { path: "positions-closed", element: <ClosedPositions /> },
        { path: "profit-and-loss-report", element: <ProfitAndLossReport /> },
        { path: "add-fund", element: <AddFund /> },
        { path: "team", element: <Team /> },
        { path: "transactions-history", element: <Transaction /> },
        { path: "logout", element: <Transaction /> },
      ],
    },
    {
      element: (
        <IsLogin>
          <Outlet />
        </IsLogin>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "sign-up", element: <SignUp /> },
      ],
    },
  ]);
}
