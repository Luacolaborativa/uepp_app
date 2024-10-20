import FinanceCard from "../components/FinanceCard";
import ContentHeader from "../components/ContentHeader";

// app/finance/page.tsx
export default async function FinancePage() {
    return (
      <div>
        
        <ContentHeader title='Finança' subtitle='Acompanhe suas finanças pessoais aqui.'/>

        <section className="bg-slate-300 grid grid-cols-3 grid-flow-col">
            <FinanceCard />
        </section>
      </div>
    );
  }
  