import { FC, MouseEventHandler } from "react";
import styles from "./index.module.scss";
import { Button } from "./../../Button/Button";

type GenresButtonProps = {
  size: "big" | "small";
  genres: string;
  id: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const GenresButton: FC<GenresButtonProps> = ({ size, genres, id, onClick }) => {
  const iconCssClass = `nbl-icon ${styles.icon} genres-icon_${id}`;

  return (
    <div className={styles.container}>
      <Button className={size === "big" ? styles.bigButton : styles.smallButton} onClick={onClick}>
        <div className={iconCssClass}></div>
        <div className={styles.text}>{genres}</div>
      </Button>
    </div>
  );
};

export default GenresButton;
