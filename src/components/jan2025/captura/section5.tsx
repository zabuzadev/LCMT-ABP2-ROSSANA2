import Image from "next/image"

export function Professors() {
  return (
    <div className="container mx-auto py-16 max-w-4xl px-4">
      <h2 className="text-center text-2xl font-bold mb-12">
        Conheça seus professores
      </h2>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-center items-center bg-green-50">
          <Image
            src="/images/quem_1.webp"
            alt="Rossana e Ricardo"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className=" p-6 rounded-lg max-w-xl">
            <h3 className="text-xl font-bold mb-4">Rossana e Ricardo</h3>
            <p>São casados há 17 anos, são os filhos e sócios na Fazenda África. Juntos, após muitos anos de erros, estruturaram de zero uma fazenda que hoje, funciona com a presença deles no local.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center bg-green-50">
          <div className=" p-6 rounded-lg  max-w-xl">
            <h3 className="text-xl font-bold mb-4">Rossana About:</h3>
            <p>Líder no agronegócio, formada no agro. Rossana é formada em Direito e hoje, é a responsável pela comunicação, marketing e gestão da Fazenda África. Trilhou seu próprio desenvolvimento profissional em diversos países como Índia, Angola, Moçambique, África do Sul e América Central.</p>
          </div>
          <Image
            src="/images/quem_3.webp"
            alt="Rossana"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center bg-green-50">
          <Image
            src="/images/quem_2.webp"
            alt="Ricardo"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className=" p-6 rounded-lg max-w-xl ">
            <h3 className="text-xl font-bold mb-4">Ricardo About:</h3>
            <p>Gestor zootecnista com mais de 30 anos de experiência profissional. Ricardo possui 3 fazendas. Cria, recria gado de corte. Já trabalhou em grandes empresas do setor como Nutripharma, Bayer Hughes e JF, em 14 países diferentes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

