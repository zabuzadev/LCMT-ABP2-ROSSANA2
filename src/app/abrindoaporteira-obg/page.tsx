import Image from "next/image";
import Script from "next/script";

export default function Obrigado() {
    return (
        <section className="relative bg-[url('/images/heroBg.webp')] bg-center bg-cover bg-no-repeat bg-zinc-950 h-full md:h-screen flex justify-center items-center md:items-end flex-col md:flex-row  pt-4" id="hero">
        <div className="absolute z-10 bottom-0 left-0 w-full h-1/6  bg-gradient-to-t from-primary to-transparent"></div>

        <div className="flex justify-center items-center flex-wrap md:flex-nowrap place-self-center">
            <div className="z-10 flex justify-center items-start flex-col gap-4 md:gap-8 p-4 md:p-8 rounded-3xl max-w-[600px] w-full ">
                <div className="flex justify-center items-start  flex-col p-4 rounded-3xl max-w-[600px] w-full bg-white/10">
                    <Image
                        width={280}
                        height={64}
                        src="/images/logo.webp" alt="logo" className="self-center"/>
                   
                    <div className="flex items-center justify-center w-full h-8 bg-white rounded-full overflow-hidden relative my-6">
                        <div className="absolute left-0 top-0 h-full bg-green-500 animate-none" id="progress-bar" style={{width: '0%', transition: 'width 5s'}}></div>
                        <span className="text-white font-bold z-10">Inscrição quase concluída</span>
                        <span className="text-black font-bold absolute right-2 z-10">83%</span>
                    </div>
                    <Script strategy="afterInteractive">
                      {`
                            setTimeout(function() {
                                document.getElementById('progress-bar').style.width = '83%';
                            }, 300);
                        `}
                    </Script>
                   

                    <h1 className="text-white text-2xl font-bold mb-4">Parabéns! Você acaba de dar um grande passo para transformar sua fazenda.</h1>
                    <span className="text-white">
                       
                        O <span className="text-green-500 font-bold">
                            Abrindo a Porteira
                        </span> é um evento exclusivo para revelarmos o que fez a Fazenda África se tornar referência na área, mesmo com 4 anos de existência.
                        Para finalizar sua participação, 
                        <span className="text-green-500 font-bold">
                            entre agora
                        </span>  mesmo para o   <span className="text-green-500 font-bold">
                            grupo exclusivo do WhatsApp.
                        </span> 
                    </span>

                    <a href="https://chat.whatsapp.com/FxycvbE3jN3B7QLxdyyGSc" className="text-white bg-secondary py-3 px-6 rounded-md mt-4 text-center hover:bg-green-500 w-full">
                        Quero fazer parte do grupo especial
                    </a>

                    <p className="text-white mt-4">
                        O grupo é a forma mais segura de garantir que 
                        <span className="text-green-500 font-bold">você receberá o link da aula e todos os materiais exclusivos que preparamos.</span>
                    </p>

                    <p className="text-white mt-4">
                        Fique tranquilo, o grupo é silencioso e seguro. Apenas nossa equipe vai mandar mensagem.

                    </p>
                </div>
            </div>

        </div>
        <Image
        width={560}
        height={800}
        src="/images/agradecimentos.webp"  alt="olhando para o lado"
        className="z-0 w-[15em] h-[20em] md:w-[23em] lg:w-[30em] xl:w-[35em] md:h-auto mt:ms-4 lg:ms-24 mt-0 md:mt-16 self-center md:self-end" 
        />
    </section> 
    )
}