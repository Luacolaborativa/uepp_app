import FinanceCard from "../components/FinanceCard";
import ContentHeader from "../components/ContentHeader";

// app/finance/page.tsx
export default async function FinancePage() {
    return (
      <div>

        <ContentHeader title='Finanças' subtitle='Acompanhe suas finanças pessoais aqui'/>

        <section className="bg-slate-200 rounded-lg grid grid-cols-3 grid-flow-col p-3">
            <FinanceCard />
        </section>
      </div>
    );
  }
  