// components/SideNavbar.tsx
import Link from 'next/link';
import styles from './SideNavbar.module.css'; // Crie um arquivo CSS separado se necessário

export default function SideNavbar() {
  return (
    <aside className="bg-slate-600 w-[250px] p-3 h-full">
      <ul className='list-none p-0 m-0 bg-slate-200 [&>li]:mb-3 [&>li]:bg-slate-400 [&>li]:text-slate-800'>
        <li className='hover:text-orange-400'><Link href="/">Dashboard</Link></li>
        <li className='hover:text-orange-400'><Link href="/tasks">Tarefas</Link></li>
        <li className='hover:text-orange-400'><Link href="/finances">Finanças</Link></li>
        <li className='hover:text-orange-400'><Link href="/works">Trabalho</Link></li>
        <li className='hover:text-orange-400'><Link href="/schedules">Agenda</Link></li>
        <li className='hover:text-orange-400'><Link href="/studies">Estudos</Link></li>
      </ul>
    </aside>
  );
}
