import Header from "@/components/header";
import "./globals.css";
import { Space_Grotesk, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import LocaleSwitch from "@/components/locale-switch";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Johans Neira | Ingeniero de Software",
  description:
    "Johans Neira — desarrollador full-stack que ha liderado migraciones de autenticación y pagos para bancos en producción.",
  openGraph: {
    title: "Johans Neira | Ingeniero de Software",
    description:
      "Johans Neira — desarrollador full-stack que ha liderado migraciones de autenticación y pagos para bancos en producción.",
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
      className={`!scroll-smooth ${spaceGrotesk.variable} ${dmSans.variable} ${plexMono.variable}`}
    >
      <body className="font-body bg-void text-steel-200 relative selection:bg-brass-500 selection:text-void pt-12 sm:pt-0 sm:pl-16">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "#1f2226",
                  color: "#b8bcc1",
                  border: "1px solid #3a3f46",
                  borderRadius: "2px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                },
              }}
            />
            <LocaleSwitch />
          </ActiveSectionContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
