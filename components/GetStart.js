import Container from "./Container";
import ContactBg from "@/public/contact-bg.jpg";
import Link from "next/link";

export default function GetStart() {
  return (
    <section className={`py-20 bg-white dark:bg-[#0a0a0a]`}>
      <Container>
        <div className="text-center">
          <h2 className="dark:text-slate-50 text-2xl font-bold mb-4">
            Any plan to start a project
          </h2>
          <h2 className="dark:text-slate-50 text-5xl font-extrabold">
            Our Experts always <br /> ready to work with you
          </h2>
          <Link
            href={"/contact"}
            className="block mt-4 bg-red-600 w-36 mx-auto rounded-full py-2 hover:bg-red-500 transition-all hover:shadow-md text-white"
          >
            Get Started
          </Link>
        </div>
      </Container>
    </section>
  );
}
