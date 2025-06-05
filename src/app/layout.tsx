import type { Metadata } from "next"
import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "EnterCell",
	description: ""
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="pt-BR">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<main className="bg-gradient-to-br from-slate-50 to-blue-50">{children}</main>

				<a
					href="https://wa.me/5511947350134"
					target="_blank"
					rel="noopener noreferrer"
					className="p-4 rounded-full fixed bottom-6 right-6 bg-[#25d366] hover:bg-[#0a8c7e] transition-colors duration-300"
				>
					<Image src="/icons/whatsapp-icon.svg" alt="whatsapp" width={100} height={100} className="size-8" />
				</a>
			</body>
		</html>
	)
}

export default RootLayout
