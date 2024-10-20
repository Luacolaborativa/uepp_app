const API_BASE_URL = 'https://api.vercel.app';

export async function fetchData() {
    const response = await fetch(`/api/expense`);
    console.log(response);
    return await response.json();
}