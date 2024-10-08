"use client"; // Mark as client component

import { Inter } from "next/font/google";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <html>
    <ReduxProvider store={store}>
      <body className={inter.className}>{children}</body>
    </ReduxProvider>
    </html>
  );
}
