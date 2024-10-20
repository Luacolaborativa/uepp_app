// app/layout.tsx
import './globals.css'; // Importar os estilos globais aqui (opcional)
import { ReactNode } from 'react';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';

export const metadata = {
  title: 'UÉPP',
  description: 'Organize sua vida',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
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
