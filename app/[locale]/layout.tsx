import Header from "@/components/header";
import "./globals.css";
import { JetBrains_Mono, Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import LocaleSwitch from "@/components/locale-switch";
import Footer from "@/components/footer";
import CommandPalette from "@/components/command-palette";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Johans Neira | Ingeniero de Software",
  description:
    "Johans Neira — desarrollador fullstack que ha liderado migraciones de autenticación y pagos para bancos en producción.",
  openGraph: {
    title: "Johans Neira | Ingeniero de Software",
    description:
      "Johans Neira — desarrollador fullstack que ha liderado migraciones de autenticación y pagos para bancos en producción.",
    url: "https://johansneira.site",
    siteName: "Johans Neira",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className={`!scroll-smooth ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="font-body bg-ink text-fg-primary relative selection:bg-link-500 selection:text-ink pt-10">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "#17181b",
                  color: "#e4e4e0",
                  border: "1px solid #30363d",
                  borderRadius: "0px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                },
              }}
            />
            <CommandPalette />
            <LocaleSwitch />
          </ActiveSectionContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
