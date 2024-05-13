import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      <footer className="bg-neutral-800 text-center w-screen p-2">
        created by Banid Prajapati
      </footer>
    </html>
  );
}
