import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarWash365 — Weekly Car Wash Membership | Professional Washing at Your Building",
  description:
    "CarWash365 brings professional car washing to your building's garage every week. Sign up once, park your car, and wake up to a spotless ride. Plans from $79.95/mo. Cancel anytime.",
  openGraph: {
    title: "CarWash365 — Your Car, Cleaned Weekly in Your Own Parking Spot",
    description:
      "Professional weekly car washing right at your building. No scheduling, no driving, no hassle. Plans from $79.95/month.",
    type: "website",
    images: ["/images/og_CarWash365_1200x630.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://carwash365.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
