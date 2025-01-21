import Image from "next/image";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type VideoPlayerProps = {
    link: string;
};

export default function VideoPlayer({ link }: VideoPlayerProps) {
    const [isLoading, setIsLoading] = useState(true);


    if (!link) {
        return (
            <div className="w-full aspect-video">
                <Image
                    src="/images/dep/cover.png"
                    alt="Capa do vídeo"
                    width={1920}
                    height={720}
                    objectFit="cover"
                    className="rounded-lg w-full h-full"

                />
            </div>
        );
    } else {
        return (
            <div className="w-full aspect-video">
                {isLoading && <Skeleton className="rounded-lg h-full w-full flex justify-center items-center text-white font-bold" > Carregando...</Skeleton>}
                    <iframe
                        src={link}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className={`w-full h-full rounded-lg ${isLoading ? "hidden" : ""}`}
                        allowFullScreen
                        onLoad={() => setIsLoading(false)}
                    />
            </div>
        );
    }


}