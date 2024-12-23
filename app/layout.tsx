import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Threads",
    description: "A Next.js 15 Meta Threads Application"
  }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider afterSignOutUrl="/sign-in">
        <html lang="en" className={`${inter.className} bg-dark-1`}>
            <body>
                {children}
            </body>
        </html>
        </ClerkProvider>
    );
}
 