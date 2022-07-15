import type { NextPage } from "next";
import Head from "next/head";
import { gql } from "@apollo/client";

import Bucket from "../src/components/templates/Bucket";
import Carousel from "../src/components/UI/organisms/Carousel";
import { Program } from "../src/interfaces/program.interfaces";
import client from "../apollo-client";

interface HomeProps {
  programs: Program[];
}

const Home: NextPage<HomeProps> = ({ programs }) => {
  return (
    <>
      <Head>
        <title>TF1 Interview</title>
        <meta name="description" content="TF1 Interview Carousel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Bucket>
          <Carousel programs={programs} />
        </Bucket>
      </main>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Programs {
        program {
          id
          name
          thumnail {
            id
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      programs: data.program,
    },
  };
}
