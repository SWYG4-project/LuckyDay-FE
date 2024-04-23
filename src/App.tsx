import { ThemeProvider } from "@emotion/react";

import { ReactIcon } from "assets";
import { theme } from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactIcon />
    </ThemeProvider>
  );
}

export default App;
