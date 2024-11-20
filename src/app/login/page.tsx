import { auth } from "@/app/auth";
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";


export default async function PageLogin() {
    let session = await auth();

    return (
        <>
            <main className="h-[100vh] bg-background bg-cover text-slate-100 flex">
                <section id='hero-page' className="flex-1 place-content-around h-full flex flex-col py-10 px-10">
                    <div className="logo">
                        <h2 className="text-2xl">UéPP</h2>
                    </div>

                    <div className="call-to-action">
                        <h3 className="text-5xl">Aplicação Financeira</h3>
                        <hr className="w-[20%] border-2 my-4" />
                    </div>

                    <footer>
                        <h4 className="text-xl">Que te ajuda a se organizar como deve ser feito!</h4>
                        <p className='mt-1 mb-4'>Conheça nossos serviços ainda hoje e nos ajude a construir um lugar de segurança para nossas finanças.</p>
                        <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Faça parte</button>

                    </footer>
                </section>

                <section id='logged-page' className="flex-1 flex justify-center">

                    <div className="bg-indigo-200/40 p-10 inline-block self-center place-content-center text-center w-[60%] h-[60vh] rounded">
                        <hr className="w-[20%] border-2 my-1" />
                        <h3 className="text-4xl text-left mb-5">Se conecte</h3>
                        <p className="text-left my-3">Faça login com sua rede social favorita, é simples e intuitivo.</p>
                        {!session ? <SignIn />: (<SignOut>{`Welcome ${session.user?.name} `}</SignOut>)}

                    </div>

                </section>

            </main>
        </>
    );
}