import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Basket from "./pages/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header></Header>
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "basket",

        element: (
          <main className="container mx-auto px-14">
            <Basket />
          </main>
        ),
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Root;
