"use client"

import React, { useState } from 'react';

interface Expense {
  id: number;
  name: string;
  amount: number;
  category: string;
  isPaid: boolean;
}

const FinanceCard: React.FC = () => {
  // Lista inicial de despesas
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: 'Aluguel', amount: 1500, category: 'Casa', isPaid: false },
    { id: 2, name: 'Conta de Luz', amount: 200, category: 'Utilidades', isPaid: false },
    { id: 3, name: 'Supermercado', amount: 500, category: 'Alimentação', isPaid: false },
    { id: 4, name: 'Internet', amount: 100, category: 'Utilidades', isPaid: false },
  ]);

  // Função para alternar o status de pagamento
  const togglePaymentStatus = (id: number) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === id ? { ...expense, isPaid: !expense.isPaid } : expense
      )
    );
  };

  // Cálculo do total a pagar
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  // Cálculo do total ainda não pago
  const totalUnpaid = expenses
    .filter((expense) => !expense.isPaid)
    .reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="p-4 ">
      {/* Card da lista de despesas */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Despesas Mensais</h2>
        <ul className="space-y-2 mb-14">
          {expenses.map((expense) => (
            <li key={expense.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={expense.isPaid}
                  onChange={() => togglePaymentStatus(expense.id)}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <div className='flex flex-col'>
                  <span className="text-gray-500 text-xs">({expense.category})</span>
                  <span className="font-semibold text-sm">{expense.name}</span>
                </div>
              </div>
              <span className="text-sm font-bold">R$ {expense.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>

        {/* Card do resumo financeiro */}
        <div className="bg-sky-200 flex justify-between items-center align-middle">
          <div className="flex justify-between items-center gap-2">
            <span className="text-sm">Total de despesas:</span>
            <span className="text-sm font-bold">R$ {totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-sm text-red-500">Ainda a pagar:</span>
            <span className="text-sm font-bold text-red-500">R$ {totalUnpaid.toFixed(2)}</span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FinanceCard;
