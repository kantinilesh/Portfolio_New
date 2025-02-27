import { Montserrat, Luckiest_Guy } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-luckiest-guy',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${luckiestGuy.variable}`}>
      <body className="antialiased bg-black text-white font-montserrat">{children}</body>
    </html>
  );
}