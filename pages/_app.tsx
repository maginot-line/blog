import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-slate-800 dark:text-gray-100">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
