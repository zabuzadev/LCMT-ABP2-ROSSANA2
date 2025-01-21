"use client"

import { HeroSection } from "@/components/jan2025/captura/hero/hero"
import { ResultsSection } from "@/components/jan2025/captura/section2"
import { FeaturesGrid } from "@/components/jan2025/captura/section3"
import { Timeline } from "@/components/jan2025/captura/section4"
import { Professors } from "@/components/jan2025/captura/section5"
import { Awards } from "@/components/jan2025/captura/section6"

export default function AbrindoAPorteirav1() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        webhookLink="https://n8n.aesmkt.com.br/webhook/lzto-ap-fev25-ads"
        title="O que fez a Fazenda África se tornar uma das maiores referências de agronegócio no Piauí?"
        subtitle={
          <>
            Vamos revelar
            <span className="text-green-500"> 5 estratégias essenciais </span>
            para estruturar uma fazenda do zero e garantir resultados impressionantes.
          </>
        }
      />
      <ResultsSection />
      <FeaturesGrid />
      <Timeline />
      <Professors />
      <Awards />
    </main>
  )
}

