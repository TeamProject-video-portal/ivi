import { FC } from 'react';
import styles from "./index.module.scss"
import { Button } from './../../Button/Button';

type GenresButtonProps = {
  size: 'big' | 'small';
  genres: string;
  id: number;
}

const GenresButton: FC<GenresButtonProps> = ({ size, genres, id }) => {
  const iconCssClass = `nbl-icon ${styles.icon} genres-icon_${id}`;

  return (
    <div className={styles.container}>
      <Button className={size === 'big' ? styles.bigButton : styles.smallButton}>
        <div className={iconCssClass}></div>
        <div>{genres}</div>
      </Button>
    </div>
  );
};

export default GenresButton;