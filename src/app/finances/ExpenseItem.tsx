import React from 'react';
import { Expense } from './types';

interface ExpenseItemProps {
  expense: Expense;
  togglePaymentStatus: (id: number) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, togglePaymentStatus }) => {
  return (
    <li className="flex items-center justify-between border-b pb-2">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={expense.isPaid}
          onChange={() => togglePaymentStatus(expense.id)}
          className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <div className='flex flex-col'>
          <span className="text-gray-500 text-xs">({expense.category_id})</span>
          <span className="font-semibold text-sm">{expense.name}</span>
          <span className="font-semibold text-sm">{expense.amount}</span>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;