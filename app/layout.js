import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import { Footer } from "./component/footer";
import Head from "next/head";  // Import Head from next/head

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Education Consultency",
  description: "Education Consultency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Add the favicon link here */}
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />
        {children}
      </body>
    </html>
  );
}
