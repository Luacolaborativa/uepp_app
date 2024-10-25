import React from 'react';
import ExpenseItem from './ExpenseItem'
import { Expense } from './types';

interface ExpenseListProps {
  expenses: Expense[];
  togglePaymentStatus: (id: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, togglePaymentStatus }) => {
  return (
    <ul className="space-y-2 mb-14">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} togglePaymentStatus={togglePaymentStatus} />
      ))}
    </ul>
  );
};

export default ExpenseList;