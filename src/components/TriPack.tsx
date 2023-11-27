import Cards_One from './Cards_One'

export default function TriPack() {
	return (
		<section className='w-full bg-base-300 flex flex-wrap items-center justify-evenly'>
			<Cards_One />
			<Cards_One/>
			<Cards_One/>
		</section>
	)
}
