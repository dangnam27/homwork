import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import style from "../../components/layout.module.css";
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First Post</h1>
      <h2 className={style.title}>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
