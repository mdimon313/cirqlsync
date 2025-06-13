import Image from "next/image";
import Container from "./Container";
import { missionCards } from "@/datas";
export default function MissionVission() {
  return (
    <section className="py-16 bg-slate-100 dark:bg-[#0a0a0a]">
      <Container>
        <div className="grid lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {missionCards.map((card) => (
            <div
              key={card.id}
              className="border border-slate-300 dark:border-slate-800 hover:-translate-y-4 transition-all overflow-hidden shadow hover:shadow-2xl p-4 rounded-md"
            >
              <div className="grid justify-center mb-4">
                <Image src={card.img_src} alt={card.title} width={"100"} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 dark:text-slate-50 text-3xl text-center">
                  {card.title}
                </h2>
                <p className="text-slate-900 dark:text-slate-50 mt-2 text-center">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
