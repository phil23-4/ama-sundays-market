// components/layout.js
import Head from "next/head";
import Footer from "./Footer/footer";
import Nav from "./NavBar/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AMA Sundays Farmers Market</title>
        <meta
          name="description"
          content="Decentralizing Farmers Markets for sustainable agricultural development that leaves no one and no place behind"
          key="desc"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="h-full w-full overflow-y-auto bg-white px-4 text-gray-900 dark:bg-slate-900 dark:text-white/80 sm:px-6 md:px-8">
        {children}
      </main>

      <Footer />
    </>
  );
}
