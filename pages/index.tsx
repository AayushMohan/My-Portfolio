import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stack from "../components/Stack";

const Home: NextPage = () => {
  return (
    <div className="bg-primary h-screen text-gray-200">
      <Head>
        <title>Aayush Mohan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Stack />
    </div>
  );
};

export default Home;
