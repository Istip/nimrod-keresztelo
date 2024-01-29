import React from "react";

const Card = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="p-8 border rounded-3xl bg-stone-200 max-w-screen-md mx-4 flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-stone-600 text-2xl md:text-4xl">
          Nimród Keresztelője
        </h1>
        <p className="text-xs md:text-lg">
          Szeretettel meghívunk a kisfiunk, Nimród keresztelőjére és az azt
          követő ebédre. Nagyon boldogak lennénk, ha velünk ünnepelnétek ezen a
          jeles napon.
        </p>
        <p className="font-bold text-stone-600">2022.05.22 (szerda), 11:00</p>
      </main>
    </div>
  );
};

export default Card;
