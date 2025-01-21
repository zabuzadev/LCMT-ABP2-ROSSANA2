import { Tractor, Users, LineChart, MilkIcon as Cow } from 'lucide-react'
import Image from 'next/image'

export function FeaturesGrid() {
  return (
    <section className='p-4'>
        <div className="flex justify-center items-center flex-col max-w-[900px] mx-auto my-7">
            <h2 className="text-center text-xl md:text-4xl font-bold text-primary">
                Se você quer resultados melhores em 2025, este evento é para você:
            </h2>
        </div>

        <div className="container mx-auto flex justify-center items-center flex-col text-white">
            <div className="mx-6 bg-primary rounded-3xl w-full md:w-3/4 lg:w-full">
                <div className="flex justify-center items-center flex-wrap flex-col md:flex-row gap-10 md:gap-5 py-12 px-4">
                    <div className="flex text-center justify-start items-center md:text-start flex-col max-w-[200px] h-52 w-full">
                        <Image
                        width={96}
                        height={96}
                         src="/images/icone/homemDeChapel.svg" alt="icone de homem usando chapel de plha" className="w-24 h-24" />
                        <span className="text-md mt-3">
                            <span className="text-green-400">Produtor rural</span> que deseja ter uma fazenda lucrativa, independente do preço da arroba
                        </span>
                    </div>
                    <div className="h-0.5 w-full lg:w-0.5 lg:h-44 bg-gray-50"></div>
                    <div className="flex text-center justify-start items-center md:text-start flex-col max-w-[200px] h-52 w-full">
                        <Image
                        width={96}
                        height={96}
                         src="/images/icone/fazenda.svg" alt="icone de uma fazenda" className="w-24 h-24" />
                        <span className="text-md mt-3">
                            <span className="text-green-400">Interessado em investir no agro</span> e ter uma propriedade com estrutura para fazer dinheiro, sem estar 100% presente na fazenda.
                        </span>
                    </div>
                    <div className="h-0.5 w-full lg:w-0.5 lg:h-44 bg-gray-50"></div>
                    <div className="flex text-center justify-start items-center md:text-start flex-col max-w-[200px] h-52 w-full">
                        <Image
                        width={96}
                        height={96}
                         src="/images/icone/trator.svg" alt="icone de um trator" className="w-26 h-24" />
                        <span className="text-md mt-3">
                            <span className="text-green-400">Proprietários que estão cansados</span> de tantos imprevistos, de clima, tributação, logística… E querem mais previsibilidade nos ganhos.
                        </span>
                    </div>
                    <div className="h-0.5 w-full lg:w-0.5 lg:h-44 bg-gray-50"></div>
                    <div className="flex text-center justify-start items-center md:text-start flex-col max-w-[200px] h-52 w-full">
                        <Image
                        width={96}
                        height={96}
                         src="/images/icone/cow.svg" alt="icone de vaca" className="w-24 h-24" />
                        <span className="text-md mt-3">
                            <span className="text-green-400">Produtor rural, independente do tamanho da sua propriedade</span> e de quanto tempo você está nessa área.
                        </span>
                    </div>
                </div>
            </div>

            <a href="#hero" className="w-full md:w-80 text-center bg-secondary mb-4 hover:bg-green-600 text-xl text-white p-2 rounded-xl mt-12 border-b-2 border-emerald-600 hover:border-green-900">
                Quero participar →
            </a>
        </div>
    </section>
  )
}

