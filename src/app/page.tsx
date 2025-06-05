import {
	Award,
	Battery,
	Camera,
	CheckCircle,
	Clock,
	Mail,
	MapPin,
	MessageCircle,
	Navigation,
	Phone,
	Quote,
	Shield,
	Smartphone,
	Star,
	Volume2,
	Wifi,
	Zap
} from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"

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

const testimonials = [
	{
		id: 1,
		name: "Maria Silva",
		rating: 5,
		comment: "Excelente atendimento! Trocaram a tela do meu iPhone em 30 minutos e deram 1 ano de garantia. Já faz 8 meses e está perfeita. Super recomendo!",
		service: "Troca de Tela - iPhone 13",
		date: "Há 2 semanas"
	},
	{
		id: 2,
		name: "João Santos",
		rating: 5,
		comment: "Meu Samsung estava com problema na bateria. Fizeram a troca rapidinho e o preço foi muito justo. A garantia de 1 ano me deu muita segurança.",
		service: "Troca de Bateria - Galaxy S21",
		date: "Há 1 mês"
	},
	{
		id: 3,
		name: "Ana Costa",
		rating: 5,
		comment: "Profissionais muito competentes! Explicaram todo o processo, mostraram a peça original e o aparelho ficou como novo. Atendimento nota 10!",
		service: "Reparo de Câmera - Xiaomi Mi 11",
		date: "Há 3 semanas"
	},
	{
		id: 4,
		name: "Carlos Oliveira",
		rating: 5,
		comment: "Quebrei a tela na sexta-feira e precisava urgente para o trabalho. Conseguiram resolver no mesmo dia! Qualidade impecável e preço honesto.",
		service: "Troca de Tela - Galaxy A52",
		date: "Há 1 semana"
	},
	{
		id: 5,
		name: "Fernanda Lima",
		rating: 5,
		comment: "Já levei 3 celulares aqui ao longo dos anos. Sempre um atendimento excepcional, peças de qualidade e nunca tive problemas. Confiança total!",
		service: "Cliente Fiel - Vários Reparos",
		date: "Há 5 dias"
	},
	{
		id: 6,
		name: "Roberto Machado",
		rating: 5,
		comment: "Meu celular caiu na água e achei que não tinha mais jeito. Eles conseguiram recuperar tudo! Trabalho incrível, realmente salvaram meus dados.",
		service: "Recuperação de Dados - Moto G9",
		date: "Há 2 meses"
	}
]

