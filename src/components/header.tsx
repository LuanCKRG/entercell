import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

const Header = () => (
	<header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
		<div className="container mx-auto px-4 py-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-3">
					<div className="w-12 h-12">
						<Image src="/entercell.svg" alt="ENTERCELL Logo" className="w-full h-full object-contain" width={500} height={500} />
					</div>
					<div>
						<h1 className="text-xl font-bold text-gray-900">ENTERCELL</h1>
						<p className="text-xs text-gray-600">Assistência Técnica</p>
					</div>
				</div>

				<nav className="hidden md:flex items-center space-x-6">
					<Link href="#services" className="text-gray-600 hover:text-entercell-red transition-colors">
						Serviços
					</Link>
					<Link href="#warranty" className="text-gray-600 hover:text-entercell-red transition-colors">
						Garantia
					</Link>
					<Link href="#testimonials" className="text-gray-600 hover:text-entercell-red transition-colors">
						Avaliações
					</Link>
					<Link href="#contact" className="text-gray-600 hover:text-entercell-red transition-colors">
						Contato
					</Link>
				</nav>

				<Button className="bg-gradient-to-r from-entercell-red to-entercell-orange hover:from-entercell-orange hover:to-entercell-red transition-all duration-300">
					<Phone className="h-4 w-4 mr-2" />
					Orçamento
				</Button>
			</div>
		</div>
	</header>
)

export { Header }
