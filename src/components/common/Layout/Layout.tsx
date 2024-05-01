import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import * as S from "./Layout.styled";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <S.Layout>
        <Header />
        {children}
        <Footer />
      </S.Layout>
    </>
  );
};

export default Layout;
