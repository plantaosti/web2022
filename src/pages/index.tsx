import { gql } from "@apollo/client";
import { format } from "date-fns";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Farmacias } from "../components/Farmacias";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { client } from "../lib/apollo";

const plantos = gql`
  query plantoes {
    id
    datetimestart
    datetimeend
    farmacias {
      ... on Farmacia {
        id
        name
        neighborhood
        phone
      }
    }
  }
`;

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

export const getServerSideProps: GetServerSideProps = async () => {
  // const end = format(Date.now(), "yyyy-MM-d'T'12:00:00+00:00");
  // const { data } = await client.query({ query: plantos });
  // console.log(data);
  console.log(plantos);
  return {
    props: {
      plantoes: "oi",
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const {data} = await useGetPlantoesStartEndQuery({
//     variables: {
//       end
//     }
//   })

//   return {
//     props: { events: data.plantoes },
//   };
// };
