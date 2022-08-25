import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Stack from "../components/Stack";

const Home: NextPage = () => {
  return (
    <div className="bg-primary h-screen text-gray-200">
      <Head>
        <title>Aayush Mohan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Aayush Mohan Frontend Web Developer"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React.js, Next.js"
        />
        <meta name="author" content="Aayush Mohan" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <Hero />
      <Stack />
      <Projects />
    </div>
  );
};

export default Home;
