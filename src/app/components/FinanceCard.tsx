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
    <div className="p-4">
      {/* Card da lista de despesas */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Despesas Mensais</h2>
        <ul className="space-y-4">
          {expenses.map((expense) => (
            <li key={expense.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={expense.isPaid}
                  onChange={() => togglePaymentStatus(expense.id)}
                  className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <div>
                  <span className="font-semibold">{expense.name}</span>
                  <span className="ml-2 text-gray-500 text-sm">({expense.category})</span>
                </div>
              </div>
              <span className="text-lg font-bold">R$ {expense.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card do resumo financeiro */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Resumo Financeiro</h2>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total de despesas:</span>
          <span className="text-lg font-bold">R$ {totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-semibold text-red-500">Ainda a pagar:</span>
          <span className="text-lg font-bold text-red-500">R$ {totalUnpaid.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default FinanceCard;
