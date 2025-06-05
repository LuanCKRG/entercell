import { Star, Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CarouselTestimonials } from "@/components/testimonials-carousel"

const testimonials = [
	{
		id: 1,
		name: "Sidney Ortiz",
		rating: 5,
		comment:
			"São excelentes, resolveram meu problema e dão um atendimento de primeira linha, o pós retorno. O atendimento é no início, no fim e pós. De muita qualidade. Recomendo a loja. São melhores que autorizada da Motorola. A loja é de muita qualidade. Rayssa e o Thaylor são pessoas profissionais e muito atenciosos. Obrigado!",
		service: "Troca de Tela - iPhone 13",
		date: "Há 2 semanas"
	},
	{
		id: 2,
		name: "Jéssica Tonon",
		rating: 5,
		comment:
			"O serviço é impecável, a atenção que temos desde a explicação do problema, até a resolução, é indiscutível. Vocês estão de parabéns pela qualidade nos serviços e a atenção que dão aos clientes! Super recomendo...",
		service: "Troca de Bateria - Galaxy S21",
		date: "Há 1 mês"
	},
	{
		id: 3,
		name: "Beatriz Numa",
		rating: 5,
		comment:
			"Recomendo muito!! Foram muito atenciosos e solícitos para consertar a câmera do meu celular que havia parado de funcionar. E ainda tem um preço justo",
		service: "Reparo de Câmera - Xiaomi Mi 11",
		date: "Há 1 mês"
	},
	{
		id: 4,
		name: "Estella Muniz",
		rating: 5,
		comment: "Atendimento nota mil! Precisei trocar o conector do usb e foram super atenciosos, prestativos e ágeis. Recomendo muito!",
		service: "Troca de Tela - Galaxy A52",
		date: "Há 3 semanas"
	},
	{
		id: 5,
		name: "Lucas Smith",
		rating: 5,
		comment: "Nota 10! Levei o meu xiaomi pocophone F1, e deu tudo certo. Super recomendo! Estão de parabéns",
		service: "Cliente Fiel - Vários Reparos",
		date: "Há 1 mês"
	},
	{
		id: 6,
		name: "João Vitor",
		rating: 5,
		comment: "Ótimo atendimento, acabei de receber meu celular que foi para concerto! Tudo ótimo recomendo mt",
		service: "Recuperação de Dados - Moto G9",
		date: "Há 2 meses"
	}
]

const TestimonialsSection = () => (
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

			<CarouselTestimonials testimonials={testimonials} />

			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{testimonials.map((testimonial) => (
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
									<h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
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

			<div className="mt-4 md:mt-12 text-center">
				<Card className="max-w-2xl mx-auto border-2 border-entercell-red/20 bg-gradient-to-br from-entercell-red/5 to-entercell-orange/5">
					<CardContent className="p-8">
						<div className="flex max-md:flex-col items-center justify-center space-x-4 mb-4">
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
)

export { TestimonialsSection }
