"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/abrindoaporteira-org");
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-zinc-950">
      
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo.webp"
          alt="Capa do vídeo"
          width={1920}
          height={720}
          objectFit="cover"
          className="rounded-lg w-full h-full"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-center text-white">
          Redirecionando ...
        </h1>
      </div>
    </div>
  );
}
