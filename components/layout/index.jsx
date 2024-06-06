import Link from "next/link";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="container p-8 pt-24">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
