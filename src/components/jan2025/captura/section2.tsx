import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ResultsSection() {
  return (
    <section>
        <div className="flex justify-center items-center flex-wrap-reverse mt-6 gap-2 p-4">
            <Image
                src="/images/81opt.webp"
                width={400}
                height={400}
                alt="olhando um para o outro com o gado pasando atras"
                className="w-full md:max-w-[25em] lg:max-w-[30em] md:h-[38em] lg:h-[40em] self-end object-cover rounded-md brightness-150"
            />
            <div className="flex justify-center flex-col rounded-xl w-full md:max-w-[25em] lg:max-w-[30em] md:h-[100%] lg:h-[40em] bg-tertiary p-6 shadow-xl">
                <h1 className="font-bold text-2xl mb-4">
                    Você trabalha duro, se dedica dia após dia, mas sente que os resultados não chegam?
                </h1>
                <div className="flex flex-col gap-2">
                    <p>
                        Já vimos isso acontecer com vários proprietários. Acontece que não adianta colocar a culpa na oscilação do preço da arroba, ou nos funcionários da fazenda.
                    </p>
                    <p>
                        Só o proprietário tem o poder de mudar os resultados da sua propriedade.
                    </p>
                    <p className="font-semibold">
                        Então você tem duas opções:
                    </p>
                    <ul className="list-decimal list-inside flex justify-center items-start flex-col md:flex-row gap-2">
                        <li className="mb-2 md:mb-0 w-full text-primary/80">
                            Insistir em fazer o que você já faz e continuar com os resultados que já tem.
                        </li>
                        <span className="w-2 h-32 bg-primary hidden md:block"></span>
                        <li className="w-full text-primary">
                            Se atualizar e descobrir técnicas inovadoras <span className="font-bold">(e simples!)</span> para aumentar a produtividade da sua fazenda.
                        </li>
                    </ul>
                    <p className="font-semibold">
                        Qual caminho você escolhe?
                    </p>
                </div>
                <a
                    href="#hero"
                    className="w-full max-w-80 text-center bg-[#2cce5a] hover:bg-green-600 text-xl text-white p-2 rounded-xl mt-4 border-b-2 border-emerald-600 hover:border-green-900"
                >
                    Quero crescer!
                </a>
            </div>
        </div>
    </section>
  )
}

