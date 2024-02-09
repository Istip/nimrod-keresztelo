import { Back } from "@/components/Back";
import { Front } from "@/components/Front";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen font-default">
      <div className="flip-card">
        <div className="flip-card-inner">
          <Front />
          <Back />
        </div>
      </div>
    </div>
  );
}
