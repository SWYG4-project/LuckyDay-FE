import React from "react";
import * as S from "./Layout.styled";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../../../fonts/index.css";

const Layout: React.FC = () => {
  return (
    <>
      <S.Layout>
        <Header />
        <Footer />
      </S.Layout>
    </>
  );
};

export default Layout;
