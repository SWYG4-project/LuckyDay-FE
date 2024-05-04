import { Outlet } from "react-router-dom";

import { Header } from "./header";
import * as S from "./Layout.styled";

const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <Outlet />
    </S.Layout>
  );
};

export default Layout;
