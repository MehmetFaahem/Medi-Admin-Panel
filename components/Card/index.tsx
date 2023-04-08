import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Hind_Siliguri } from "@next/font/google";

const hind = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

function Card({ item, index }: any) {
  return (
    <section
      key={index}
      className="bg-orange-500 mt-[20px] rounded-xl flex flex-col justify-center items-start h-[200px] w-[450px]"
    >
      <div className="flex place-items-center">
        <FontAwesomeIcon
          fontSize={"30px"}
          icon={item.icon}
          height={30}
          color="white"
          width={30}
          className="bg-slate-900 ml-[30px] m-[20px] p-[20px] rounded-full"
        />
        <div className="ml-[25px]">
          <p className="text-slate-900 font-[800] text-[25px]">{item.title}</p>
          <p className={`text-white font-bold text-[40px] ${hind.className}`}>
            {item.number}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
