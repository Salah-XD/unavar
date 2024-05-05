// layout.tsx

// Import necessary dependencies
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css"; // Import global styles

// Configure the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  variable: "--font-montserrat",
});
const RobotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

// Define metadata for the application
export const metadata: Metadata = {
  title: "Unavar",
  description: "Ensuring Quality from Farm to Fork",
};

// Define the layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wrap the content in HTML tags
    <html lang="en">
      <body
        className={`font-poppins ${poppins.variable} ${RobotoSlab.variable} ${montserrat.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
