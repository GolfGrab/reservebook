import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HeroSvg from "../assets/HeroSvg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ReserveBook</title>
        <meta name="description" content="Generated by create-t3-app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-base-200/20">
        <section className="container mx-auto flex min-h-screen flex-col-reverse justify-between  py-16 lg:flex-row lg:px-10">
          {/* text */}
          <div className="flex flex-1 flex-col  justify-center   px-10 text-center lg:px-0 lg:text-left">
            <div className="text-5xl font-bold leading-none md:text-6xl">
              Find your dream hotel with{" "}
              <span className="text-primary">ReserveBook</span>
            </div>
            <div className="mt-6 mb-8 text-lg">
              the best way to book hotels online
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link className="btn-primary btn" href="/search">
                Book Now
              </Link>
              <button className="btn-outline btn">Learn More</button>
            </div>
          </div>
          {/* svg */}
          <div className="flex flex-1 flex-col  justify-center  text-center">
            <HeroSvg />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
