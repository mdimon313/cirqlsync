import Image from "next/image";
import Container from "./Container";
import SideImg from "@/public/ideas/vbghhj.png";
import Development from "@/public/ideas/developer.png";
import Integration from "@/public/ideas/system.png";
import Responsibility from "@/public/ideas/reinforcement.png";

export default function Ideas() {
  const ideas = [
    {
      id: 1,
      title: "Development",
      desc: "Sustainable Development Projects: Implement an initiative to develop IT solutions that promote sustainability and environmental responsibility.",
      img_src: Development,
    },
    {
      id: 2,
      title: "Integration",
      desc: "Integrate technology solutions that help our clients and better serve our communities.",
      img_src: Integration,
    },
    {
      id: 3,
      title: "Responsibility",
      desc: "Offer services focused on responsible data management and protection. Develop tools and frameworks that ensure user privacy, data security, and compliance with the country regulations.",
      img_src: Responsibility,
    },
  ];
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="w-full">
            <Image src={SideImg} alt="vbghh" className="block w-full" />
          </div>
          <div className="p-4">
            <div className="mt-16">
              <h2 className="text-center font-extrabold text-4xl text-slate-900 dark:text-slate-50">
                We Provides Shortage
              </h2>
              <h2 className="text-center font-extrabold text-4xl text-slate-900 dark:text-slate-50">
                Remarkable Ideas!
              </h2>
            </div>
            <div className="mt-3">
              {ideas.map((idea) => (
                <div key={idea.id} className="flex gap-4 py-3">
                  <div className="w-14">
                    <Image
                      src={idea.img_src}
                      alt={idea.title}
                      className="block w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold hover:text-red-500 transition-all text-xl mb-4 text-slate-900 dark:text-slate-50">
                      {idea.title}
                    </h2>
                    <p className="text-slate-900 dark:text-slate-50">
                      {idea.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
