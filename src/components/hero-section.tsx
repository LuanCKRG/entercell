import Image from "next/image"
import { CheckCircle, Smartphone, Shield, Clock, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const HeroSection = () => (
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
							asChild
						>
							<a href="https://wa.me/5511947350134" target="_blank" rel="noopener noreferrer">
								<Smartphone className="h-5 w-5 mr-2" />
								Solicitar Orçamento
							</a>
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
)

export { HeroSection }
