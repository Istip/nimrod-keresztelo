export const Front = () => (
  <div className="rounded-xl flip-card-front p-4 flex flex-col items-center justify-center gap-6 bg-stone-100">
    <div className="flex flex-col items-center justify-center gap-3">
      <div>
        <h1 className="font-black text-stone-700 text-6xl font-title">
          Nimród
        </h1>
        {/* <div className="h-[2px] bg-gold w-[20%]" /> */}
        <p className="">keresztelője</p>
      </div>
      <p className="font-light mt-4 bg-gold px-2 rounded-full text-stone-700 font-title text-xl">
        ~ 2024.05.25 (szombat) ~
      </p>
    </div>

    <div className="aspect-square w-64 bg-stone-300 rounded-3xl" />

    <div className="block md:hidden text-stone-400">Kattints rám</div>
  </div>
);
