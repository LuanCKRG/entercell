import { Smartphone, BatteryFull, Droplets, Zap, Unlock } from "lucide-react"

import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"

const serviceCardsArray = [
	{
		id: 1,
		title: "Troca de Tela",
		text: "Substituição profissional de telas quebradas com displays originais. Garantia de 90 dias e proteção contra poeira na instalação.",
		icon: Smartphone
	},
	{
		id: 2,
		title: "Substituição de Bateria",
		text: "Baterias novas com máxima autonomia. Elimine desligamentos inesperados e recupere a carga completa do seu aparelho.",
		icon: BatteryFull
	},
	{
		id: 3,
		title: "Reparo por Danos de Água",
		text: "Limpeza ultrassônica e substituição de componentes afetados. Procedimento emergencial para salvar seu dispositivo após contato com líquidos.",
		icon: Droplets
	},
	{
		id: 4,
		title: "Troca de Conector de Carga",
		text: "Reparo especializado para problemas de carregamento. Substituição de portas USB-C, Lightning e micro-USB em 30 minutos.",
		icon: Zap
	},
	{
		id: 5,
		title: "Desbloqueio e Correção de Software",
		text: "Remoção de FRP, contas Google bloqueadas e vírus. Atualização de sistemas operacionais para melhor desempenho.",
		icon: Unlock
	}
]

export const ServicesSection = () => (
	<section className="bg-gradient-to-br from-[#FA4529] to-[#F2FF29]">
		<div className="p-2 md:p-8 flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-6">
			{serviceCardsArray.map(({ icon: Icon, ...service }) => (
				<Card key={service.id} className="md:nth-4:translate-x-1/2 md:nth-5:translate-x-1/2 gap-3 hover:scale-105 transition-transform duration-300">
					<CardHeader className="gap-y-2">
						<div className="mx-auto">
							<Icon className="size-10 text-[#fcd20b]" />
						</div>
						<CardTitle className="text-center uppercase underline decoration-[#fcd20b] decoration-2">{service.title}</CardTitle>
					</CardHeader>

					<CardDescription className="p-4 text-white">{service.text}</CardDescription>
				</Card>
			))}
		</div>
	</section>
)
