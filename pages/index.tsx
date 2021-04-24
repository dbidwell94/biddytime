import Head from "next/head";
import { useSelector } from "react-redux";
import AuthModal from "../components/AuthModal";
import Navbar from "../components/Navbar";
import React from "react";

export default function Index() {
  const { authModalOpen } = useSelector((state) => state.auth);

  return (
    <>
      <Head>
        <meta name="description" content="A easy-to-use time tracking platform" />
      </Head>
      <Navbar />
      {authModalOpen && <AuthModal />}
    </>
  );
}
