import { Montserrat } from 'next/font/google';
import './globals.css'; // Ensure Tailwind or global styles are imported

const montserrat = Montserrat({
  subsets: ['latin'], // Specify the subsets you need
  weight: ['400', '700'], // Specify the weights you need (e.g., regular and bold)
  variable: '--font-montserrat', // Optional: CSS variable for the font
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased bg-black text-white font-montserrat">{children}</body>
    </html>
  );
}