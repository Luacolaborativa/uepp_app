import React, { useEffect, useState } from "react";
import { fetchExpenses, Expense } from "./api";
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const Expenses = (): JSX.Element => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const getExpenses = async () => {
      const data = await fetchExpenses();
      if (data) {
        setExpenses(data);
      }
    };
    getExpenses();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-slate-600">
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-${expense.id}`}
                      type="checkbox"
                      className="w-3 h-3 text-slate-600 border-slate-300 rounded focus:ring-slate-500 focus:ring-2"
                    />
                    <label htmlFor={`checkbox-table-${expense.id}`} className="sr-only">checkbox</label>
                  </div>
                </td>
                <td>
                  {expense.name} 
                </td>
                <td>R$ {expense.value}</td>
                <td>
                  <Cog6ToothIcon className='size-4'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;
