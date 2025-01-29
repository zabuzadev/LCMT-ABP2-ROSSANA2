import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export const aulas = [
    {
        title: 'Fazendeiro de Sucesso #1',
        description: 'Aula 1 - Como começar uma fazenda do zero e ter sucesso',
        date: '28/01 às 19h',
        link: 'https://www.youtube.com/embed/7vYy---IJK0'
    },
    {
        title: 'Em breve - Fazendeiro de Sucesso #2',
        description: 'Aula 2 - Avançando na gestão da fazenda',
        date: '29/01 às 19h',
        link: 'https://www.youtube.com/embed/IlVw0RBrFMw'
    },
    {
        title: 'Em breve - Fazendeiro de Sucesso #3',
        description: 'Aula 3 - Como otimizar a produção na fazenda',
        date: '30/01 às 19h',
        link: ''
    }
];

type CronogramaProps = {
    selectedLink: string;
    setSelectedLink: (link: string) => void;
};

export default function Cronograma({ selectedLink, setSelectedLink }: CronogramaProps) {
    const [viewedVideos, setViewedVideos] = useState<string[]>([]);
    const defaultLink = aulas[0].link;

    useEffect(() => {
        const storedLink = localStorage.getItem('selectedLink');
        if (storedLink) {
            setSelectedLink(storedLink);
        } else {
            setSelectedLink(defaultLink);
            localStorage.setItem('selectedLink', defaultLink);
        }

        const viewed = localStorage.getItem('viewedVideos');
        if (viewed) {
            setViewedVideos(JSON.parse(viewed));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('viewedVideos', JSON.stringify(viewedVideos));
    }, [viewedVideos]);

    const handleVideoClick = (link: string, isAvailable: boolean) => {
        if (isAvailable) {
            const videoID = getYouTubeID(link);
            const fullLink = `https://www.youtube.com/embed/${videoID}`;
            setSelectedLink(fullLink);
            localStorage.setItem('selectedLink', fullLink);
            setViewedVideos(prev => [...prev, link]);
        }
    };

    const getAvailableStatus = (aulaDate: string): boolean => {
        const [day, month, time] = aulaDate.match(/(\d{2})\/(\d{2}) às (\d{2})h/)?.slice(1) || [];
        const aulaDateTime = new Date();
        aulaDateTime.setDate(parseInt(day));
        aulaDateTime.setMonth(parseInt(month) - 1);
        aulaDateTime.setHours(parseInt(time));
        aulaDateTime.setMinutes(0);
        return new Date() >= aulaDateTime;
    };

    const getFutureStatus = (aulaDate: string): boolean => {
        const [day, month, time] = aulaDate.match(/(\d{2})\/(\d{2}) às (\d{2})h/)?.slice(1) || [];
        const aulaDateTime = new Date();
        aulaDateTime.setDate(parseInt(day));
        aulaDateTime.setMonth(parseInt(month) - 1);
        aulaDateTime.setHours(parseInt(time));
        aulaDateTime.setMinutes(0);
        return new Date() < aulaDateTime;
    };

    return (
        <div className="p-6 rounded-lg w-full md:w-[650px] border-2 border-secondary bg-zinc-900 flex flex-col gap-4 justify-center items-center">
            <h4 className="text-white text-lg font-bold mb-4">CRONOGRAMA DE AULAS</h4>

            <ScrollArea className="h-[400px]">
                {aulas.map((aula, index) => {
                    const isAvailable = getAvailableStatus(aula.date);
                    const isViewed = viewedVideos.includes(aula.link);
                    const isUpcoming = getFutureStatus(aula.date);
                    const isSelected = selectedLink === `https://www.youtube.com/embed/${getYouTubeID(aula.link)}`;

                    return (
                        <div
                            key={index}
                            className={`flex justify-center items-center p-4 mb-4 rounded-lg gap-2 bg-zinc-950 hover:bg-zinc-800 cursor-pointer 
                            ${isAvailable ? '' : 'opacity-50 cursor-not-allowed'} 
                            ${isSelected ? 'bg-gray-950' : ''}`}
                            onClick={() => handleVideoClick(aula.link, isAvailable)}
                        >
                            <img
                                src={index === 2 ? "/images/logo.webp" : `https://img.youtube.com/vi/${getYouTubeID(aula.link)}/hqdefault.jpg`}
                                alt="Thumb"
                                className="w-24 h-16 rounded-lg"
                            />
                            <div className="flex flex-col gap-2">
                                <h5 className="text-quaternary text-base font-bold flex items-center">
                                    {aula.title}
                                    {isViewed ? (
                                        <Badge className="ml-2 bg-green-500 text-white">Visto</Badge>
                                    ) : (
                                        isAvailable ? (
                                            <Badge className="ml-2 bg-blue-500 text-white">Novo</Badge>
                                        ) : (
                                            isUpcoming && <Badge className="ml-2 bg-yellow-500 text-white">Em breve</Badge>
                                        )
                                    )}
                                </h5>
                                <p className="text-white text-sm">{aula.description}</p>
                                <p className="text-quaternary text-sm">{aula.date}</p>
                            </div>
                        </div>
                    );
                })}
            </ScrollArea>
        </div>
    );
}

// Função auxiliar para extrair o ID do YouTube
function getYouTubeID(url: string): string {
    const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : '';
}
