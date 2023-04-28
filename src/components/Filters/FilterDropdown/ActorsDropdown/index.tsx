import { FC } from 'react';
import styles from "./index.module.scss"
import SearchInput from '@/components/SearchInput';

const ActorsDropdown: FC = () => {
  return (
    <div className={styles.actorsDropdown}>
      <SearchInput placeholder='Актёры' />
    </div>
  );
};

export default ActorsDropdown;