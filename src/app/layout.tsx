import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import Footer from "@/components/jan2025/footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Abrindo a Porteira",
  description: "A partir do dia 4 de fevereiro, a sua fazenda nunca mais será a mesma! Você vai descobrir de vez como aumentar a produtividade do gado e ter mais lucro o ano inteiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
       <GoogleTagManager gtmId="GTM-TDHRKG27" />
      <body
        className={`${roboto.variable} antialiased`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDHRKG27"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {children}
        <Footer />
      </body>
    </html>
  );
}
