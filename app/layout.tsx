/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Santa Claus Querido",
  description: "¡Descubre la magia navideña! Conoce a Santa Claus, comparte tus deseos y vive una experiencia inolvidable llena de alegría y espíritu navideño para toda la familia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
   
      <body className="antialiased">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Navbar/>
        {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
