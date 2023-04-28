import { FC } from 'react';
import styles from "./index.module.scss"
import SearchInput from '@/components/SearchInput';

const ProducersDropdown: FC = () => {
  return (
    <div className={styles.producersDropdown}>
      <SearchInput placeholder='Режиссёры' />
    </div>
  );
};

export default ProducersDropdown;