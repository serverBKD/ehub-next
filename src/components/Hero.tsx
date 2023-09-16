import React from "react";

function Hero() {
  return (
    <div className="w-full min-h-[50vh] bg-[url('/hero.jpg')] bg-no-repeat bg-origin-border bg-center bg-cover grid place-items-center text-center">
      <div className="w-[420px] h-auto gap-5 bg-opacity-50 bg-slate-500">
        <h3 className="text-xl text-[#edeae6] italic font-semibold">
          lo que buscas...
        </h3>
        <h1 className="my-4 text-4xl text-[#f4f3f2]  font-extrabold ">
          MultiHogar
        </h1>
        <button className="bg-[#424140] text-purple-100 px-3 rounded-sm text-2xl">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Hero;
