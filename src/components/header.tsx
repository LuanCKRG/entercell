import Image from "next/image"

const Header = () => (
	<header className="py-8 flex justify-center">
		<Image src="/entercell.svg" alt="Entercell" width={300} height={200} />
	</header>
)

export { Header }
