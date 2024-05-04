import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<P.LandingPage />} />
        <Route path="luckyBoard" element={<P.LuckyBoardPage />} />
        <Route path="404" element={<P.Error404Page />} />
        <Route path="createLuckyDay" element={<P.CreateLuckyDayPage />} />
      </Routes>
    </BrowserRouter>
  );
}
