import { signOut } from "@/app/auth";
import { PowerIcon } from "@heroicons/react/24/outline";


export function SignOut() {
    return (
      <form action = { async () => {
        'use server';
        await signOut();
      }}>
        <button type="submit" className="px-3 py-2 text-xs font-medium text-center text-white bg-slate-700 rounded hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-500 flex-row flex gap-3 uppercase items-center">
          <PowerIcon className='size-4'/>
          logout
        </button>
      </form>
    );
}