import type { Metadata } from "next";
import Header from "./_shared/header/page";
import Footer from "./_shared/footer/page";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hubi Forever25",
  description: "An App to keep young!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
