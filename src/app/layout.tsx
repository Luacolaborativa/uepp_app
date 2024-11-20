// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import { Lato, Raleway } from 'next/font/google';
import { auth } from '@/auth';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
  variable: '--font-lato'
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-raleway'
});

const globalStyles = `
  :root {
    --font-lato: ${lato.style.fontFamily};
    --font-raleway: ${raleway.style.fontFamily};
  }
`;

export const metadata = {
  title: 'UÉPP',
  description: 'Organize sua vida',
  styles: globalStyles,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  

  return (
    <html lang="pt-br">
      <body className={`${raleway.variable} ${lato.variable}`} >
        { children }
      </body>
    </html>
  );
}
