import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "components";
import * as P from "pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<P.LandingPage />} />
          <Route path="/oauth2/kakao/callback" element={<P.Auth />} />
          <Route path="profile" element={<P.Profile />} />
          <Route path="myPage" element={<P.MyPage />} />
          <Route path="luckyBoard" element={<P.LuckyBoardPage />} />
          <Route path="createLuckyDay" element={<P.CreateLuckyDayPage />} />
          <Route
            path="settingLuckyBoard"
            element={<P.SettingLuckyBoardPage />}
          />
          <Route path="404" element={<P.Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
