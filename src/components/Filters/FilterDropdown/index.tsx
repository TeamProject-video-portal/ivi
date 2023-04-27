import { FC, ReactNode } from 'react';
import styles from './index.module.scss'

type FilterDropdownProps = {
  children?: ReactNode | ReactNode[];
};

const FilterDropdown: FC<FilterDropdownProps> = ({ children }) => {
  return (
    <div className={styles.submenu}></div>
  );
};

export default FilterDropdown;