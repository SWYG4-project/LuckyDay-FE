import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "pages";
import { Layout } from "components";
import AuthRoute from "./authRoute/AuthRoute";

interface RouterProps {
  children: React.ReactNode;
}

export default function Router({ children }: RouterProps) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<P.LandingPage />} />
          <Route path="oauth2/kakao/callback" element={<P.Auth />} />
          <Route element={<AuthRoute />}>
            <Route path="profile" element={<P.Profile />} />
            <Route path="myPage" element={<P.MyPage />} />
            <Route path="editProfile" element={<P.EditProfilePage />} />
            <Route path="luckyBoard" element={<P.LuckyBoardPage />} />
            <Route path="createLuckyDay" element={<P.CreateLuckyDayPage />} />
            <Route
              path="viewLuckyDayActivity/:id"
              element={<P.ViewLuckyActivityPage />}
            />

            {/* FIX: 현재 테스트 할 수 있는 사이클이 없어서 임시로 라우터 설정을 하였습니다.  */}
            {/* 테스트 케이스 받고 나서 /:id로 변경하겠습니다.  */}

            <Route
              path="luckyDayCycleList"
              element={<P.LuckyDayCycleListPage />}
            />
            <Route
              path="luckyDayCycleDetail"
              element={<P.LuckyDayCycleDetailPage />}
            />
          </Route>
          <Route path="404" element={<P.Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
