// src/components/Finance/FinanceOverview.js
import React, { useState } from 'react';

const FinanceOverview = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Aluguel', amount: -1500 },
    { id: 2, name: 'Salário', amount: 3000 },
    { id: 3, name: 'Mercado', amount: -400 },
  ]);

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div>
      <h2>Resumo Financeiro</h2>
      <p>Saldo Atual: R$ {calculateBalance().toFixed(2)}</p>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.name}: R$ {transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinanceOverview;
