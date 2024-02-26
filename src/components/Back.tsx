import { events } from "@/data/events";
import { Icon } from "./Icon";

export const Back = () => (
  <div className="rounded-xl flip-card-back p-4 bg-stone-200 flex flex-col items-center justify-center bg-back bg-cover">
    <Intro />
    <div className="h-[2px] bg-gold w-[30%] my-4" />
    <ul className="w-full space-y-2">
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </ul>
    <div className="h-[2px] bg-gold w-[30%] my-4" />
    <Outro />

    <div className="block md:hidden text-stone-950 mt-4">Kattints mögém</div>
    <div className="hidden md:block text-stone-950 mt-6">
      <Icon name="rotate" />
    </div>
  </div>
);

// SUB COMPONENTS

const Intro = () => (
  <p>
    Szeretettel meghívunk a kisfiunk, <span className="font-bold">Nimród</span>{" "}
    keresztelőjére és az azt követő ebédre. Nagyon boldogak lennénk, ha velünk
    ünnepelnétek ezen a jeles napon.
  </p>
);

const Outro = () => (
  <p>
    Várjuk visszajelzésed Messengeren, vagy a{" "}
    <a
      className="underline underline-offset-4 font-bold decoration-sky-500"
      href="tel:0743641811"
    >
      321-678-952
    </a>{" "}
    telefonszámon.
  </p>
);

const Event = (event: {
  id: number;
  name: string;
  time: string;
  location: string;
  icon: string;
}) => (
  <li key={event.id} className="w-full gap-2 first:mb-4">
    <div className="flex items-center">
      <div className="mr-4">
        <Icon name={event.icon} />
        <p className="font-bold mt-1">{event.time}</p>
      </div>

      <div className="text-left">
        <p className="font-bold text-lg">{event.name}</p>
        <p className="text-stone-500 text-sm">{event.location}</p>
      </div>
    </div>
  </li>
);
