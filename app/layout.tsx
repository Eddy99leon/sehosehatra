import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import SidebarProvider from '../contexts/SidebarContext'
import ThemeProvider from '../contexts/ThemeContext'
import "./globals.css";

const kanit = Kanit({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-kanit',
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
            <body className={kanit.variable}>
              {children}
            </body>
          </html>
        </SidebarProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
