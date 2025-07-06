import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Books from "@/pages/Books";
import { createBrowserRouter } from "react-router-dom";
import { AddBookModal } from "@/components/modules/Book/AddBookModal";
import BorrowSummary from "@/components/modules/Borrow/BorrowSummary";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: "/create-book",
        element: <AddBookModal />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
