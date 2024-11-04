import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: " 1 Santa Claus Querido",
  description: "¡Descubre la magia navideña! Conoce a Santa Claus, comparte tus deseos y vive una experiencia inolvidable llena de alegría y espíritu navideño para toda la familia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
