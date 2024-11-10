import ContentHeader from "../components/ContentHeader";
import WorkCard from "./workCard";

// app/finance/page.tsx
export default function WorksPage() {
  return (
    <div>
      <ContentHeader title='Trabalhos' subtitle='Verifique quais sao as tarefas para o momento' />

      <section className="bg-slate-200 rounded-lg grid grid-cols-3 grid-flow-col p-3">
        <WorkCard />
      </section>
    </div>
  );
}