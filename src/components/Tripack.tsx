import React from "react";

function Tripack() {
  return (
    <section className="w-full min-h-[120px] bg-[#FFF] mt-5 mb-3 flex justify-center items-center flex-wrap gap-x-3 md:flex-nowrap transition-all">
      <article className="max-w-[220px] flex-basis-1/3 text-black text-xs text-center gap-3">
        <p className="font-semibold mb-1.5">
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`
        </p>
        <p className="font-extrabold">Lorem, ipsum.</p>
      </article>
      <article className="max-w-[220px] flex-basis-1/3 text-black text-xs text-center gap-3">
        <p className="font-semibold mb-1.5">
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`
        </p>
        <p className="font-extrabold">Lorem, ipsum.</p>
      </article>
      <article className="max-w-[220px] flex-basis-1/3 text-black text-xs text-center gap-3">
        <p className="font-semibold mb-1.5">
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`
        </p>
        <p className="font-extrabold">Lorem, ipsum.</p>
      </article>
    </section>
  );
}

export default Tripack;
