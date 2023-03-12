import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Header0 from "./common/header0";
  import Header1 from "./common/header1";
  import Header2 from "./common/header2";

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<>
      <Header0/>
      <Header1/>
      <Header2/>
      </>),
    },
  ]);

  export default router;