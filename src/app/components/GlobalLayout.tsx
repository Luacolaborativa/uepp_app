import { ReactNode } from 'react';
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';

interface GlobalLayoutProps {
    children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
    return (
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
    );
}