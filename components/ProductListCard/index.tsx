import React from "react";

function ProductListCard({ item, index }: any) {
  return (
    <div
      key={index}
      className="bg-slate-900 px-[20px] flex items-center py-[8px] w-[400px] h-[100px] text-[18px] text-white font-semibold"
    >
      <div>{item.product_name}</div>
    </div>
  );
}

export default ProductListCard;
