// layout.tsx

// Import necessary dependencies
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import the Poppins font
// import { Roboto_Slab } from "next/font/google"; // Import the Roboto_Slab font (Fix typo here)
import "./globals.css"; // Import global styles

// Configure the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Configure the RobotoSlab font (Fix typo in the function name)
// export const RobotoSlab = Roboto_Slab({
//   subsets: ["latin"],
//   display: "swap",
// });

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
