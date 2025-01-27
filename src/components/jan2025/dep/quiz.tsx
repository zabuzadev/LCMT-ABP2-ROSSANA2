"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Skeleton } from "@/components/ui/skeleton"


import * as React from "react"
import { Button } from "@/components/ui/button"

const link = "https://view.aesmkt.com.br/fazenda-africa"

export default function Quiz() {
    const [open, setOpen] = React.useState(false)

    const isDesktop = useMediaQuery("(min-width: 768px)")

  
   
    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-quaternary text-wrap hover:bg-[#15468F] text-zinc-950 hover:text-white text-base py-6 px-6 rounded-xl shadow-xl transition-all w-full md:w-auto max-w-lg text-center">
              Quero descobrir em qual estágio está minha fazenda
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-[#598e71]">
            <DialogClose className="absolute top-4 right-4 text-white" />
            <DialogTitle className="text-center text-white font-bold hidden">
              Descubra em qual estágio está sua fazenda
            </DialogTitle>


              <ProfileForm />


          </DialogContent>
        </Dialog>
      )
    }
   
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
            <Button className="bg-quaternary text-wrap h-auto hover:bg-[#15468F] text-zinc-950 hover:text-white text-base py-6 px-6 rounded-xl shadow-xl transition-all w-full md:w-auto max-w-lg text-center">
            Quero descobrir em qual estágio está minha fazenda
            </Button>
        </DrawerTrigger>
        <DrawerContent className="px-4 bg-[#598e71]">
          <DrawerTitle className="text-center text-white font-bold hidden">
            Descubra em qual estágio está sua fazenda
          </DrawerTitle>
          
          <ProfileForm  />

        </DrawerContent>
      </Drawer>
    )
  }
   
  function ProfileForm({ className }: React.ComponentProps<"form">) {
    const [loading, setLoading] = React.useState(true)

      React.useEffect(() => {
        setLoading(true)
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, [])

    return (
      <>
      {loading ? (
        <Skeleton className="w-full h-[500px] flex items-center justify-center">
          carregando...
        </Skeleton>

      ) : (
        <iframe 
        src={link}
        className="w-full h-[500px] border-none bg-[#598e71]"
        title="Quiz"
        ></iframe>
      )}
      </>
      
    )
  }
function useMediaQuery(query: string) {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        media.addEventListener("change", listener);
        setMatches(media.matches);

        return () => {
            media.removeEventListener("change", listener);
        };
    }, [query]);

    return matches;
}



