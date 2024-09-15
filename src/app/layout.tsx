// app/layout.tsx
import './globals.css'; // Importar os estilos globais aqui (opcional)
import { ReactNode } from 'react';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';

export const metadata = {
  title: 'Minha Aplicação',
  description: 'Aplicação com layout fixo',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="layout-container">
          {/* Navbar no topo */}
          <TopNavbar />

          {/* Layout principal com aside e conteúdo */}
          <div className="main-layout">
            {/* Menu lateral (aside) */}
            <SideNavbar />

            {/* Conteúdo dinâmico das páginas */}
            <main className="content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
