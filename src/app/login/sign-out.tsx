import { signOut } from "@/app/auth";


export function SignOut({children} : {children: React.ReactNode }) {
    return (
      <form action = { async () => {
        'use server';
        await signOut();
      }}>
        <p>{children}</p>
        <button type="submit"> Sign Out</button>
      </form>
    );
}