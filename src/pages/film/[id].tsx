import { Button } from "@/components/Button/Button";
import Description from "@/components/Description";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

const Film = () => {
  //console.log('router: ', router);

  return (
    <>
      <Head>
        <title>Страница фильма</title>
      </Head>
      <div className={styles.container}>123</div>
    </>
  );
};

export default Film;
