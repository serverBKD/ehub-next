import React from "react";
import Image from "next/image";
import { Data, Text } from "../types/types.ts";

const data: Data[] = [
  {
    id: 1,
    fullname: "Camera Security",
    price: 350,
    description: "Camera Security",
    image: "/products/img1.jpg",
  },
  {
    id: 2,
    fullname: "Sensor Security",
    price: 12.5,
    description: "Sensor Security",
    image: "/products/img2.jpg",
  },
  {
    id: 3,
    fullname: "Siren Security",
    price: 35,
    description: "Siren Security",
    image: "/products/img3.jpg",
  },
  {
    id: 4,
    fullname: "Sensor Security",
    price: 48,
    description: "Lighting Security",
    image: "/products/img4.jpg",
  },
];
function Cards({ numGRID = 3 }: Text): any {
  return (
    <article className="w-full h-auto bg-white grid grid-cols-4 grid-flow-dense place-items-center mt-3 mb-[60px]">
      {data.slice(0, numGRID).map((item: any) => {
        return (
          <div
            key={item.id}
            className="w-[320px] min-h-[320px] mt-7 rounded-lg overflow-hidden bg-[#f5f5f5] text-purple-800 col-span-2 md:col-span-1"
          >
            <Image
              src={item.image}
              layout="responsive"
              className="w-[320px] h-[320px] "
              alt="nada"
              width={320}
              height={320}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <p className="mt-3 justify-center text-xs font-semibold text-center underline">
              {item.description}
            </p>
            <p className="mb-2 justify-center text-xs font-semibold text-center">
              {item.price}$
            </p>
          </div>
        );
      })}
    </article>
  );
}

export default Cards;

// <div
//   key={item.id}
//   className={`w-[${w}px] min-h-[${h}px] bg-[#f5f5f5] rounded-lg overflow-hidden text-purple-800 shadow-2xl col-span-2 md:col-span-1`}
// ></div>