const Home = () => {
	return (
		<>
			<Header />

			<section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8 animate-fade-in">
							<div className="space-y-4">
								<Badge className="bg-gradient-to-r from-entercell-red to-entercell-orange text-white">⚡ Reparo Rápido e Confiável</Badge>
								<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
									Conserte seu
									<span className="bg-gradient-to-r from-entercell-red to-entercell-orange bg-clip-text text-transparent"> celular </span>
									com garantia
								</h1>
								<p className="text-xl text-gray-600 leading-relaxed">
									Especialistas em reparo de smartphones com mais de 10 anos de experiência. Peças originais Samsung, Motorola e Apple com garantia estendida.
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-5 w-5 text-entercell-orange" />
									<span className="text-gray-700">Reparo em 30min</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-5 w-5 text-entercell-orange" />
									<span className="text-gray-700">Peças originais</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-5 w-5 text-entercell-orange" />
									<span className="text-gray-700">1 ano garantia</span>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-gradient-to-r from-entercell-red to-entercell-orange hover:from-entercell-orange hover:to-entercell-red transition-all duration-300 text-lg px-8 py-3"
								>
									<Smartphone className="h-5 w-5 mr-2" />
									Solicitar Orçamento
								</Button>
								<Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-entercell-red hover:text-white transition-all duration-300">
									Ver Serviços
								</Button>
							</div>

							{/* Brands Section */}
							<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border">
								<h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Peças Originais Certificadas</h3>
								<div className="grid grid-cols-3 gap-6 items-center justify-items-center">
									<div className="text-center space-y-2">
										<Image
											src="/apple.svg"
											alt="Apple"
											className="w-16 h-10 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
											width={200}
											height={200}
										/>
										<p className="text-sm font-medium text-gray-700">Apple</p>
									</div>
									<div className="text-center space-y-2">
										<Image
											src="/samsung.svg"
											alt="Samsung"
											className="w-16 h-10 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
											width={200}
											height={200}
										/>
										<p className="text-sm font-medium text-gray-700">Samsung</p>
									</div>
									<div className="text-center space-y-2">
										<Image
											src="/motorola.png"
											alt="Motorola"
											className="w-16 h-10 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
											width={200}
											height={200}
										/>
										<p className="text-sm font-medium text-gray-700">Motorola</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative animate-scale-in">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-entercell-red to-entercell-orange rounded-lg blur opacity-30 animate-pulse-slow" />
								<div className="relative bg-white rounded-2xl p-8 shadow-2xl border">
									<div className="grid grid-cols-2 gap-6">
										<div className="text-center space-y-2">
											<div className="bg-gradient-to-br from-entercell-red to-entercell-orange p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
												<Shield className="h-8 w-8 text-white" />
											</div>
											<h3 className="font-semibold text-gray-900">Garantia</h3>
											<p className="text-sm text-gray-600">Até 1 ano para peças originais</p>
										</div>
										<div className="text-center space-y-2">
											<div className="bg-gradient-to-br from-entercell-yellow to-entercell-orange p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
												<Clock className="h-8 w-8 text-gray-900" />
											</div>
											<h3 className="font-semibold text-gray-900">Rapidez</h3>
											<p className="text-sm text-gray-600">Reparo em 30 minutos</p>
										</div>
										<div className="text-center space-y-2">
											<div className="bg-gradient-to-br from-entercell-orange to-entercell-red p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
												<Star className="h-8 w-8 text-white" />
											</div>
											<h3 className="font-semibold text-gray-900">Qualidade</h3>
											<p className="text-sm text-gray-600">5.0 estrelas no Google</p>
										</div>
										<div className="text-center space-y-2">
											<div className="bg-gradient-to-br from-entercell-yellow to-entercell-red p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center">
												<Smartphone className="h-8 w-8 text-gray-900" />
											</div>
											<h3 className="font-semibold text-gray-900">Expertise</h3>
											<p className="text-sm text-gray-600">10+ anos experiência</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

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

			<section id="warranty" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16 animate-fade-in">
						<Badge className="bg-gradient-to-r from-entercell-red to-entercell-orange text-white mb-4">🛡️ Garantia Diferenciada</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Garantia que Protege</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Oferecemos diferentes tipos de garantia dependendo do tipo de peça utilizada, sempre pensando na sua tranquilidade.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						<Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in">
							<CardContent className="p-8 space-y-6">
								<div className="flex items-center space-x-4">
									<div className="bg-gradient-to-br from-entercell-yellow to-entercell-orange p-4 rounded-full">
										<Award className="h-8 w-8 text-gray-900" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900">Peças Originais</h3>
										<Badge className="bg-entercell-yellow text-gray-900 mt-2">1 ANO DE GARANTIA</Badge>
									</div>
								</div>

								<p className="text-gray-600 text-lg">
									Para reparos utilizando peças originais Samsung, Apple e Motorola, oferecemos
									<strong className="text-entercell-red"> 1 ano completo de garantia</strong>, cobrindo defeitos de fabricação e problemas relacionados ao
									reparo.
								</p>

								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-yellow" />
										<span className="text-gray-700">Peças 100% originais certificadas</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-yellow" />
										<span className="text-gray-700">Garantia nacional válida</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-yellow" />
										<span className="text-gray-700">Suporte técnico especializado</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-yellow" />
										<span className="text-gray-700">Mão de obra qualificada</span>
									</div>
								</div>

								<div className="bg-gradient-to-r from-entercell-yellow/10 to-entercell-orange/10 p-4 rounded-lg border-l-4 border-entercell-yellow">
									<p className="text-sm text-gray-700">
										<strong>Importante:</strong> A garantia cobre defeitos de fabricação e problemas relacionados ao serviço executado, não incluindo danos
										causados por mau uso.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card
							className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
							style={{ animationDelay: "0.2s" }}
						>
							<CardContent className="p-8 space-y-6">
								<div className="flex items-center space-x-4">
									<div className="bg-gradient-to-br from-entercell-red to-entercell-orange p-4 rounded-full">
										<Shield className="h-8 w-8 text-white" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900">Peças Paralelas</h3>
										<Badge className="bg-entercell-red text-white mt-2">3 MESES DE GARANTIA</Badge>
									</div>
								</div>

								<p className="text-gray-600 text-lg">
									Para reparos com peças paralelas de alta qualidade, oferecemos
									<strong className="text-entercell-red"> 3 meses de garantia</strong>, uma das maiores do mercado para este tipo de componente.
								</p>

								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-red" />
										<span className="text-gray-700">Peças testadas e aprovadas</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-red" />
										<span className="text-gray-700">Qualidade premium garantida</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-red" />
										<span className="text-gray-700">Melhor custo-benefício</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-entercell-red" />
										<span className="text-gray-700">Instalação profissional</span>
									</div>
								</div>

								<div className="bg-gradient-to-r from-entercell-red/10 to-entercell-orange/10 p-4 rounded-lg border-l-4 border-entercell-red">
									<p className="text-sm text-gray-700">
										<strong>Vantagem:</strong> Opção econômica sem abrir mão da qualidade. Ideal para quem busca um reparo eficiente com excelente
										custo-benefício.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="mt-12 text-center">
						<Card className="max-w-4xl mx-auto border-0 shadow-lg">
							<CardContent className="p-8">
								<div className="flex items-center justify-center space-x-4 mb-4">
									<Clock className="h-8 w-8 text-entercell-orange" />
									<h3 className="text-2xl font-bold text-gray-900">Processo de Garantia</h3>
								</div>
								<p className="text-gray-600 text-lg mb-6">
									Nossa garantia é simples e descomplicada. Em caso de problemas, traga seu aparelho e resolveremos rapidamente, sem burocracias.
								</p>
								<div className="grid md:grid-cols-3 gap-6">
									<div className="text-center">
										<div className="bg-gradient-to-br from-entercell-red to-entercell-orange text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
											1
										</div>
										<h4 className="font-semibold text-gray-900 mb-2">Identifique o Problema</h4>
										<p className="text-sm text-gray-600">Venha até nossa loja com seu aparelho e nota fiscal do serviço</p>
									</div>
									<div className="text-center">
										<div className="bg-gradient-to-br from-entercell-yellow to-entercell-orange text-gray-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
											2
										</div>
										<h4 className="font-semibold text-gray-900 mb-2">Análise Técnica</h4>
										<p className="text-sm text-gray-600">Nossa equipe fará uma análise completa em até 30 minutos</p>
									</div>
									<div className="text-center">
										<div className="bg-gradient-to-br from-entercell-orange to-entercell-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
											3
										</div>
										<h4 className="font-semibold text-gray-900 mb-2">Solução Garantida</h4>
										<p className="text-sm text-gray-600">Reparo ou troca da peça sem custo adicional</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section id="testimonials" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16 animate-fade-in">
						<Badge className="bg-gradient-to-r from-entercell-orange to-entercell-red text-white mb-4">⭐ Avaliações Reais do Google</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
						<div className="flex items-center justify-center space-x-2 mb-6">
							<div className="flex space-x-1">
								{[...Array(5)].map((_, i) => (
									// biome-ignore lint/suspicious/noArrayIndexKey:
									<Star key={i} className="h-6 w-6 fill-entercell-orange text-entercell-orange" />
								))}
							</div>
							<span className="text-2xl font-bold text-gray-900">5.0</span>
							<span className="text-gray-600">(127+ avaliações no Google)</span>
						</div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Mais de 500 clientes satisfeitos confiam em nosso trabalho. Veja alguns depoimentos reais do Google Meu Negócio.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<Card
								key={testimonial.id}
								className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
								style={{ animationDelay: `${testimonial.id * 0.1}s` }}
							>
								<CardContent className="p-6 space-y-4">
									<div className="flex items-start justify-between">
										<Quote className="h-8 w-8 text-gray-300" />
										<div className="flex space-x-1">
											{[...Array(testimonial.rating)].map((_, i) => (
												// biome-ignore lint/suspicious/noArrayIndexKey:
												<Star key={i} className="h-4 w-4 fill-entercell-orange text-entercell-orange" />
											))}
										</div>
									</div>

									<p className="text-gray-700 italic leading-relaxed">"{testimonial.comment}"</p>

									<div className="border-t border-gray-100 pt-4">
										<div className="flex items-center justify-between">
											<div>
												<h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
												<p className="text-sm text-entercell-red">{testimonial.service}</p>
											</div>
											<div className="text-right">
												<p className="text-xs text-gray-500">{testimonial.date}</p>
												<Badge variant="outline" className="text-xs mt-1">
													Google Reviews
												</Badge>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="mt-12 text-center">
						<Card className="max-w-2xl mx-auto border-2 border-entercell-red/20 bg-gradient-to-br from-entercell-red/5 to-entercell-orange/5">
							<CardContent className="p-8">
								<div className="flex items-center justify-center space-x-4 mb-4">
									<div className="bg-gradient-to-br from-entercell-red to-entercell-orange p-3 rounded-full">
										<Star className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900">Avalie nossa experiência</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Sua opinião é muito importante para nós! Deixe sua avaliação no Google e ajude outros clientes a conhecer nosso trabalho.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<button
										type="button"
										className="bg-gradient-to-r from-entercell-red to-entercell-orange text-white px-6 py-3 rounded-lg hover:from-entercell-orange hover:to-entercell-red transition-all duration-300"
									>
										Avaliar no Google
									</button>
									<button
										type="button"
										className="border-2 border-entercell-red text-entercell-red px-6 py-3 rounded-lg hover:bg-entercell-red hover:text-white transition-all duration-300"
									>
										Ver Todas as Avaliações
									</button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16 animate-fade-in">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Estamos prontos para atender você! Entre em contato conosco e faça seu orçamento sem compromisso.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
						<div className="space-y-8 animate-fade-in">
							<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
								<CardContent className="p-6">
									<div className="flex items-start space-x-4">
										<div className="bg-gradient-to-br from-entercell-yellow to-entercell-orange p-3 rounded-full">
											<Phone className="h-6 w-6 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h3>
											<p className="text-gray-600 mb-3">Ligue para nós e faça seu orçamento</p>
											<p className="text-2xl font-bold text-entercell-red">(11) 99999-9999</p>
											<Button className="mt-3 bg-entercell-red hover:bg-entercell-red/90">
												<Phone className="h-4 w-4 mr-2" />
												Ligar Agora
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
								<CardContent className="p-6">
									<div className="flex items-start space-x-4">
										<div className="bg-gradient-to-br from-entercell-red to-entercell-orange p-3 rounded-full">
											<MessageCircle className="h-6 w-6 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
											<p className="text-gray-600 mb-3">Atendimento rápido via WhatsApp</p>
											<p className="text-2xl font-bold text-entercell-red">(11) 99999-9999</p>
											<Button className="mt-3 bg-entercell-red hover:bg-entercell-red/90">
												<MessageCircle className="h-4 w-4 mr-2" />
												Chamar no WhatsApp
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
								<CardContent className="p-6">
									<div className="flex items-start space-x-4">
										<div className="bg-gradient-to-br from-entercell-orange to-entercell-yellow p-3 rounded-full">
											<Mail className="h-6 w-6 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
											<p className="text-gray-600 mb-3">Envie sua dúvida por e-mail</p>
											<p className="text-lg font-semibold text-entercell-red">contato@entercell.com.br</p>
											<Button variant="outline" className="mt-3 border-entercell-orange text-entercell-orange hover:bg-entercell-orange hover:text-white">
												<Mail className="h-4 w-4 mr-2" />
												Enviar E-mail
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-8 animate-scale-in">
							<Card className="border-0 shadow-lg">
								<CardContent className="p-6">
									<div className="flex items-start space-x-4 mb-6">
										<div className="bg-gradient-to-br from-entercell-red to-entercell-orange p-3 rounded-full">
											<MapPin className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-gray-900 mb-2">Localização</h3>
											<p className="text-gray-600">Venha nos visitar em nossa loja</p>
										</div>
									</div>

									<div className="space-y-4">
										<div>
											<h4 className="font-semibold text-gray-900">Endereço</h4>
											<p className="text-gray-600">Rua da Tecnologia, 123 - Centro</p>
											<p className="text-gray-600">São Paulo - SP, 01234-567</p>
										</div>

										<Button className="w-full bg-gradient-to-r from-entercell-red to-entercell-orange hover:from-entercell-orange hover:to-entercell-red">
											<Navigation className="h-4 w-4 mr-2" />
											Como Chegar
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="border-0 shadow-lg">
								<CardContent className="p-6">
									<div className="flex items-start space-x-4 mb-6">
										<div className="bg-gradient-to-br from-entercell-orange to-entercell-yellow p-3 rounded-full">
											<Clock className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
											<p className="text-gray-600">Estamos abertos de segunda a sábado</p>
										</div>
									</div>

									<div className="space-y-3">
										<div className="flex justify-between">
											<span className="text-gray-700">Segunda a Sexta</span>
											<span className="font-semibold text-gray-900">08:00 - 18:00</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-700">Sábado</span>
											<span className="font-semibold text-gray-900">08:00 - 16:00</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-700">Domingo</span>
											<span className="font-semibold text-red-500">Fechado</span>
										</div>
									</div>

									<div className="mt-4 p-3 bg-entercell-yellow/10 rounded-lg border-l-4 border-entercell-yellow">
										<p className="text-sm text-gray-700">
											<strong>Atendimento expresso:</strong> Reparos simples em até 30 minutos!
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10">
									<Image src="/entercell.svg" alt="ENTERCELL Logo" className="w-full h-full object-contain" width={500} height={500} />
								</div>
								<div>
									<h3 className="text-xl font-bold">ENTERCELL</h3>
									<p className="text-sm text-gray-400">Assistência Técnica</p>
								</div>
							</div>
							<p className="text-gray-400">
								Mais de 10 anos consertando smartphones com qualidade e garantia. Peças originais Samsung, Apple e Motorola. Sua confiança é nossa prioridade.
							</p>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg font-semibold">Serviços</h4>
							<ul className="space-y-2 text-gray-400">
								<li>Troca de Tela</li>
								<li>Troca de Bateria</li>
								<li>Reparo de Câmera</li>
								<li>Problemas de Áudio</li>
								<li>Conector de Carga</li>
								<li>Recuperação de Dados</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg font-semibold">Garantias & Marcas</h4>
							<ul className="space-y-2 text-gray-400">
								<li>🟡 Peças Originais: 1 ano</li>
								<li>🔴 Peças Paralelas: 3 meses</li>
								<li>⚡ Reparo em 30 minutos</li>
								<li>🛡️ Garantia nacional</li>
								<li>📱 Samsung, Apple, Motorola</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h4 className="text-lg font-semibold">Contato</h4>
							<div className="space-y-3 text-gray-400">
								<div className="flex items-center space-x-2">
									<Phone className="h-4 w-4" />
									<span>(11) 99999-9999</span>
								</div>
								<div className="flex items-center space-x-2">
									<Mail className="h-4 w-4" />
									<span>contato@entercell.com.br</span>
								</div>
								<div className="flex items-start space-x-2">
									<MapPin className="h-4 w-4 mt-1" />
									<div>
										<p>Rua da Tecnologia, 123 - Centro</p>
										<p>São Paulo - SP, 01234-567</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center">
						<p className="text-gray-400">© 2025 ENTERCELL. Todos os direitos reservados. CNPJ: 12.345.678/0001-90</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Home
