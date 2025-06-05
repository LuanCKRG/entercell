import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WarrantySection } from "@/components/warranty-section"
import { TestimonialsSection } from "@/components/testimonials-section"

const Home = () => {
	return (
		<>
			<Header />

			<HeroSection />

			<ServicesSection />

			<WarrantySection />

			<TestimonialsSection />

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
