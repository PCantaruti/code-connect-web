import { Prompt } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import { Aside } from "./components/Aside";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
