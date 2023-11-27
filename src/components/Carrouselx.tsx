import Image from 'next/image'
export default function Carrouselx() {
	return (
		<section className="carousel w-full max-h-[640px]">
			<div id="slide1" className="carousel-item relative w-full">
				<Image
					src="/carrouselx/carrouselx_ (4).jpeg"
					alt='imagen 0'
					width={1080}
					height={320}
					className="w-full"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">❮</a> 
					<a href="#slide2" className="btn btn-circle">❯</a>
				</div>
			</div> 
			<div id="slide2" className="carousel-item relative w-full">
				<Image
					src="/carrouselx/carrouselx_ (2).jpeg"
					alt='imagen 0'
					width={1080}
					height={320}
					className="w-full"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">❮</a> 
					<a href="#slide3" className="btn btn-circle">❯</a>
				</div>
			</div> 
			<div id="slide3" className="carousel-item relative w-full">
				<Image
					src="/carrouselx/carrouselx_ (3).jpeg"
					alt='imagen 0'
					width={1080}
					height={320}
					className="w-full"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">❮</a> 
					<a href="#slide4" className="btn btn-circle">❯</a>
				</div>
			</div> 
			<div id="slide4" className="carousel-item relative w-full">
				<Image
					src="/carrouselx/carrouselx_ (1).jpeg"
					alt='imagen 0'
					width={1080}
					height={320}
					className="w-full"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="btn btn-circle">❮</a> 
					<a href="#slide1" className="btn btn-circle">❯</a>
				</div>
			</div>
		</section>
	)
}
