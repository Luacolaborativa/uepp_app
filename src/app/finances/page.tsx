import FinanceCard from "../components/FinanceCard";

// app/finance/page.tsx
export default async function FinancePage() {
  

    return (
      <div>
        <h1>Finanças</h1>
        
        <p>Acompanhe suas finanças pessoais aqui.</p>
        <section className="bg-slate-300 grid grid-cols-3 grid-flow-col">
            <FinanceCard />
        </section>
      </div>
    );
  }
  