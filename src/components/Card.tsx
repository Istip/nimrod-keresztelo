import React from "react";

const Card = () => {
  const events = [
    {
      id: 1,
      name: "Templomi szertartás",
      time: "11:00",
      location: "Bikafalva, Református templom, Fő utca 1.",
      icon: "💒",
    },
    {
      id: 2,
      name: "Ebéd és ünnepség",
      time: "13:00",
      location: "Bögöz, Erdő Panzió, Fő utca 16.",
      icon: "🍽️",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="p-8 rounded-3xl bg-stone-100 max-w-screen-sm mx-4 flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-stone-700 text-2xl md:text-4xl">
          Nimród Keresztelője
        </h1>
        <p className="font-bold text-orange-500">2022.05.22 (szerda)</p>
        <p className="text-xs md:text-lg">
          Szeretettel meghívunk a kisfiunk, Nimród keresztelőjére és az azt
          követő ebédre. Nagyon boldogak lennénk, ha velünk ünnepelnétek ezen a
          jeles napon.
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
      </main>
    </div>
  );
};

export default Card;
