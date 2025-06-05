import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WarrantySection } from "@/components/warranty-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const Home = () => {
	return (
		<>
			<Header />

			<HeroSection />

			<ServicesSection />

			<WarrantySection />

			<TestimonialsSection />

			<ContactSection />

			<Footer />
		</>
	)
}

export default Home
