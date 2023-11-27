import Image from 'next/image'

export default function Cards_One() {
	return (
		<section className="card w-96 bg-base-100 shadow-xl my-2 mx-auto">
			<figure>
				<Image
					src="/Products/products_one.jpg"
					alt="Shoes"
					width={420}
					height={420}
					className='w-full h-auto'
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
      Shoes!
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div> 
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</section>
	)
}
