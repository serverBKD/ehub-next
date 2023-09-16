import React from "react";
// import img0 from "/public/img0.jpg";
// import img1 from "/public/cam_ptz.jpg";
import Image from "next/image";

interface Data {
  id: number;
  fullname: string;
  price: number;
  description: string;
  image: string;
}

const data: Data[] = [
  {
    id: 1,
    fullname: "Camera Security",
    price: 100,
    description: "Camera Security",
    image: "/img1.jpg",
  },
  {
    id: 2,
    fullname: "Sensor Security",
    price: 350,
    description: "other diferent Sensor Security",
    image: "/img2.jpg",
  },
  {
    id: 3,
    fullname: "Camera Security",
    price: 100,
    description: "Camera Security",
    image: "/img3.jpg",
  },
  {
    id: 4,
    fullname: "Sensor Security",
    price: 350,
    description: "other diferent Sensor Security",
    image: "/img4.jpg",
  },
];

function Cards() {
  return (
    <div className="w-full h-auto text-white-300 grid grid-flow-col grid-cols-4 gap-3 flex-wrap lg:shrink-0">
      {data.map((item): any => {
        return (
          <div
            key={item.id}
            className="w-[320px] h-[380px] bg-[#f5f5f5] rounded-lg overflow-hidden text-purple-800 shadow-2xl"
          >
            <Image
              src={item.image}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="shadow-lg overflow-hidden h-[320px]"
              alt="nada"
              width={320}
              height={100}
            />
            <p>
              {item.description}:{item.price}$
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
