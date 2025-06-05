import { CheckCircle, Shield, Clock, Award } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const WarrantySection = () => (
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
							<strong className="text-entercell-red"> 1 ano completo de garantia</strong>, cobrindo defeitos de fabricação e problemas relacionados ao reparo.
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
								<strong>Importante:</strong> A garantia cobre defeitos de fabricação e problemas relacionados ao serviço executado, não incluindo danos causados
								por mau uso.
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
								<strong>Vantagem:</strong> Opção econômica sem abrir mão da qualidade. Ideal para quem busca um reparo eficiente com excelente custo-benefício.
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
)

export { WarrantySection }
