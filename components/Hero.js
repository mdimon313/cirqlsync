import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Teamwork from "/public/teamwork.png";

export default function Heor() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
          <div className="py-16 dark:text-slate-50">
            <h1 className="text-4xl font-extrabold max-md:text-3xl max-md:text-center max-lg:text-left text-slate-950 dark:text-slate-50">
              Business Growth
            </h1>
            <h2 className="text-4xl font-extrabold max-md:text-2xl max-md:text-center max-lg:text-left text-slate-950 dark:text-slate-50">
              we take care your
            </h2>
            <p className="mt-4 max-md:text-center max-lg:text-left text-slate-800 dark:text-slate-50">
              We are diligently working towards delivering effective and
              cutting-edge solutions that not only meet the aspirations of our
              clients but also bolster the growth of their businesses.
            </p>
            <div className="mt-4 max-md:w-full max-md:flex max-md:justify-center">
              <Link
                href={"/about"}
                className="px-8 py-3 max-md:py-2 max-md:px-6 max-md:text-[12px] bg-red-600 text-white rounded-md font-semibold"
              >
                Discover More
              </Link>
            </div>
          </div>
          <div className="p-4">
            <Image
              src={Teamwork}
              alt="teamwork"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
