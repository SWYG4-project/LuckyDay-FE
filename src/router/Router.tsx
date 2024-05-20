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
            <Route
              path="luckyDays/list"
              element={<P.LuckyDayCycleListPage />}
            />
            <Route
              path="luckyDays/list/:id"
              element={<P.LuckyDayCycleDetailPage />}
            />
          </Route>
          <Route path="404" element={<P.Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
