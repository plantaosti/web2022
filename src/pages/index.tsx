import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plantao STI</title>
        <meta name="description" content="Farmácias de plantao" />
      </Head>
      <Header />
      <main className="mt-20">
        <Slide />
      </main>
    </>
  );
};

export default Home;
