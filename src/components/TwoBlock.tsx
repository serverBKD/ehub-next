import React from "react";
import img10 from "/public/products/img10.jpg";
import Image from "next/image";

function TwoBlock() {
  return (
    <section className="w-full h-[420px] flex justify-center items-center  bg-[#F6F6F6]">
      <article className="w-[50%] h-full text-black overflow-hidden flex-wrap">
        <Image
          src={img10}
          alt="product10"
          className="w-full h-fit"
          quality={100}
          style={{
            objectFit: "contain",
            objectPosition: "center",
            width: "480px",
            height: "420px",
            margin: "0 auto",
          }}
        />
      </article>
      <article className="w-[50%] h-full text-black flex justify-center items-center mx-auto gap-3 px-3 bg-red-600">
        <div>Lorem, ipsum dolor.</div>
        <div>
          <h1 className="font-bold text-2xl mb-5">1. Lorem Ipsum</h1>
          <p className="text-justify bg-purple-900">
            sit amet consectetur adipisicing elit.Adipisci,veritatis quia
            doloremque quos animi at est debitis
          </p>
        </div>
      </article>
    </section>
  );
}

export default TwoBlock;
