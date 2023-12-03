import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterCandidate } from "./pages/register/register";

import LoginPage from "./pages/login/login";
import { VerifyEmail } from "./pages/verifyEmail";
import EnterCode from "./pages/entercode/entercode";
import Profile from "./pages/profile/profile";
import { ForgetPass } from "./pages/forgetPass/forgetpass";
import HeaderHome from "./components/HeaderHome";
import HomePage from "./pages/homePage/homePage";

const App = () => {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Layout />,
    //   errorElement: <NotFound />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Home />,
    //     },
    //     {
    //       path: "book",
    //       element: <Book />,
    //     },
    //   ],
    // },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterCandidate />,
    },
    {
      path: "/verifyEmail",
      element: <VerifyEmail />,
    },
    {
      path: "/forget-pass",
      element: <ForgetPass />,
    },
    {
      path: "/enter-code",
      element: <EnterCode />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/headerHome",
      element: <HeaderHome />,
    },
    {
      path: "/homePage",
      element: <HomePage />,
    },
    // {
    //   path: "/admin",
    //   element: <LayoutAdmin />,
    //   errorElement: <NotFound />,
    //   children: [
    //     {
    //       index: true,
    //       element: (
    //         <ProtectedRoute>
    //           <Dashboard />
    //         </ProtectedRoute>
    //       ),
    //     },
    //     {
    //       path: "user",
    //       element: (
    //         <ProtectedRoute>
    //           <UserTable />
    //         </ProtectedRoute>
    //       ),
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
