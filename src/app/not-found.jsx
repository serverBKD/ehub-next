import Link from 'next/link'
import { ubuntu_condensed } from '@/fonts/fonts.js'

export default function page404 () {
	return (
		<section className={`${ubuntu_condensed.className} w-full h-screen p-0 flex flex-col items-center justify-center`}>
			<h1 className='text-8xl'>VENSUN</h1>
			<h3>error: 404</h3>
			<Link href={'/'} className="italic underline">ir a Inicio</Link>
		</section>
	)
}
