export interface Expense {
    id: number;
    name: string;
    value: number;
}

export async function fetchExpenses(): Promise<Expense[] | null> {
    try {
        const response = await fetch('http://localhost:8000/api/expense');
        if(!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: Expense[] = await response.json();
        return data;
    } catch (error) {
        console.log("Failed to fetch expenses: ", error);
        return null;
    }
}