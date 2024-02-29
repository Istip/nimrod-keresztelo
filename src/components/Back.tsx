import { events } from "@/data/events";
import { Icon } from "./Icon";

export const Back = () => (
  <div className="rounded-xl flip-card-back p-4 bg-stone-200 flex flex-col items-center justify-center bg-front bg-cover relative">
    <Intro />
    <div className="h-[2px] bg-gold w-[30%] my-4" />
    <ul className="w-full space-y-2">
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </ul>
    <div className="h-[2px] bg-gold w-[30%] my-4" />
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
    ünnepelnétek ezen a jeles napon.
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
        <a
          href={event.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center transition-all gap-0.5 hover:gap-3 text-sky-700 font-black text-xs"
        >
          Elérhetőség
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8415 12L10.1204 8.8254C9.94067 8.61574 9.96495 8.30009 10.1746 8.12038C10.3843 7.94067 10.6999 7.96495 10.8796 8.17461L13.8796 11.6746C14.0401 11.8619 14.0401 12.1382 13.8796 12.3254L10.8796 15.8254C10.6999 16.0351 10.3843 16.0593 10.1746 15.8796C9.96495 15.6999 9.94067 15.3843 10.1204 15.1746L12.8415 12Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  </li>
);
