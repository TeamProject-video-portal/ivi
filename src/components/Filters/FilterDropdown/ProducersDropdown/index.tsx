import { FC } from 'react';
import styles from "./index.module.scss"
import Search from '@/components/Search';

const ProducersDropdown: FC = () => {
  return (
    <div className={styles.producersDropdown}>
      <Search placeholder='Режиссёр' className={styles.search} />
    </div>
  );
};

export default ProducersDropdown;