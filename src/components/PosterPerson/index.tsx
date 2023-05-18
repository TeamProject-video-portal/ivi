import { FC } from 'react';
import styles from "./index.module.scss"
import Image from "next/image";
import Link from 'next/link';
import { IPerson } from '@/types/types';

//const personImage = require("../../images/personImage.jpeg");

type Props = {
  person: IPerson;
};

const PosterPerson: FC<Props> = ({ person }) => {
  const personName = person.actorLang[0].actorName;
  const name = personName.match(/.*\s/i) || personName;
  const surname = personName.slice(name[0].length);

  return (
    <Link href={`/person/${person.id}`} className={styles.container}>
      <div className={styles.poster}>
        <Image
          src={person.actorPicture}
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