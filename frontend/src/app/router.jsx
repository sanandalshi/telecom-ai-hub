import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Learn from "../pages/Learn";
import Quiz from "../pages/Quiz";
import Messaging from "../pages/Messaging";
import Complaint from "../pages/Complaint";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/learn", element: <Learn /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/messaging", element: <Messaging /> },
  { path: "/complaint", element: <Complaint /> },
]);