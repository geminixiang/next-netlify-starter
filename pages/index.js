import Head from "next/head";
import Link from "next/link";

import Footer from "@components/Footer";
import Layout, { siteTitle } from "@components/Layout";
import utilStyles from "@components/utils.module.css";

export default function Home() {
  return (
    <div className="container">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Link href={{ pathname: "/posts/first-post", query: { name: "Food by day" } }} shallow>
          <a>Food by day</a>
        </Link>
        <section className={utilStyles.headingMd}>
          <p>I'm Ying-Xiang Zhao.</p>{" "}
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}
