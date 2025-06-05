import { Star, Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CarouselTestimonials } from "@/components/testimonials-carousel"

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
