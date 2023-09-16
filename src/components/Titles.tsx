import React from "react";

interface Text {
  title: string;
}

function Titles({ title }: Text): any {
  return (
    <div className="w-full h-25 my-3">
      <p className="text-black italic font-semibold text-sm">{title}</p>
    </div>
  );
}

export default Titles;
