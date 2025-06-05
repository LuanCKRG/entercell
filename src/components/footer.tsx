import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const Footer = () => (
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
							<span>(11) 94735-0134</span>
						</div>
						<div className="flex items-center space-x-2">
							<Mail className="h-4 w-4" />
							<span>entercellassistenciatecnica@gmail.com</span>
						</div>
						<div className="flex items-start space-x-2">
							<MapPin className="h-4 w-4 mt-1" />
							<div>
								<p>Av. Aricanduva, 5102 - Jardim Aricanduva</p>
								<p>São Paulo - SP, 03490-000</p>
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
)

export { Footer }
