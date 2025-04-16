import RootLayout from "../components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "La Voz",
    default: "La Voz",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-purple-800 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
