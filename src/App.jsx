import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className={isDark ? "dark" : "light"}>
      <div className="bg-white dark:bg-slate-600">
        <RouterProvider router={router} />;
      </div>
    </div>
  );
}
