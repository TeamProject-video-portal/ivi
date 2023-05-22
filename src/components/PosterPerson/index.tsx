import { FC } from 'react';
import styles from "./index.module.scss"
import Image from "next/image";
import Link from 'next/link';
import { IPerson } from '@/types/types';

type Props = {
  person: IPerson;
};

const PosterPerson: FC<Props> = ({ person }) => {
  console.log('person', person);
  const personNameLang = person.personLang[0].personName;
  const name = personNameLang.match(/.*\s/i) || personNameLang;
  const surname = personNameLang.slice(name[0].length);

  return (
    <Link href={`/person/${person.id}`} className={styles.container}>
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
        <div className={styles.countFilms}>{person.films.length} фильма</div>
      </div>
    </Link>
  );
};

export default PosterPerson;