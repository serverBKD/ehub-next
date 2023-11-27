import Image from 'next/image'

export default function Hero() {
	return (
		<section className="w-full hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<Image
					src="/next.svg"
					alt='13'
					width={1080}
					height={720}
					className="max-w-lg h-[720px] px-3 rounded-lg shadow-2xl bg-white" />	
				<div>
					<h1 className="text-5xl font-bold">¡Nuestra Comunidad es para todos!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</section>
	)
}
