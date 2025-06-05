import { Battery, Camera, Smartphone, Volume2, Wifi, Zap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const services = [
	{
		id: 1,
		icon: Smartphone,
		title: "Troca de Tela",
		description: "Displays LCD, OLED e AMOLED para todos os modelos Samsung, Apple e Motorola",
		color: "from-entercell-red to-entercell-orange"
	},
	{
		id: 2,
		icon: Battery,
		title: "Troca de Bateria",
		description: "Baterias originais certificadas com 1 ano de garantia",
		color: "from-entercell-yellow to-entercell-orange"
	},
	{
		id: 3,
		icon: Camera,
		title: "Reparo de Câmera",
		description: "Câmeras frontais e traseiras de alta qualidade originais",
		color: "from-entercell-orange to-entercell-red"
	},
	{
		id: 4,
		icon: Volume2,
		title: "Alto-falante",
		description: "Reparo de áudio e microfone com peças originais",
		color: "from-entercell-red to-entercell-yellow"
	},
	{
		id: 5,
		icon: Zap,
		title: "Conector de Carga",
		description: "Reparo de entrada USB e carregamento - peças originais",
		color: "from-entercell-orange to-entercell-yellow"
	},
	{
		id: 6,
		icon: Wifi,
		title: "Problemas de Conectividade",
		description: "Wi-Fi, Bluetooth e dados móveis - componentes originais",
		color: "from-entercell-yellow to-entercell-red"
	}
]

const ServicesSection = () => (
	<section id="services" className="py-20 bg-white">
		<div className="container mx-auto px-4">
			<div className="text-center mb-16 animate-fade-in">
				<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto">
					Oferecemos soluções completas para todos os tipos de problemas em smartphones, com peças originais Samsung, Apple e Motorola e garantia estendida.
				</p>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service) => (
					<Card
						key={service.id}
						className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
						style={{ animationDelay: `${service.id * 0.1}s` }}
					>
						<CardContent className="p-6 space-y-4">
							<div
								className={`bg-gradient-to-br ${service.color} p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
							>
								<service.icon className="h-8 w-8 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
								<p className="text-gray-600 mb-3">{service.description}</p>
								<p className="text-lg font-bold bg-gradient-to-r from-entercell-red to-entercell-orange bg-clip-text text-transparent">
									Solicite seu orçamento
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	</section>
)

export { ServicesSection }
