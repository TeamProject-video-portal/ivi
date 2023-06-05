import { FC, useState, ChangeEvent } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./index.module.scss";

type Props = {
  item: string;
  icon?: IconType;
  editItem?: (value: string) => void;
  onClick?: () => void;
  activeFilter?: boolean;
  editMode?: boolean;
};

const ListItem: FC<Props> = ({ item, icon, editItem, onClick, activeFilter, editMode }) => {
  const IconItem = icon ? icon : undefined;
  const [inputGenre, setInputGenre] = useState<string>(item);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputGenre(event.target.value);
  };

  return (
    <>
      {!editMode ? (
        <li className={`${styles.list} ${activeFilter && styles.active}`}>
          <div className={styles.item} onClick={onClick}>
            {item}
          </div>
          {icon && IconItem && <IconItem />}
        </li>
      ) : (
        <li className={`${styles.list}`}>
          <input
            className={styles.input}
            type="text"
            defaultValue={inputGenre}
            onChange={onChangeInput}
            onBlur={() => editItem && editItem(inputGenre)}
          />
          {icon && IconItem && <IconItem />}
        </li>
      )}
    </>
  );
};

export default ListItem;
