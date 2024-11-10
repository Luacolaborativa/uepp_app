import ContentHeader from "../components/ContentHeader";
import StudieCard from "./studieCard";

export default function WorksPage() {
  return (
    <div>
      <ContentHeader title='Estudos' subtitle='Verifique o que precisa ser estudado' />
      <section className="bg-slate-200 rounded-lg grid grid-cols-3 grid-flow-col p-3">
        <StudieCard />
      </section>
    </div>
  );
}