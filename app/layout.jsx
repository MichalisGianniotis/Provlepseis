import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CTA from "@/components/common/CTA";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// app/page.jsx (ή app/layout.jsx αν θες global meta)
export const metadata = {
  title: "Provlepseis - Προβλέψεις Ποδοσφαίρου & Στοιχημάτων",
  description:
    "Βρείτε αξιόπιστες προβλέψεις ποδοσφαίρου, στατιστικά και αποδόσεις για τους αγώνες της ημέρας.",
  keywords:
    "προβλέψεις ποδοσφαίρου, στοιχηματικές προβλέψεις, αγώνες, αποδόσεις",
  authors: [{ name: "GXX" }],
  // icons: {
  //   icon: '/G__1_-removebg-preview.png', // favicon από public folder
  // },
  openGraph: {
    title: "Provlepseis - Προβλέψεις Ποδοσφαίρου",
    description:
      "Βρείτε αξιόπιστες προβλέψεις ποδοσφαίρου, στατιστικά και αποδόσεις για τους αγώνες της ημέρας.",
    url: "https://provlepseis.vercel.app/",
    type: "website",
    images: [
      {
        url: "/G__1_-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Provlepseis - Προβλέψεις Ποδοσφαίρου",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Provlepseis - Προβλέψεις Ποδοσφαίρου",
    description:
      "Βρείτε αξιόπιστες προβλέψεις ποδοσφαίρου, στατιστικά και αποδόσεις για τους αγώνες της ημέρας.",
    images: ["/G__1_-removebg-preview.png"],
  },
};


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/G__1_-removebg-preview.png" type="image/png" />
        {/* <title>ΔΩΡΕΑΝ ΠΡΟΒΛΕΨΕΙΣ</title> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
