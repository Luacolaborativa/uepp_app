import { Expense } from '../../finances/types';

export async function getExpenses(): Promise<Expense[] | 0> {
    try {
        const response = await fetch(`/api/expense`);
        
        if (!response.ok) {
            return 0;
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return 0;
    }
}