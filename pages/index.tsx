import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <>
      <Head>
        <meta name="description" content="A easy-to-use time tracking platform" />
      </Head>
      <Navbar />
    </>
  );
}
