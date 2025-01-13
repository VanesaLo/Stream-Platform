import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { MenuSideBar } from "@/components/sidebar-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Streaming",
  description:
    "Explora las películas más populares y recientes en nuestra plataforma de streaming. Encuentra tus próximas películas favoritas.",
  keywords: ["películas", "streaming", "cine", "populares", "estrenos"],
  openGraph: {
    title: "Movie Streaming",
    description:
      "Explora las películas más populares y recientes en nuestra plataforma de streaming. Encuentra tus próximas películas favoritas.",
    siteName: "Movie Streaming",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex">
            <MenuSideBar />
            <main className="flex-1 justify-center flex">{children}</main>
          </div>
        </Providers>
      </body>
         
    </html>
  );
}
