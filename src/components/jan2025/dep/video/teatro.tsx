"use client"
import Link from "next/link";
import Cronograma, { aulas } from "./ui/cronograma";
import { BsWhatsapp } from "react-icons/bs";
import VideoPlayer from "./ui/videoPlayer";
import Quiz from "../quiz";
import { useState, useEffect } from "react";

export default function Teatro() {
    const [selectedLink, setSelectedLink] = useState('');

    useEffect(() => {
        const storedLink = localStorage.getItem('selectedLink');
        if (storedLink) {
            setSelectedLink(storedLink);
        } else {
            const firstAvailable = aulas.find(aula => {
                const [day, month, time] = aula.date.match(/(\d{2})\/(\d{2}) às (\d{2})h/)?.slice(1) || [];
                const aulaDateTime = new Date();
                aulaDateTime.setDate(parseInt(day));
                aulaDateTime.setMonth(parseInt(month) - 1);
                aulaDateTime.setHours(parseInt(time));
                aulaDateTime.setMinutes(0);
                return new Date() >= aulaDateTime;
            });
            if (firstAvailable) {
                const embedLink = `https://www.youtube.com/embed/${getYouTubeID(firstAvailable.link)}`;
                setSelectedLink(embedLink);
            }
        }
    }, []);

    useEffect(() => {
        if (selectedLink) {
            localStorage.setItem('selectedLink', selectedLink);
        }
    }, [selectedLink]);

    return (
        <div className="container mx-auto py-4 max-w-6xl px-4">
            <h1 className="text-white text-lg font-bold mb-12 text-center">
                Até lá, veja como as
                <span className="text-secondary"> estratégias que aplicamos </span>
                na Fazenda África funcionam de fato…
            </h1>

            <div className="flex flex-col md:flex-row justify-center gap-2 items-center">

                <VideoPlayer link={selectedLink} />

                <Cronograma selectedLink={selectedLink} setSelectedLink={setSelectedLink} />

            </div>

            <div className="flex flex-col gap-4 text-gray-200 text-base  leading-[1.6] mt-8">
                <p>
                    O
                    <span className="text-secondary"> Abrindo a Porteira </span>
                    é um evento exclusivo para revelarmos o que fez a Fazenda África se tornar referência na área. Para saber
                    <span className="text-secondary"> como ter resultados </span>
                    como nossos amigos fazendeiros acima,
                    <span className="text-secondary"> entre agora mesmo </span>
                    para o grupo exclusivo do WhatsApp.
                </p>

                <Link href="https://chat.whatsapp.com/FxycvbE3jN3B7QLxdyyGSc"
                    about="Abrir WhatsApp"
                    className="bg-quaternary hover:bg-[#15468F] text-zinc-950 hover:text-white text-base py-4 px-6 rounded-xl shadow-xl transition-all w-full md:w-fit text-center"
                >
                    <BsWhatsapp
                        width={24}
                        height={24}
                        className="inline-block mr-2"
                    />
                    Entrar no grupo de WhatsApp
                </Link>

                <p>
                    <span className="text-secondary">Ainda não fez o quizz para descobrir como está sua fazenda? </span>
                    Responda o check-in abaixo para liberar seu acesso: 
                </p>

                {/* Quiz */}
                <Quiz />
            </div>
        </div>
    )
}

function getYouTubeID(link: string) {
    const url = new URL(link);
    return url.searchParams.get('v');
}
