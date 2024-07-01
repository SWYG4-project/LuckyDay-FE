import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthRoute from "./authRoute/AuthRoute";
import { Layout } from "components";
import * as P from "pages";

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

            <Route path="mypage">
              <Route index element={<P.MyPage />} />
              <Route path="edit" element={<P.EditProfilePage />} />
            </Route>

            <Route path="luckyboard" element={<P.LuckyBoardPage />} />
            <Route path="create" element={<P.CreateLuckyDayPage />} />

            <Route path="luckydays">
              <Route path=":id" element={<P.ViewLuckyActivityPage />} />
              <Route path="list">
                <Route index element={<P.LuckyDayCycleListPage />} />
                <Route path=":id" element={<P.LuckyDayCycleDetailPage />} />
              </Route>
              <Route path="create/:id" element={<P.ReviewLuckyDayPage />} />
              <Route path="review/:id" element={<P.ViewLuckyDayPage />} />
            </Route>

            <Route path="noticeboard">
              <Route index element={<P.NoticeBoardPage />} />
              <Route path="notice" element={<P.NoticePage />} />
              <Route path="info" element={<P.InfoPage />} />
            </Route>
          </Route>

          <Route path="loading" element={<P.LoadingPage />} />
          <Route path="404" element={<P.Error404Page />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
