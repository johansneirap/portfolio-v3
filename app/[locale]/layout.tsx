import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import LocaleSwitch from "@/components/locale-switch";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "es" }];
// }

export const metadata: Metadata = {
  title: "Johans Neira | Personal Portfolio",
  description: "Johans Neira is a full-stack web developer based in Chile.",
  openGraph: {
    title: "Johans Neira | Personal Portfolio",
    description: "Johans Neira is full-stack web developer based in Chile.",
    url: "https://johansneira.site",
    siteName: "Johans Neira Portfolio",
    images: [
      {
        url: "https://media.licdn.com/dms/image/C4E03AQFo-K5gupVuRg/profile-displayphoto-shrink_400_400/0/1634866894344?e=1698883200&v=beta&t=XufXnYKvWz6-PZYKukgG4oCRrUmz9u4AOLFyfKHR8Og",
        width: 800,
        height: 600,
      },
      {
        url: "https://media.licdn.com/dms/image/C4E03AQFo-K5gupVuRg/profile-displayphoto-shrink_400_400/0/1634866894344?e=1698883200&v=beta&t=XufXnYKvWz6-PZYKukgG4oCRrUmz9u4AOLFyfKHR8Og",
        width: 1800,
        height: 1600,
        alt: "alt image",
      },
    ],
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
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
              <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <LocaleSwitch />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
