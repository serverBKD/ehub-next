import Cards_One from '@/components/Cards_One'
import Carrouselx from '@/components/Carrouselx'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero.tsx'
import NavBar from '@/components/NavBar'
import NavBarCart from '@/components/NavBarCart.tsx'
import Stat from '@/components/Stat'
import TriPack from '@/components/TriPack'

export default function Home() {
	return (
		<main className="w-full min-h-screen">
			<NavBarCart/>
			<Hero />
			<NavBar />
			<Carrouselx />
			<TriPack/>
			<Cards_One/>
			<Stat/>
			<Footer/>
		</main>
	)
}
