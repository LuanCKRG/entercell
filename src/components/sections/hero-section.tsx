import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const HeroSection = () => (
	<section className="p-8 grid grid-cols-2 py-20">
		<div className="flex flex-col justify-between">
			<div>
				<Button variant="outline" className="rounded-full border-border gap-x-1 w-fit group px-3 py-1 hover:border-[#fcd20b]" asChild>
					<a href="/">
						<span className="font-mono text-xs font-medium group-hover:text-[#fcd20b]">Peça seu orçamento grátis</span>
						<ArrowRight className="size-4 transition group-hover:translate-x-1 group-hover:text-[#fcd20b]" />
					</a>
				</Button>

				<h2 className="max-w-[580px] text-zinc-300 leading-tight text-[24px] md:text-[36px] font-medium">
					Conserto de celular <span className="underline font-bold text-white decoration-[#fcd20b]">rápido</span>,{" "}
					<span className="underline font-bold text-white decoration-[#fcd20b]">garantido</span> e com preço{" "}
					<span className="underline font-bold text-white decoration-[#fcd20b]">justo</span>!
				</h2>

				<p className="text-xs text-zinc-300 mt-4 font-mono">Reparos em até 1 hora</p>
			</div>

			<Button className="w-full h-11 hover:cursor-pointer uppercase font-bold bg-gradient-to-l from-[#FA4529] to-[#F2FF29]">Falar com especialista</Button>
		</div>

		<div className="flex justify-center items-center">
			<Image className="w-52" src="/logo_cell.svg" alt="" width={200} height={400} />
		</div>
	</section>
)
