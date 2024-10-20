// components/SideNavbar.tsx
import Link from 'next/link';
import { 
  AcademicCapIcon, 
  BanknotesIcon, 
  CalendarDaysIcon, 
  ComputerDesktopIcon, 
  ClipboardDocumentListIcon, 
  CpuChipIcon } from '@heroicons/react/24/outline';
import LogotipoDashboard from './LogotipoDashboard';

const menuItems = [
  { href: "/", icon: ComputerDesktopIcon, label: "Dashboard" },
  { href: "/tasks", icon: ClipboardDocumentListIcon, label: "Tarefas" },
  { href: "/finances", icon: BanknotesIcon, label: "Finanças" },
  { href: "/works", icon: CpuChipIcon, label: "Trabalho" },
  { href: "/schedules", icon: CalendarDaysIcon, label: "Agenda" },
  { href: "/studies", icon: AcademicCapIcon, label: "Estudos" },
];

export default function SideNavbar() {
  return (
    <aside className="bg-slate-900 w-[250px] p-3 h-full">
      <LogotipoDashboard />
      <ul className='list-none p-0 m-0 [&>li]:mb-3 [&>li]:text-slate-300 [&>li]:p-1'>
        {menuItems.map((item, index) => (
          <li key={index} className='hover:text-orange-400'>
            <Link href={item.href} className='flex flex-row gap-2'>
              <item.icon className='size-5' />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
