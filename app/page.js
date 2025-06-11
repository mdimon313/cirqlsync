import Image from "next/image";
import Link from "next/link";
import Teamwork from "/public/teamwork.png";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
      <div className="py-16">
        <h1 className="text-4xl font-extrabold text-left text-slate-950">
          Business Growth
        </h1>
        <h2 className="text-4xl font-extrabold text-left text-slate-950">
          we take care your
        </h2>
        <p className="mt-4 lg:text-left md:text-center text-slate-800">
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
