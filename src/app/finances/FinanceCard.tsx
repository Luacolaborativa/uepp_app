"use client"

import React, { useState, useEffect } from 'react';
import { getExpenses } from '../services/finances/transaction';
import ExpenseList from './ExpenseList';
import FinancialSummary from './FinancialSummary';
import { Expense } from './types';

const FinanceCard: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const data = await getExpenses();
        
        if (data && data.length > 0) {
          setExpenses(data);
        }
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    }

    fetchExpenses();
  }, []);

  const togglePaymentStatus = (id: number) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, isPaid: !expense.isPaid } : expense
      )
    );
  };

  const totalAmount = expenses.length > 0 
    ? expenses.reduce((total, expense) => total + expense.amount, 0) 
    : 0;

  const totalUnpaid = expenses.length > 0 
    ? expenses
        .filter((expense) => !expense.isPaid)
        .reduce((total, expense) => total + expense.amount, 0) 
    : 0;

  return (
    <section>
      <div className="bg-white shadow-md rounded-lg p-5 mb-6">
        <h2 className="text-xl text-slate-800">Despesas Mensais</h2>
        {expenses.length === 0 ? (
          <p className="text-slate-600 my-2">Nenhuma despesa encontrada.</p>
        ) : (
          <section>
            <ExpenseList expenses={expenses} togglePaymentStatus={togglePaymentStatus} />
            <FinancialSummary totalAmount={totalAmount} totalUnpaid={totalUnpaid} />
          </section>
        )}
      </div>
    </section>
  );
};

export default FinanceCard;