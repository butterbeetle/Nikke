import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

import stlyes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={stlyes["main"]}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
