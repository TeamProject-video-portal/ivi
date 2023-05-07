import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { GetServerSideProps } from "next";
import styles from "./index.module.scss";
import Description from "@/components/Description";
import Carousel from "@/components/Catalog/Carousel";
import { Button } from '@/components/Button/Button';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/Breadcrumbs';
import Filmography from '@/components/Filmography';
import { IPerson } from '@/types/types';

const personImage = require("../../images/diKaprio.webp");
const truncText = (
  <p>
    Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев...
  </p>
);
const fullText = (
  <p>
    Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев Коэн «Внутри Льюина Дэвиса».
  </p>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id || 1;
  const response = await fetch(`http://localhost:8000/persons/${id}`);
  const data = await response.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { person: data as IPerson },
  }
};

const Person = ({ person }) => {

  console.log(person);

  const breadcrumbs: Breadcrumb[] = [
    { item: `${person.films.length} фильмов`, path: "#filmography" },
    { item: "Биография", path: "#" },
  ];

  return (
    <>
      <Head>
        <title>Страница актера или режиссера</title>
      </Head>
      <div className={styles.container}>
        <Link href={'/'}>
          <Button className={styles.backBtn}>
            <div className={`nbl-icon nbl-icon_arrowLeft_8x20 nbl-simpleControlButton__nbl-icon ${styles.backBtn__icon}`}></div>
            <div>Назад</div>
          </Button>
        </Link>
        <section className={styles.personContainer}>
          <div className={styles.imgContainer}>
            <Image src={personImage} alt="person" className={styles.img} fill></Image>
          </div>
          <h1 className={styles.title}>{person.actorLang[0].actorName}</h1>
          <div className={styles.title_en}>{person.actorLang[0].actorName}</div>
          <Description truncText={truncText} fullText={fullText} className={styles.description} />
          <div className={styles.breadcrumbsRow}>
            <Breadcrumbs breadcrumbs={breadcrumbs} type="films" del="&middot;" />
          </div>
          <div className={styles.filmographyRow}>
            <Filmography person={person} />
          </div>
        </section>
      </div>
    </>
  )
}

export default Person;