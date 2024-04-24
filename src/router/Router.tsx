import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as P from "pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<P.Home />} />
      </Routes>
    </BrowserRouter>
  );
}
