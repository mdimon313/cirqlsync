import Container from "@/components/Container";
import { aboutContent } from "@/datas";
import Link from "next/link";

export default function About(params) {
  return (
    <>
      <section className="py-20 bg-gray-100 dark:bg-[#0a0a0a]">
        <Container>
          <div className="h-20 text-center">
            <h2 className="text-3xl font-bold dark:text-slate-50">
              <Link
                href={"/"}
                className="hover:text-red-500 hover:underline transition-all"
              >
                Home
              </Link>{" "}
              \ Abut
            </h2>
          </div>
        </Container>
      </section>
      <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <Container>
          <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1 sm:max-md:grid-cols-2 md:max-lg:grid-cols-2">
            {aboutContent.map((about) => (
              <div key={about.id} className="p-4">
                <div className="w-16 h-16 rounded-full border border-red-500 flex items-center justify-center">
                  <span className="text-3xl">{about?.icon}</span>
                </div>
                <div className="mt-4">
                  <h2 className="font-bold text-2xl">{about.title}</h2>
                  <p>{about.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
