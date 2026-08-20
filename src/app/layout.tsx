import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Providers } from "@/components/Providers";
import { Language } from "@/data/portfolioData";
import "./globals.css";

export const metadata: Metadata = {
  title: "M. Althaf Kiram | Fullstack Software Engineer & AI Systems Builder",
  description:
    "Portfolio of M. Althaf Kiram. Fullstack Software Engineer shipping Next.js, React Native, Node.js, Socket.IO realtime systems, and AI products including RAC (LangChain RAG) and LamarKerja AI. Available immediately for relocate or remote roles.",
  keywords: [
    "M. Althaf Kiram",
    "Fullstack Software Engineer",
    "Backend Engineer",
    "AI Engineer",
    "LamarKerja AI",
    "RAC Recommendation Auto Car",
    "LangChain",
    "RAG",
    "Dialektika",
    "WhaleWatch AI",
    "Bug Brawl",
    "RakanChat",
    "Next.js",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Socket.IO",
    "GraphQL",
    "Hacktiv8",
    "Indonesia",
  ],
  authors: [{ name: "M. Althaf Kiram", url: "https://github.com/malthafkiram" }],
  creator: "M. Althaf Kiram",
  openGraph: {
    title: "M. Althaf Kiram | Fullstack Software Engineer & AI Systems Builder",
    description:
      "Fullstack engineer shipping production AI systems, live commerce, realtime multiplayer games, and mobile products with Next.js, Express, PostgreSQL, and Linux/Vercel deploys.",
    url: "https://m-althaf-kiram-portfolio.vercel.app",
    siteName: "M. Althaf Kiram Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Althaf Kiram | Fullstack Software Engineer",
    description:
      "Fullstack engineer shipping production AI systems, live commerce, realtime WebSockets, and mobile apps with Next.js, Express, PostgreSQL, and Linux deploys.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const raw = cookieStore.get("portfolio-lang")?.value;
  const initialLang: Language = raw === "id" ? "id" : "en";

  return (
    <html lang={initialLang} className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem("portfolio-lang");if(l==="id"||l==="en"){document.documentElement.lang=l;document.cookie="portfolio-lang="+l+";path=/;max-age=31536000;SameSite=Lax"}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#06080D] text-[#F3F4F6]">
        <Providers initialLang={initialLang}>{children}</Providers>
      </body>
    </html>
  );
}
