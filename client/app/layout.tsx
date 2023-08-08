import './globals.css';

import classNames from 'classnames';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Go App',
  description: 'App to test go api',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames([
          font.className,
          'grid h-screen grid-rows-[min-content_1fr]',
        ])}
      >
        <header className="border-b p-4">
          <nav>
            <ul className="flex justify-center gap-4">
              <li>
                <Link className="text-blue-500 hover:underline" href="/">
                  Main
                </Link>
              </li>
              <li>
                <Link
                  className="text-blue-500 hover:underline"
                  href="/categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link className="text-blue-500 hover:underline" href="/words">
                  Words
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
