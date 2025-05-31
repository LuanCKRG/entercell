import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ShieldCheck, Smartphone, BadgeCheck, RotateCcw } from "lucide-react"

const Home = () => {
	return (
		<div className="space-y-18 px-4">
			<div>
				<HeroSection />
				{/* Banner de Garantia Destaque */}
				<div className="mt-6 bg-gradient-to-r from-[#E3362E] to-[#FA4529] rounded-2xl p-2 md:p-6 text-white">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="flex flex-col items-center mb-4 md:mb-0">
							<ShieldCheck className="size-12 text-white mr-4" />
							<div>
								<h3 className="md:text-xl font-bold not-md:uppercase">Nossa Política de Garantia</h3>
								<p className="opacity-90">Transparência antes de qualquer reparo</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-1">
							<div className="flex flex-col h-full text-center bg-black/30 px-4 py-2 rounded-lg border border-white/20">
								<div className="font-bold text-lg text-[#fcd20b]">1 ANO</div>
								<div className="text-sm">Peças originais</div>
							</div>

							<div className="flex flex-col h-full text-center bg-black/30 px-4 py-2 rounded-lg border border-white/20">
								<div className="font-bold text-lg text-[#F2FF29]">3 MESES</div>
								<div className="text-sm">Peças paralelas</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="">
				<div className="">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-[#F2FF29]">Por que Somos Diferentes?</h2>
						<p className="text-lg text-gray-300 mt-4">Qualidade e transparência que você pode ver e sentir</p>
					</div>

					{/* Grid de Diferenciais */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Destaque 1 - Garantia de Peças */}
						<div className="rounded-2xl p-6 shadow-lg border-2 border-[#FA4529] relative overflow-hidden">
							<div className="absolute top-0 right-0 bg-[#E3362E] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">GARANTIA</div>
							<div className="flex items-start mb-4">
								<ShieldCheck className="w-10 h-10 text-[#fcd20b] mr-4" />
								<div>
									<h3 className="text-xl font-bold text-white">Política de Garantia</h3>
									<div className="mt-2 space-y-2">
										<div className="flex items-center">
											<BadgeCheck className="w-5 h-5 text-[#fcd20b] mr-2" />
											<span className="font-medium text-white">1 ano em peças originais</span>
										</div>
										<div className="flex items-center">
											<BadgeCheck className="w-5 h-5 text-[#F2FF29] mr-2" />
											<span className="font-medium text-white">3 meses em peças paralelas</span>
										</div>
									</div>
								</div>
							</div>
							<p className="text-gray-400 text-sm mt-4">Total transparência sobre a origem das peças com garantia documentada.</p>
						</div>

						{/* Destaque 2 - Marcas Atendidas */}
						<div className="rounded-2xl p-6 shadow-lg border-2 border-[#fcd20b]">
							<div className="flex items-start mb-4">
								<Smartphone className="w-10 h-10 text-[#FA4529] mr-4" />
								<div>
									<h3 className="text-xl font-bold text-white">Peças Especializadas</h3>
									<div className="mt-3 flex flex-wrap gap-2">
										<span className="bg-[#E3362E] px-3 py-1 rounded-full text-sm font-medium text-white">Samsung</span>
										<span className="bg-[#FA4529] px-3 py-1 rounded-full text-sm font-medium text-white">Motorola</span>
										<span className="bg-[#fcd20b] px-3 py-1 rounded-full text-sm font-medium text-black">Xiaomi</span>
										<span className="bg-[#F2FF29] px-3 py-1 rounded-full text-sm font-medium text-black">Apple</span>
									</div>
								</div>
							</div>
							<p className="text-gray-400 mt-4">Componentes específicos para cada fabricante com qualidade certificada.</p>
						</div>

						{/* Destaque 3 - Satisfação */}
						<div className="rounded-2xl p-6 shadow-lg border-2 border-[#F2FF29]">
							<div className="flex items-start mb-4">
								<RotateCcw className="w-10 h-10 text-[#F2FF29] mr-4" />
								<div>
									<h3 className="text-xl font-bold text-white">Satisfação Garantida</h3>
									<div className="flex items-center mt-2">
										<div className="flex text-[#fcd20b]">
											{[...Array(5)].map((number, i) => (
												<svg key={number} xmlns="http://www.w3.org/2000/svg" className="size-5 fill-current" viewBox="0 0 24 24">
													<title>Estrela</title>
													<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
												</svg>
											))}
										</div>
										<span className="text-gray-300 ml-2">4.9/5 (107 avaliações)</span>
									</div>
								</div>
							</div>
							<p className="text-gray-400 mt-4">Se não ficar satisfeito, refazemos o serviço sem custo adicional.</p>
						</div>
					</div>

					{/* Comparativo de Garantias */}
					{/* <div className="mt-12 bg-zinc-900 rounded-2xl p-6 border border-[#fcd20b]/30">
						<h3 className="text-xl font-bold text-white mb-4 text-center">Entenda Nossas Garantias</h3>
						<div className="flex flex-col md:flex-row gap-6">
							<div className="flex-1 bg-black p-5 rounded-xl border border-[#fcd20b]">
								<div className="text-center mb-4">
									<div className="font-bold text-2xl text-[#fcd20b]">1 ANO</div>
									<div className="text-sm text-gray-300">Peças Originais</div>
								</div>
								<ul className="space-y-2">
									<li className="flex items-center">
										<BadgeCheck className="w-5 h-5 text-[#fcd20b] mr-2" />
										<span className="text-gray-300">Componentes de fábrica</span>
									</li>
									<li className="flex items-center">
										<BadgeCheck className="w-5 h-5 text-[#fcd20b] mr-2" />
										<span className="text-gray-300">Certificação do fabricante</span>
									</li>
									<li className="flex items-center">
										<BadgeCheck className="w-5 h-5 text-[#fcd20b] mr-2" />
										<span className="text-gray-300">Compatibilidade total</span>
									</li>
								</ul>
							</div>

							<div className="flex-1 bg-black p-5 rounded-xl border border-[#F2FF29]">
								<div className="text-center mb-4">
									<div className="font-bold text-2xl text-[#F2FF29]">3 MESES</div>
									<div className="text-sm text-gray-300">Peças Paralelas</div>
								</div>
								<ul className="space-y-2">
									<li className="flex items-center">
										<BadgeCheck className="w-5 h-5 text-[#F2FF29] mr-2" />
										<span className="text-gray-300">Qualidade equivalente</span>
									</li>
									<li className="flex items-center">
										<BadgeCheck className="w-5 h-5 text-[#F2FF29] mr-2" />
										<span className="text-gray-300">Custo-benefício</span>
									</li>
									<li className="flex items-center">
										<BadgeCheck className="w-5 h-5 text-[#F2FF29] mr-2" />
										<span className="text-gray-300">Testadas e aprovadas</span>
									</li>
								</ul>
							</div>
						</div>
					</div> */}
				</div>
			</section>
			<ServicesSection />
		</div>
	)
}

export default Home
