// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import { Lato, Raleway } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
  variable: '--font-lato'
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-raleway'
});

const globalStyles = `
  :root {
    --font-lato: ${lato.style.fontFamily};
    --font-raleway: ${raleway.style.fontFamily};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-raleway) !important;
    font-weight: 800 !important;
  }
`;

export const metadata = {
  title: 'UÉPP',
  description: 'Organize sua vida',
  styles: globalStyles,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${raleway.variable} ${lato.variable}`} >
        <div className="layout-container">

          {/* Layout principal com aside e conteúdo */}
          <div className="main-layout">
            
            {/* Menu lateral (aside) */}
            <SideNavbar />


            <section className='flex flex-col w-full'>
              {/* Navbar no topo */}
              <TopNavbar />

              {/* Conteúdo dinâmico das páginas */}
              <main className="content">
                {children}
              </main>
            </section>

          </div>
        </div>
      </body>
    </html>
  );
}
