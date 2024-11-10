import React from 'react';

interface FinancialSummaryProps {
  totalAmount: number;
  totalUnpaid: number;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ totalAmount, totalUnpaid }) => {
  return (
    <div className="bg-sky-200 flex justify-between items-center align-middle">
      <div className="flex justify-between items-center gap-2">
        <span className="text-sm">Total de despesas:</span>
        <span className="text-sm font-bold">R$ {totalAmount}</span>
      </div>
      <div className="flex justify-between items-center gap-2">
        <span className="text-sm text-red-500">Ainda a pagar:</span>
        <span className="text-sm font-bold text-red-500">R$ {totalUnpaid}</span>
      </div>
    </div>
  );
};

export default FinancialSummary;