import Container from "./Container";
import Title from "./Title";
import { services } from "@/datas";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="py-16 bg-slate-100">
      <Container>
        <Title title={"Our Featured Services"} />
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-3 grid-cols-3 gap-4 mt-12">
          {services.map((serv) => (
            <div key={serv.id} className="flex gap-4">
              <div className="w-[48px]">
                <Image src={serv.img_src} alt={serv.title} />
              </div>
              <div className="flex-1">
                <Link
                  href={serv.url}
                  className="mb-2 hover:text-red-500 transition-all block"
                >
                  <h2 className="text-2xl font-bold dark:text-slate-50">
                    {serv.title}
                  </h2>
                </Link>
                <p className="dark:text-slate-50">{serv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
