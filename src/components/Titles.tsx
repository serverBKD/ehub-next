import React from "react";
import { Text } from "../types/types.ts";

function Titles({ title, H5 }: Text): any {
  return (
    <div className="w-full h-25 my-3 text-black italic font-semibold text-sm">
      <h5 className="italic font-bond mb-3">{H5}</h5>
      <p>{title}</p>
    </div>
  );
}

export default Titles;
