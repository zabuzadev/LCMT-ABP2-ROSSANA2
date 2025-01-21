import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Form from "./form"

interface HeroSectionProps {
    title: React.ReactNode;
    subtitle:  React.ReactNode;
    showPhone?: boolean;
    webhookLink: string;
}

export function HeroSection({ title, subtitle, showPhone = true, webhookLink }: HeroSectionProps) {
  return (
<section className="relative bg-[url('/images/heroBg.webp')] bg-zinc-950 h-full md:h-[49em] flex items-center justify-center p-4 pb-0 rounded-bl-[3em] rounded-br-[3em]" id="hero">
    <div className="absolute hidden md:block z-10 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary to-transparent rounded-bl-[3em] rounded-br-[3em]"></div>

    <div className="container mx-auto flex justify-center md:justify-start items-center md:items-start flex-wrap md:flex-nowrap  gap-4 w-full">
        <div className="z-10 flex justify-center items-start flex-col gap-4 md:gap-8 rounded-3xl max-w-[600px] w-full place-self-start">
            <Image src="/images/logo.webp" alt="logo" width={208} height={64} className="w-52 h-16" />
            <div className="flex justify-center items-start flex-col p-4 rounded-3xl max-w-[600px] w-full bg-white/10">
                <h1 className="text-white text-2xl font-bold mb-4">
                    {title}
                </h1>
                <span className="text-white text-base border-white border-l-2 ps-3">
                    {subtitle}
                </span>

                <p className="text-white text-base mt-4">
                    É a oportunidade de você conquistar uma fazenda que te dá dinheiro, sem que você fique o tempo inteiro debaixo do sol trabalhando.
                </p>

                <p className="text-white text-base mt-4">
                    📅 04/02, terça-feira | ⏰ 19h | 👉🏻 Online, ao vivo e gratuito
                </p>

                <Form 
                    showPhone={showPhone}
                    webhookLink={webhookLink}
                    />

                <p className="text-white text-xs mt-2">
                    Evento exclusivo, com vagas limitadas.
                </p>
            </div>
        </div>

        <Image src="/images/agradecimentos.webp" alt="olhando para o lado" width={560} height={800} className="z-0 w-[15em] h-[20em] md:w-[23em] lg:w-[30em] xl:w-[35em] md:h-auto mt:ms-4 lg:ms-24 mt-0 md:mt-16 self-end" />
    </div>
</section>
  )
}

