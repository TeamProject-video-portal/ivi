import { FC, useState } from 'react';
import styles from "./index.module.scss"
import { Button } from '../../Button/Button';
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

type FilterItemProps = {
  item?: any;
}

const FilterItem: FC<FilterItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Button className={`${styles.filtersItem} ${isOpen && styles.filtersItem_active}`} onClick={() => setIsOpen(!isOpen)}>
      {item}
      {isOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
    </Button>
  );
};

export default FilterItem;