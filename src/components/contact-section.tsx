import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ContactSection = () => (
	<section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
		<div className="container mx-auto px-2 sm:px-4">
			<div className="text-center mb-8 md:mb-16 animate-fade-in">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
				<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
					Estamos prontos para atender você! Entre em contato conosco e faça seu orçamento sem compromisso.
				</p>
			</div>

			<div className="grid lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
				<div className="space-y-6 md:space-y-8 animate-fade-in">
					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
						<CardContent className="p-4 md:p-6">
							<div className="flex items-start space-x-3 md:space-x-4">
								<div className="bg-gradient-to-br from-entercell-yellow to-entercell-orange p-2 md:p-3 rounded-full flex-shrink-0">
									<Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
								</div>

								<div className="flex-1 min-w-0">
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Telefone</h3>
									<p className="text-sm md:text-base text-gray-600 mb-3">Ligue para nós e faça seu orçamento</p>
									<p className="text-xl md:text-2xl font-bold text-entercell-red break-all">(11) 94735-0134</p>
									<Button asChild className="mt-3 w-full sm:w-auto bg-entercell-red hover:bg-entercell-red/90 text-sm md:text-base">
										<a href="tel:+5511947350134">
											<Phone className="h-4 w-4 mr-2" />
											Ligar Agora
										</a>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
						<CardContent className="p-4 md:p-6">
							<div className="flex items-start space-x-3 md:space-x-4">
								<div className="bg-gradient-to-br from-entercell-red to-entercell-orange p-2 md:p-3 rounded-full flex-shrink-0">
									<MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
									<p className="text-sm md:text-base text-gray-600 mb-3">Atendimento rápido via WhatsApp</p>
									<p className="text-xl md:text-2xl font-bold text-entercell-red break-all">(11) 94735-0134</p>
									<Button asChild className="mt-3 w-full sm:w-auto bg-entercell-red hover:bg-entercell-red/90 text-sm md:text-base">
										<a href="https://wa.me/5511947350134" target="_blank" rel="noopener noreferrer">
											<MessageCircle className="h-4 w-4 mr-2" />
											Chamar no WhatsApp
										</a>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
						<CardContent className="p-4 md:p-6">
							<div className="flex items-start space-x-3 md:space-x-4">
								<div className="bg-gradient-to-br from-entercell-orange to-entercell-yellow p-2 md:p-3 rounded-full flex-shrink-0">
									<Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
									<p className="text-sm md:text-base text-gray-600 mb-3">Envie sua dúvida por e-mail</p>
									<p className="text-sm md:text-lg font-semibold text-entercell-red break-all">entercellassistenciatecnica@gmail.com</p>
									<Button
										asChild
										variant="outline"
										className="mt-3 w-full sm:w-auto border-entercell-orange text-entercell-orange hover:bg-entercell-orange hover:text-white text-sm md:text-base"
									>
										<a href="mailto:entercellassistenciatecnica@gmail.com" target="_blank" rel="noopener noreferrer">
											<Mail className="h-4 w-4 mr-2" />
											Enviar E-mail
										</a>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="space-y-6 md:space-y-8 animate-scale-in">
					<Card className="border-0 shadow-lg">
						<CardContent className="p-4 md:p-6">
							<div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
								<div className="bg-gradient-to-br from-entercell-red to-entercell-orange p-2 md:p-3 rounded-full flex-shrink-0">
									<MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
								</div>
								<div className="min-w-0">
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Localização</h3>
									<p className="text-sm md:text-base text-gray-600">Venha nos visitar em nossa loja</p>
								</div>
							</div>

							<div className="space-y-4">
								<div>
									<h4 className="font-semibold text-gray-900 text-sm md:text-base">Endereço</h4>
									<p className="text-sm md:text-base text-gray-600">Av. Aricanduva, 5102 - Jardim Aricanduva</p>
									<p className="text-sm md:text-base text-gray-600">São Paulo - SP, 03490-000</p>
								</div>

								<Button
									asChild
									className="w-full bg-gradient-to-r from-entercell-red to-entercell-orange hover:from-entercell-orange hover:to-entercell-red text-sm md:text-base"
								>
									<a
										href="https://www.google.com/maps/dir//Av.+Aricanduva,+5102+-+Jardim+Aricanduva,+S%C3%A3o+Paulo+-+SP,+03490-000/@-23.5642519,-46.5910586,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce671e28cbd3e1:0x784a533786e3375!2m2!1d-46.508657!2d-23.5642736?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Navigation className="h-4 w-4 mr-2" />
										Como Chegar
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-lg">
						<CardContent className="p-4 md:p-6">
							<div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
								<div className="bg-gradient-to-br from-entercell-orange to-entercell-yellow p-2 md:p-3 rounded-full flex-shrink-0">
									<Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
								</div>
								<div className="min-w-0">
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
									<p className="text-sm md:text-base text-gray-600">Estamos abertos de segunda a sábado</p>
								</div>
							</div>

							<div className="space-y-3">
								<div className="flex justify-between">
									<span className="text-gray-700">Segunda a Sábado</span>
									<span className="font-semibold text-gray-900">10:00 - 18:00</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-700">Feriado</span>
									<span className="font-semibold text-gray-900">10:00 - 16:00</span>
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
)

export { ContactSection }
