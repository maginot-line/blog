import Head from "next/head";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
  seoTitle?: string;
}

export default function Layout({ children, seoTitle }: LayoutProps) {
  const router = useRouter();
  return (
    <div>
      <Head>{seoTitle ? <title>{seoTitle} | Geenie Coders</title> : <title>Geenie Coders</title>}</Head>
      <nav className="flex h-20 items-center justify-center border-b">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between text-gray-500 dark:text-gray-100">
          <a href="" className="hover:text-gray-600 dark:hover:text-white">
            <span>Geenie Coders</span>
          </a>
          <a href="" className="hover:text-gray-600 dark:hover:text-white">
            <span>Macro</span>
          </a>
          <a href="" className="hover:text-gray-600 dark:hover:text-white">
            <span>Statements</span>
          </a>
          <a href="" className="hover:text-gray-600 dark:hover:text-white">
            <span>Trading</span>
          </a>
          <a className="rounded-md border border-gray-300 py-1.5 px-4 shadow-sm">Feedback</a>
          <div className="relative flex items-center rounded-md shadow-sm">
            <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3 dark:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full appearance-none items-center rounded-md border border-gray-300 py-2 pr-3 pl-8 text-sm placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 dark:text-gray-500"
            />
          </div>
        </div>
      </nav>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </div>
  );
}
