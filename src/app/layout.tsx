import { ReduxProvider } from "@/store/provider";
import { defaultMetadata } from "@/utils/seo";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { FiraFont, VazirFont } from "@/app/font";
import RegisterSW from "@/components/layout/RegisterSW";
import I18nProvider from "@/components/shared/Language/I18nProvider";
import "@/styles/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${FiraFont.variable} ${VazirFont.variable} font-fa`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <meta
          name="google-site-verification"
          content="oergdeNDmECwZG5lddXue9LiU9jVenUYgAUrQre6v7Q"
        />
      </head>
      <body>
        <RegisterSW />
        <Suspense fallback={null}>
          <ReduxProvider>
            <I18nProvider>{children}</I18nProvider>
          </ReduxProvider>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
