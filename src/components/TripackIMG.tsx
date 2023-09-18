import React from "react";
import Image from "next/image";
import img19 from "/public/products/product19.jpg";

function TripackIMG() {
  return (
    <section className="w-full min-h-[420px]  px-3 mt-5 mb-3 flex justify-center items-center flex-wrap gap-x-7 md:flex-nowrap transition-all bg-[#E5E5E5]">
      <article className="min-w-[420px] h-[180px] px-7 flex-basis-1/3 text-black text-sm text-center  gap-3">
        <div className="mx-auto mb-3 overflow-hidden max-w-[120px] h-[120px] text-center rounded-full border-4 border-sky-400">
          <Image
            src={img19}
            layout="responsive"
            alt="nada"
            width={200}
            height={200}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "50%",
              margin: "auto",
            }}
          />
        </div>
        <p className="font-extrabold">Lorem ipsum dolor sit amet.</p>
      </article>
      <article className="min-w-[420px] h-[180px] px-7 flex-basis-1/3 text-black text-sm text-center   gap-3 ">
        <div className="mx-auto mb-3 overflow-hidden max-w-[120px] h-[120px] text-center rounded-full border-4 border-sky-400">
          <Image
            src={img19}
            layout="responsive"
            alt="nada"
            width={200}
            height={200}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "50%",
              margin: "auto",
            }}
          />
        </div>
        <p className="font-extrabold">Lorem ipsum dolor sit amet.</p>
      </article>
      <article className="min-w-[420px] h-[180px] px-7 flex-basis-1/3 text-black text-sm text-center gap-3 ">
        <div className="mx-auto mb-3 overflow-hidden max-w-[120px] h-[120px] text-center rounded-full border-4 border-sky-400">
          <Image
            src={img19}
            layout="responsive"
            alt="nada"
            width={200}
            height={200}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "50%",
              margin: "auto",
            }}
          />
        </div>
        <p className="font-extrabold">Lorem ipsum dolor sit amet.</p>
      </article>
    </section>
  );
}

export default TripackIMG;
