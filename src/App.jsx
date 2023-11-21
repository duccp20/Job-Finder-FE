import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterCandidate } from "./pages/register/register";
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
    // {
    //   path: "/login",
    //   element: <LoginPage />,
    // },
    {
      path: "/register",
      element: <RegisterCandidate />,
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
