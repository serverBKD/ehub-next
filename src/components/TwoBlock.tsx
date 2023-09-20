import React from "react";
import { Text } from "../types/types.tsx";
import img10 from "/public/products/img10.jpg";
import Image from "next/image";

function TwoBlock({ TBH, TBText, OL }: Text) {
  return (
    <section className="w-full h-[380px] min-h-[320px] hidden md:flex justify-center items-center flex-wrap text-black">
      <article
        className={"w-full h-full overflow-hidden md:w-[50%] " + `${OL}`}
      >
        <Image
          src={img10}
          alt="product10"
          quality={100}
          style={{
            objectFit: "contain",
            objectPosition: "center",
            width: "380px",
            height: "300px",
            margin: "0 auto",
          }}
        />
      </article>
      <article className="w-full h-full md:w-[50%] flex justify-center items-center mx-auto gap-3 px-10 bg-[#D1D1D3]">
        <div>
          <h1 className="font-bold text-2xl mb-5">{TBH}</h1>
          <p className="text-justify">{TBText}</p>
        </div>
      </article>
    </section>
  );
}

export default TwoBlock;
