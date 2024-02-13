import Image from "next/image";
import { Icon } from "./Icon";

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

    <div className="aspect-square relative w-64 h-full bg-stone-300 rounded-3xl border border-stone-900">
      <Image
        src="/nimi.jpg"
        alt="Nimród"
        layout="fill"
        objectFit="cover"
        className="rounded-3xl"
      />
    </div>

    <div className="block md:hidden text-stone-400">Kattints rám</div>
    <div className="hidden md:block text-stone-400">
      <Icon name="rotate" />
    </div>
  </div>
);
