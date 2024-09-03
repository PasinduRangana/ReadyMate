import { Inter } from "next/font/google";
import "./globals.css";
import { Provider as ReduxProvider } from "react-redux"; // Import as ReduxProvider to avoid naming conflicts
import { store } from "./store";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface ClientLayoutProps {
  children: ReactNode; // Define the type for children prop
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ReduxProvider store={store}>
      <body className={inter.className}>{children}</body>
    </ReduxProvider>
  );
}
