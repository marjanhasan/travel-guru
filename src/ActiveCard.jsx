import React from "react";

const ActiveCard = ({ bg, click }) => {
  return (
    <div
      onClick={() => click(bg.id)}
      className={`relative mr-3 h-[300px] w-[200px] inline-block overflow-hidden rounded-2xl border-4 border-yellow-600 cursor-pointer `}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <img src={bg.url} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h2 className="text-white text-3xl font-bold uppercase">{bg.title}</h2>
      </div>
    </div>
  );
};

export default ActiveCard;
