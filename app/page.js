import Image from "next/image";
import Link from "next/link";
import Teamwork from "/public/teamwork.png";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
      <div className="py-16 dark:text-slate-50">
        <h1 className="text-4xl font-extrabold md:text-center lg:text-left text-slate-950 dark:text-slate-50">
          Business Growth
        </h1>
        <h2 className="text-4xl font-extrabold md:text-center lg:text-left text-slate-950 dark:text-slate-50">
          we take care your
        </h2>
        <p className="mt-4 md:text-center lg:text-left text-slate-800 dark:text-slate-50">
          We are diligently working towards delivering effective and
          cutting-edge solutions that not only meet the aspirations of our
          clients but also bolster the growth of their businesses.
        </p>
        <div className="mt-4">
          <Link
            href={"/about"}
            className="px-8 py-3 bg-red-600 text-white rounded-md font-semibold"
          >
            Discover More
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Image src={Teamwork} alt="teamwork" width={"100%"} height={"100%"} />
      </div>
    </div>
  );
}
