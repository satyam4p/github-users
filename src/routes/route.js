import { createBrowserRouter } from "react-router-dom";

import { UserInfo } from "../Containers/userInfo";
import { UserList } from "../Containers/userList";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/user/:userid",
    element: <UserInfo />,
  },
]);

export default Routes;
