import AllProducts from "../components/AllProducts";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Designers from "../components/Designers";
import Gaming from "../components/Gaming";
import Hero from "../components/Hero";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Brands />
      <Banner />
      <Gaming />
      <Designers />
      <AllProducts />
    </div>
  );
}
