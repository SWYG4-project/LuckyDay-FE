import { ThemeProvider } from "@emotion/react";

import { Input } from "components";
import { ReactIcon } from "assets";
import { theme } from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactIcon />
      <Input />
      {/* NOTE: declare 설정 확인을 위해 icon, input 추가 -> 추후 수정 필요 */}
    </ThemeProvider>
  );
}

export default App;
