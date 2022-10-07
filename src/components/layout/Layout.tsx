import Head from "next/head";
import React from "react";
import Header from "../header";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Good Doctor App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <Header />
          
      <div>{props.children}</div>
    </>
  );
};

export default Layout;