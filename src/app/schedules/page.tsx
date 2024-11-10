import ContentHeader from "../components/ContentHeader";
import ScheduleCard from "./scheduleCard";

export default function WorksPage() {
  return (
    <div>
      <ContentHeader title='Agendamentos' subtitle='Verifique qual a sua agenda' />
      <section className="bg-slate-200 rounded-lg grid grid-cols-3 grid-flow-col p-3">
        <ScheduleCard />
      </section>
    </div>
  );
}