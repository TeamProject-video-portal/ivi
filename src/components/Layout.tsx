import { NextComponentType, NextPageContext } from "next";
import { FC, ReactElement, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children?: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
