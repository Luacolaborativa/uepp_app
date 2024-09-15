// components/TopNavbar.tsx
import Link from 'next/link';
import styles from './TopNavbar.module.css'; // Crie um arquivo CSS separado se necessário

export default function TopNavbar() {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/tasks">Tarefas</Link></li>
          <li><Link href="/finances">Finanças</Link></li>
          <li><Link href="/works">Trabalho</Link></li>
        </ul>
      </nav>
    </header>
  );
}
