// components/TopNavbar.tsx
import Link from 'next/link';
import { PowerIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/tasks", label: "Tarefas" },
  { href: "/finances", label: "Finanças" },
  { href: "/works", label: "Trabalho" },
];

export default function TopNavbar() {
  return (
    <header className='flex flex-row bg-slate-600 py-2 px-6 justify-between items-center'>
      <section className='text-slate-300'>
        Olá, Usuário
      </section>
      <nav>
        <ul className='list-none p-0 m-0 flex justify-center [&>li]:text-slate-300 [&>li]:mx-4'>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section>
      <section className='flex flex-row gap-1'>
        <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-slate-700 rounded hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 flex-row flex gap-3 uppercase items-center">
          <PowerIcon className='size-4'/>
          logout
        </button>
        <button type="button" className="px-2 py-1 text-xs text-center text-white bg-slate-800 rounded hover:bg-slate-900 focus:ring-1 focus:outline-none focus:ring-slate-500 flex-row flex items-center">
          <Cog6ToothIcon className='size-4'/>
        </button>

      </section>
      </section>
    </header>
  );
}
