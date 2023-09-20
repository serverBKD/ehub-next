import React from "react";
import Image from "next/image";
import img0 from "/public/items/hPDhH9IL_1689047479.png";
import img1 from "/public/items/G23TmTWF_1689047479.png";
import img2 from "/public/items/53VHGLSU_1689047479.png";
import img3 from "/public/items/StpMQZfl_1689047479.png";
import img4 from "/public/items/1bm89rP8_1689047479.png";
import img5 from "/public/items/3_20230518_095105_0002.png";
import img6 from "/public/items/hPDhH9IL_1689047479.png";
import img7 from "/public/items/MPxC5aIa_1689047479.png";

function Gallery() {
  return (
    <section className="w-full h-64 grid place-content-center  bg-slate-600">
      <article className="text-center mx-35 font-bold">
        <h1>BRAND CONTEXT</h1>
      </article>
      <article className="w-[1080px] h-[180px] mx-auto flex justify-center gap-x-5 overflow-x-hidden">
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img0}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img1}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img2}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img3}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img4}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img5}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img6}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img7}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
        <picture className="w-[120px] h-[120px] bg-white overflow-hidden">
          <Image
            src={img3}
            alt="img5"
            style={{ width: "120px", height: "120px" }}
          />
        </picture>
      </article>
    </section>
  );
}

export default Gallery;
