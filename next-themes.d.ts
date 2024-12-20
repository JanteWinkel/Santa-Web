declare module "next-themes" {
    import * as React from "react";
  
    export const useTheme: () => {
        theme: string;
        setTheme: (theme: string) => void;
        systemTheme?: string;
      };
      
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
  