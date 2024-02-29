import { events } from "@/data/events";
import { Icon } from "./Icon";

export const Back = () => (
  <div className="rounded-xl flip-card-back p-4 bg-stone-200 flex flex-col items-center justify-center bg-back bg-cover relative">
    <Intro />
    <ul className="w-full space-y-2 my-6">
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </ul>
    <Outro />

    <div className="absolute bottom-4">
      <div className="block md:hidden text-stone-950 mt-4">Kattints mögém</div>
      <div className="hidden md:block text-stone-950 mt-6">
        <Icon name="rotate" />
      </div>
    </div>
  </div>
);

// SUB COMPONENTS

const Intro = () => (
  <p>
    Szeretettel meghívunk a kisfiunk, <span className="font-bold">Nimród</span>{" "}
    keresztelőjére és az azt követő ebédre. Nagyon boldogak lennénk, ha velünk
    ünnepelnél a kedves családoddal ezen a jeles napon.
  </p>
);

const Outro = () => (
  <p>
    Várjuk visszajelzésed Messengeren, vagy a{" "}
    <a
      className="underline underline-offset-4 font-bold decoration-sky-500"
      href="tel:+3606204157184"
    >
      06204157184
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
  url: string;
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
