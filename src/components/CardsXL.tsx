import React from "react";
import Image from "next/image";
import { Data, Text, StyleX } from "../types/types.ts";

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

function CardsXL({ numGRID = 3 }: Text, S: StyleX): any {
  return (
    <article className={S === "Style0" ? StyleX0 : StyleX1}>
      {data.slice(0, numGRID).map((item: any) => {
        return (
          <div
            key={item.id}
            className="w-[420px] min-h-[420px] mt-7 rounded-lg overflow-hidden bg-[#f5f5f5] text-purple-800 col-span-2 md:col-span-1"
          >
            <Image
              src={item.image}
              layout="responsive"
              className="shadow-lg overflow-hidden w-[320px] h-[320px] "
              alt="nada"
              width={320}
              height={420}
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

export default CardsXL;
