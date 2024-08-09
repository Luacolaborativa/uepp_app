import Head from 'next/head';
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <div className='bg-slate-800 h-[100vh] p-4'>
      <Head>
        <title>Controle Financeiro</title>
        <meta name="description" content="Controle financeiro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Controle Financeiro</h1>
        <TodoList />
      </main>
    </div>
  );
}
