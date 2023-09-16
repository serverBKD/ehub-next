import React from "react";
import Image from "next/image";
import { Data, Text, StyleX, SizeX } from "../types/types.ts";

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
const StyleX0 =
  "w-full h-auto grid grid-cols-1 grid-flow-dense place-items-center mt-3 mb-[60px]";

const StyleX1 =
  "w-full h-auto mt-3 mb-[60px] flex justify-center items-align gap-x-3 flex-wrap";

function Cards({ numGRID = 3 }: Text, p: StyleX, w: SizeX, h: SizeX): any {
  return (
    <article className={p === "Style0" ? StyleX0 : StyleX1}>
      {data.slice(0, numGRID).map((item: any) => {
        return (
          <div
            key={item.id}
            className={`w-[${w}px] min-h-[${h}px] bg-[#f5f5f5] rounded-lg overflow-hidden text-purple-800 shadow-2xl col-span-2 md:col-span-1`}
          >
            <Image
              src={item.image}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="shadow-lg overflow-hidden h-[320px] px-5 py-3"
              alt="nada"
              width={280}
              height={180}
            />
            <p className="shadow-lg my-2 justify-center text-sm font-semibold">
              {item.description}: {item.price}$
            </p>
          </div>
        );
      })}
    </article>
  );
}

export default Cards;
