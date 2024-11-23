// components/TopNavbar.tsx
import Link from 'next/link';
import { PowerIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { auth } from '@/app/auth';
import { SignOut } from '../login/sign-out';

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/tasks", label: "Tarefas" },
  { href: "/finances", label: "Finanças" },
  { href: "/works", label: "Trabalho" },
];

export default async function TopNavbar() {

  let session = await auth();

  return (
    <header className='flex flex-row text-slate-800 bg-slate-200 py-5 px-10 justify-between items-center'>
      <section className='text-slate-800'>
        Olá, {session?.user?.name}
      </section>
      <nav>
        <ul className='list-none p-0 m-0 flex justify-center [&>li]:text-slate-800 [&>li]:mx-4'>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section>
      <section className='flex flex-row gap-1'>
        
        <SignOut />
        <button type="button" className="px-2 py-1 text-xs text-center text-white bg-slate-800 rounded hover:bg-slate-900 focus:ring-1 focus:outline-none focus:ring-slate-500 flex-row flex items-center">
          <Cog6ToothIcon className='size-4'/>
        </button>

      </section>
      </section>
    </header>
  );
}
