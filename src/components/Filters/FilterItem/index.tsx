import { FC, useState, Dispatch, SetStateAction } from 'react';
import styles from "./index.module.scss"
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { Button } from '../../Button/Button';
import FilterDropdown from '../FilterDropdown';

type FilterItemProps = {
  item?: any;
  isOpen?: string;
  setIsOpen?: Dispatch<SetStateAction<string>>;
}

const FilterItem: FC<FilterItemProps> = ({ item, isOpen, setIsOpen }) => {

  const onClickhandler = () => {
    setIsOpen && setIsOpen(state => state === item.title ? '' : item.title)
  }

  return (
    <div className={styles.filtersItem}>
      <Button
        className={`${styles.content} ${isOpen === item.title && styles.content_active}`}
        onClick={onClickhandler}>
        {item.value}
        {isOpen === item.title ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
      </Button>
      {isOpen === item.title && <FilterDropdown filter={item.title} />}
    </div>
  );
};

export default FilterItem;