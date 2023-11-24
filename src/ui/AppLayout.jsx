import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function AppLayout() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="m-auto ">
      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}

      <Header setShowMenu={setShowMenu} />

      {/* toggle header depending on device size */}
      <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
