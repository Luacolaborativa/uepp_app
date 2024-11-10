import ContentHeader from "./components/ContentHeader";
import DashboardCard from "./dashboards/DashboardCard";

// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <ContentHeader title='Bem-vindo à página inicial!' subtitle='' />
      <section className="bg-slate-200 rounded-lg grid grid-cols-3 grid-flow-col p-3">
        <DashboardCard />
      </section>
    </div>
  );
}