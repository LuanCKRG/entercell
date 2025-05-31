import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { Header } from "@/components/header"

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
				<Header />
				<main className="container mx-auto">{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
