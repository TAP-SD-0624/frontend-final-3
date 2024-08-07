import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "@src/screens/Home";
import SignIn from "@src/screens/SignIn/SignIn";
import SignUp from "@src/screens/SignUp";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <SignIn /> */}
      <SignUp />
      <Footer />
    </>
  );
};

export default Layout;
