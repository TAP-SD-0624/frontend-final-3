import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ProductSection from "@components/product/ProductSection";
import BreadCrumbs from "@components/product/BreadCrumbs";
const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
<BreadCrumbs />
      <ProductSection />
      <Footer />
    </>
  );
};

export default Layout;
