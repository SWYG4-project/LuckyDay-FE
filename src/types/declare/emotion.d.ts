// emotion.d.ts
import "@emotion/react";

import { theme } from "styles/themes/theme";

type ExtendedTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends ExtendedTheme {}
}
