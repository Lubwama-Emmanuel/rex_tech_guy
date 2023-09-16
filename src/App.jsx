import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import AppLayout from "./ui/AppLayout";
import GamingLaptops from "./pages/GamingLaptops";

export default function App() {
  // const [isDark, setIsDark] = useState(false);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/gaming",
          element: <GamingLaptops />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  // className={isDark ? "dark" : "light"}

  return (
    <div>
      <div className="bg-white dark:bg-slate-600">
        <RouterProvider router={router} />;
      </div>
    </div>
  );
}
