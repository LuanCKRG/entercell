"use client"

import { Circle, Quote, Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

interface Testimonial {
	id: number
	name: string
	rating: number
	comment: string
	service: string
	date: string
}

const CarouselTestimonials = ({ testimonials }: { testimonials: Testimonial[] }) => (
	<Carousel
		className="w-full max-w-xl mx-auto md:hidden"
		opts={{
			loop: true
		}}
		plugins={[
			Autoplay({
				delay: 6000
			})
		]}
	>
		<CarouselContent>
			{testimonials.map((testimonial) => (
				<CarouselItem key={testimonial.id}>
						<Card
						key={testimonial.id}
						className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
						style={{ animationDelay: `${testimonial.id * 0.1}s` }}
					>
						<CardContent className="p-6 space-y-4 flex flex-col justify-between h-full">
							<div>
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
							</div>

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
				</CarouselItem>
			))}
		</CarouselContent>
	</Carousel>
)

export { CarouselTestimonials }
