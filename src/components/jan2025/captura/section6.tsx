import { Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Awards() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-center text-2xl font-bold mb-12">
        Prêmios que comprovam nossa excelência no agro:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
        <div className="flex flex-col items-center text-center">
          <Trophy className="h-12 w-12 text-green-500 mb-4" />
          <p>2º colocada Prêmio Fazenda Digital Brasil 2022</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Trophy className="h-12 w-12 text-green-500 mb-4" />
          <p>3º colocada Prêmio Mulheres Agro 2023</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Trophy className="h-12 w-12 text-green-500 mb-4" />
          <p>5º colocada Prêmio Fazenda Connect Brasil 2023</p>
        </div>
      </div>
      <div className="text-center">
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Quero começar!
        </Button>
      </div>
    </div>
  )
}

