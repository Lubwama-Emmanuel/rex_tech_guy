import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";
import GamingLaptops from "./pages/GamingLaptops";
import ProductPage from "./pages/ProductPage";
import AllProductsPage from "./pages/AllProductsPage";
import DellLaptops from "./pages/DellLaptops";
import HpLaptops from "./pages/HpLaptops";
import LenovoLaptops from "./pages/LenovoLaptops";

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
          path: "/products/gaming",
          element: <GamingLaptops />,
        },
        {
          path: "/products/dell",
          element: <DellLaptops />,
        },
        {
          path: "/products/hp",
          element: <HpLaptops />,
        },
        {
          path: "/products/lenovo",
          element: <LenovoLaptops />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/products/gaming/omen",
          element: <ProductPage />,
        },
        {
          path: "/products/allProducts",
          element: <AllProductsPage />,
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
