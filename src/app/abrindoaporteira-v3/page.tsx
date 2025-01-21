"use client"

import { HeroSection } from "@/components/jan2025/captura/hero/hero"
import { ResultsSection } from "@/components/jan2025/captura/section2"
import { FeaturesGrid } from "@/components/jan2025/captura/section3"
import { Timeline } from "@/components/jan2025/captura/section4"
import { Professors } from "@/components/jan2025/captura/section5"
import { Awards } from "@/components/jan2025/captura/section6"

export default function AbrindoAPorteirav3() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title=" Descubra as 5 estratégias essenciais que todo produtor rural precisa conhecer para ter uma fazenda mais lucrativa."
                subtitle={
                    <>
                        Independente do tamanho da sua propriedade ou do tempo que você está nesse negócio, você terá
                        clareza de como transformar sua fazenda.
                    </>
                }
                showPhone={false}
                webhookLink="https://n8n.aesmkt.com.br/webhook/lzto-ap-fev25-ads"
            />
            <ResultsSection />
            <FeaturesGrid />
            <Timeline />
            <Professors />
            <Awards />
        </main>
    )
}

