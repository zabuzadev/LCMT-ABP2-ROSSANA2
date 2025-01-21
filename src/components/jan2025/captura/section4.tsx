import { ChartLine, Timer, User, Users, Wheat } from "lucide-react";
import Image from "next/image";

export function Timeline() {
    return (
      <div className="container mx-auto py-16  bg-primary rounded-3xl p-4">
        <h2 className="text-center text-2xl font-bold mb-12 text-white">
          Em UMA HORA de aula, você vai descobrir estratégias que vão mudar sua fazenda para sempre:
        </h2>
        <div className="flex flex-col gap-9 md:gap-4">
                    <div className="flex flex-wrap justify-center items-center gap-0 md:gap-4 relative">
                        <span className="text-white absolute -top-7 flex md:hidden justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                            <Image
                            width={28}
                            height={28}
                            src="/images/icone/cowverde.svg" alt="icone vaca" className="text-"/>
                        </span>
                        <span className="text-white md:flex hidden justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                            <Image
                            width={28}
                            height={28}
                            src="/images/icone/cowverde.svg" alt="icone vaca" className="text-"/>
                        </span>
                        <p className="text-primary text-md bg-white p-4 rounded-3xl w-full max-w-[600px]">
                            Como garantir alimento de qualidade o ano inteiro para o seu gado.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:flex-row-reverse justify-center items-center gap-0 md:gap-4 relative">
                        <span className="text-white hidden md:flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                            <ChartLine size={28}  className="text-primary"/>
                        </span>
                        <span className="text-white md:hidden absolute -top-7 flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                          <ChartLine size={28} className="text-primary"/>
                        </span>
                        <p className="text-primary text-md bg-white p-4 rounded-3xl w-full max-w-[600px]">
                            A estratégia fundamental (que poucos utilizam) para aumentar a 
                            produtividade e reduzir custos da produção animal.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-0 md:gap-4 relative">
                        <span className="text-white hidden md:flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                            
                            <Users size={28} className="text-primary"/>
                        </span>
                        <span className="text-white md:hidden absolute -top-7 flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                        <Users size={28} className="text-primary"/>
                        </span>
                        <p className="text-primary text-md bg-white p-4 rounded-3xl w-full max-w-[600px]">
                            O que fazer para ter uma equipe engajada no sucesso da sua fazenda.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:flex-row-reverse justify-center items-center gap-0 md:gap-4 relative">
                        <span className="text-white hidden md:flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                            
                            <Timer size={28} className="text-primary"/>
                        </span>
                        <span className="text-white md:hidden absolute -top-7 flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                          <Timer size={28} className="text-primary"/>
                        </span>
                        <p className="text-primary text-md bg-white p-4 rounded-3xl w-full max-w-[600px]">
                            Como economizar tempo e dinheiro estruturando sua fazenda do jeito certo.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-0 md:gap-4 relative">
                        <span className="text-white hidden md:flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                            
                            <Wheat size={28} className="text-primary"/>
                        </span>
                        <span className="text-white md:hidden absolute -top-7 flex justify-center items-center text-xl bg-white w-12 h-12 rounded-full">
                          <Wheat size={28} className="text-primary"/>
                        </span>
                        <p className="text-primary text-md bg-white p-4 rounded-3xl w-full max-w-[600px]">
                            Como ter mais estabilidade financeira e um plano de ação para 
                            reduzir imprevistos.
                        </p>
                    </div>

                </div>
      </div>
    )
  }
  
  