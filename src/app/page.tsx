import Image from 'next/image'

export default function Home() {
	return (
		<main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
			<section className="w-full hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<Image
						src="/next.svg"
						alt='13'
						width={720}
						height={420}
						className="max-w-sm rounded-lg shadow-2xl" />
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</section>

		</main>
	)
}
