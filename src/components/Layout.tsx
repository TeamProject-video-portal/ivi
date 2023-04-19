import { NextComponentType, NextPageContext } from "next";
import { FC, ReactElement, ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
