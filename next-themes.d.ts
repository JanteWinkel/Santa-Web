declare module "next-themes" {
    import * as React from "react";
  
    export interface ThemeProviderProps {
      enableSystem?: boolean;
      attribute?: string;
      defaultTheme?: string;
      themes?: string[];
      enableColorScheme?: boolean;
      children?: React.ReactNode;
    }
  
    export const ThemeProvider: React.FC<ThemeProviderProps>;
  }
  