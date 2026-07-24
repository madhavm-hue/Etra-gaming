import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://etra-gaming.vercel.app"),
  title: {
    default: "ETRA Animation & Game Development",
    template: "%s | ETRA",
  },

  description:
    "ETRA Animation & Game Development creates immersive games, animation, cinematics, VFX and interactive digital experiences.",

  keywords: [
    "ETRA Gaming",
    "Game Development",
    "3D Animation",
    "VFX",
    "CGI",
    "Game Art",
    "Interactive Experiences",
  ],

  authors: [
    {
      name: "ETRA Animation & Game Development",
    },
  ],

  creator: "ETRA Animation & Game Development",

  openGraph: {
    title: "ETRA Animation & Game Development",
    description:
      "Immersive games, animation, cinematics and interactive digital experiences.",
    type: "website",
    locale: "en_IN",
    siteName: "ETRA",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ETRA Animation & Game Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ETRA Animation & Game Development",
    description:
      "Immersive games, animation, cinematics and interactive digital experiences.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}