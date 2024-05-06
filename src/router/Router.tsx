import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "pages";
import { Layout } from "components";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<P.LandingPage />} />
          <Route path="404" element={<P.Error404Page />} />
          <Route path="luckyBoard" element={<P.LuckyBoardPage />} />
          <Route path="createLuckyDay" element={<P.CreateLuckyDayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
