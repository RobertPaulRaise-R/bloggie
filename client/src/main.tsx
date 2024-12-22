import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import AppLayout from "./pages/AppLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./features/Login/LoginPage.tsx";
import RegisterPage from "./features/Login/RegisterPage.tsx";
import CreateBlogPage from "./pages/CreateBlogPage.tsx";
import App from "./App.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import { store } from "./store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
      //   { path: "user:id", element: <UserPage /> },
      //   { path: "blog:id", element: <BlogPage /> },
    ],
  },
  { path: "register", element: <RegisterPage /> },
  { path: "login", element: <LoginPage /> },
  { path: "write", element: <CreateBlogPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
