import { NextPage } from "next";
import styles from "./index.module.scss";
import Head from "next/head";

const Admin = () => {
  return (
    <>
      <Head>
        <title>Страница администратора</title>
      </Head>
      <div className={styles.adminPage}>
        <h1>Страница администратора</h1>
      </div>
    </>
  )
}

export default Admin;