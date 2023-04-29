import { FC } from 'react';
import styles from "./index.module.scss"
import Search from '@/components/Search';

const ActorsDropdown: FC = () => {
  return (
    <div className={styles.actorsDropdown}>
      <Search placeholder='Актёр' className={styles.search} />
    </div>
  );
};

export default ActorsDropdown;