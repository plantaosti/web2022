import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Slide />
      </main>
    </>
  );
};

export default Home;
