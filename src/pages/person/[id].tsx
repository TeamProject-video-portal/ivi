import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { GetServerSideProps } from "next";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import styles from "./index.module.scss";
import Description from "@/components/Description";
import Carousel from "@/components/Catalog/Carousel";
import { Button } from '@/components/Button/Button';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/Breadcrumbs';
import Filmography from '@/components/Filmography';
import { IPerson } from '@/types/types';

const personImage = require("../../images/diKaprio.webp");

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id || 1;
  const response = await fetch(`http://localhost:8000/persons/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { person: data as IPerson },
  }
};

type PersonProps = {
  person: IPerson,
}

const Person: FC<PersonProps> = ({ person }) => {
  const { t } = useTranslation();

  const breadcrumbs: Breadcrumb[] = [
    { item: `${person.films.length} ${t('person.count_movies')}`, path: "#filmography" },
    { item: `${t('person.biography')}`, path: "#" },
  ];

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

  return (
    <>
      <Head>
        <title>Страница актера или режиссера</title>
      </Head>
      <div className={styles.container}>
        <Link href={'/'}>
          <Button className={styles.backBtn}>
            <div className={`nbl-icon nbl-icon_arrowLeft_8x20 nbl-simpleControlButton__nbl-icon ${styles.backBtn__icon}`}></div>
            <div>{t('buttons.back_btn')}</div>
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