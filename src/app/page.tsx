import { ReactNode } from "react";
import GlobalLayout from "./components/GlobalLayout";
import PageLogin from "./login/page";
import { auth } from "@/app/auth";

export default async function Page({ children }: {children: ReactNode}) {
  
  let session = await auth();
  
  return !session 
    ? <PageLogin /> 
    : <GlobalLayout>{children}</GlobalLayout>;
}