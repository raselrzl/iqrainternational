import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import { Flag } from "./component/flag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Education Consultancy",
  description: "Education Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Education Consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Education Consultancy</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Flag />
      </body>
    </html>
  );
}
