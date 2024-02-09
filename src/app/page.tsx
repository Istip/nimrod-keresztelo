import { events } from "@/data/events";

export default function Home() {
  const Front = () => (
    <div className="flip-card-front p-4 flex flex-col items-center justify-center gap-6 bg-stone-100">
      <div>
        <h1 className="font-black text-stone-700 text-3xl">
          Nimród Keresztelője
        </h1>
        <p className="font-light mt-4 text-orange-500">
          ~ 2022.05.22 (szerda) ~
        </p>
      </div>

      <div className="aspect-square w-64 bg-stone-300 rounded-3xl" />

      <div className="block md:hidden text-stone-700">Kattints rám</div>
    </div>
  );

  const Back = () => (
    <div className="flip-card-back p-4 bg-stone-200 flex flex-col items-center justify-center">
      <p className="">
        Szeretettel meghívunk a kisfiunk,{" "}
        <span className="text-orange-500 font-bold">Nimród</span> keresztelőjére
        és az azt követő ebédre. Nagyon boldogak lennénk, ha velünk ünnepelnétek
        ezen a jeles napon.
      </p>

      <div className="border-dashed border border-orange-500 w-full" />

      <ul className="w-full space-y-2">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex w-full items-center justify-between gap-2"
          >
            <p className="text-6xl">{event.icon}</p>
            <div className="w-full flex items-center justify-between">
              <div>
                <p>{event.name}</p>
                <p className="text-xs text-stone-400">{event.location}</p>
              </div>
              <p className="font-bold">{event.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flip-card">
        <div className="flip-card-inner">
          <Front />
          <Back />
        </div>
      </div>
    </div>
  );
}
