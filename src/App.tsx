import { BrowserRouter } from "react-router-dom";
import Routes from "routes/Routes";
import { ThemeProvider, Global } from "@emotion/react";
import { DdefaultTheme, GlobalStyles } from "styles/theming";
import "react-dayjs-picker/dist/index.css";

export default function App() {
  return (
    <ThemeProvider theme={DdefaultTheme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
