import { FC } from 'react';
import styles from "./index.module.scss"
import Link from 'next/link';
import ListItem from '../ListItem';
import { BiCircle } from "react-icons/bi";
import { TbCircleDot } from "react-icons/tb";

const years = [
  '2023 год',
  '2022 год',
  '2021 год',
  '2020 год',
  '2019 год',
  '2018 год',
  '2017 год',
  '2016 год',
  '2022-2023',
  '1980-1990',
  'до 1980',
];

const YearsDropdown: FC = () => {
  return (
    <div className={styles.yearsDropdown}>
      <ul className={styles.content}>
        <div className={styles.allYear}>
          <Link href={'/'}>Все годы</Link>
          <TbCircleDot />
        </div>
        {years.map((item, i) => <ListItem href='/' item={item} key={i} icon={BiCircle} />)}
      </ul>
    </div>
  );
};

export default YearsDropdown;