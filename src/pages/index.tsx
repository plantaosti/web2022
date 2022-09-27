import type { NextPage } from "next";
import Head from "next/head";
import { Farmacias } from "../components/Farmacias";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plantao STI - A Farmácia Aberta no Fim de Semana</title>
        <meta name="description" content="Farmácias de plantao" />
      </Head>
      <Header />
      <main className="mt-20">
        <Slide />
        <Farmacias />
      </main>
      <Footer />
    </>
  );
};

export default Home;
