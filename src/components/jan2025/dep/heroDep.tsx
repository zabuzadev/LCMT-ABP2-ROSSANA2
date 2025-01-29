import Image from "next/image";

export default function DepHero() {
  return (
    <section className="bg-[url('/images/dep/bg.png')] h-full flex flex-col items-center justify-center p-4 pt-10" id="hero">
      <Image src="/images/logo.webp" alt="logo" width={300} height={250} />
      <div className="bg-zinc-50 bg-opacity-90 py-3 px-6 rounded-3xl shadow-lg text-center">
        100% GRATUITO
      </div>

      <p className="text-white text-lg font-base mt-4 text-center max-w-3xl">
        A partir do dia 4 de fevereiro, a sua fazenda nunca mais será a mesma! Você vai descobrir de vez como 
        <span className="text-secondary"> aumentar a produtividade </span>
        do gado e ter 
        <span className="text-secondary"> mais lucro o ano inteiro.</span>
        Não importa o tamanho da sua fazenda. Não importa há quanto tempo você está nesse negócio. 
        É chegada a 
        <span className="text-secondary"> hora de se atualizar </span>
        e estruturar sua fazenda 
        <span className="text-secondary"> do jeito certo!</span>
      </p>
    </section>
  );
}