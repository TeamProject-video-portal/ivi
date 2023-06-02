import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IPerson } from "@/types/types";
import { useRouter } from "next/router";

type Props = {
  person: IPerson;
};

const PosterPerson: FC<Props> = ({ person }) => {
  const router = useRouter();
  const personNameLang = person.personLang[0].personName;
  const name = personNameLang.match(/.*\s/i) || personNameLang;
  const surname = personNameLang.slice(name[0].length);

  return (
    <Link
      href={`/person/${person.id}?lang=${router.asPath.includes("lang=en") ? "en" : "ru"}`}
      className={styles.container}
    >
      <div className={styles.poster}>
        <Image
          src={person.personPicture}
          alt=""
          className={styles.img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
        <div className={styles.label}>{person.films.length}</div>
      </div>
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.surname}>{surname}</div>
        <div className={styles.countFilms}>{person.films.length} фильма(ов)</div>
      </div>
    </Link>
  );
};

export default PosterPerson;
