import { ThemeProvider } from "@emotion/react"
import { ReactIcon } from "assets"
import { Input } from "components"
import { theme } from "styles/theme"


function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
          <ReactIcon/>
          <Input/>
    </ThemeProvider>
    </div>
  )
}

export default App
