/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: string;
      secondary: string;
    };
  }
}
