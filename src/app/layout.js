import "./styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trello Hotel",
  description: "Your Comfort Is Our Pleasure",
  icons: {
    icon: "./images/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
