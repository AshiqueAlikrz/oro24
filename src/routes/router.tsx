import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/layouts/MainLayout";
import PageSkeleton from "@/components/SkeletonLoader";
import PublicRoute from "@/components/PublicRoute";
import ProtectedRoute from "@/components/ProtectedRoute";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const SignIn = lazy(() => import("@/pages/SignIn"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<PageSkeleton />}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth/signin",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
]);
