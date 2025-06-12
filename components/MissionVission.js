import VisionIcon from "@/public/vission/vc.png";
import StrategyIcon from "@/public/vission/fgf.png";
import MissionIcon from "@/public/vission/social-media.png";
import Image from "next/image";
import Container from "./Container";
export default function MissionVission() {
  const cards = [
    {
      id: 1,
      title: "Vision",
      desc: "To be the leading provider of innovative IT solutions, transforming businesses through technology excellence.",
      img_src: VisionIcon,
    },
    {
      id: 2,
      title: "Strategy",
      desc: "We leverage cutting-edge technologies and a customer-centric approach to provide comprehensive IT solutions, ensuring sustained growth and excellence in all our services.",
      img_src: StrategyIcon,
    },
    {
      id: 3,
      title: "Mission",
      desc: "To deliver top-tier IT services that empower our clients to achieve their business goals with efficiency, reliability, and innovation.",
      img_src: MissionIcon,
    },
  ];
  return (
    <section className="py-16">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden shadow p-4 rounded-md"
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
