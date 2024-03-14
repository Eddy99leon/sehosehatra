import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import SidebarProvider from '../contexts/SidebarContext'
import ThemeProvider from '../contexts/ThemeContext'
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "SehoSehatra",
  description: "SehoSehatra est un plateforme pour les événements",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <SidebarProvider>
          <html lang="fr">
            <body className={montserrat.className}>
              {children}
            </body>
          </html>
        </SidebarProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
