import { FC } from 'react';
import styles from './index.module.scss';
import ListItem from '../ListItem';
import { BsCheckLg } from "react-icons/bs";
import GenresSlider from '../../GenresSlider';
import { genres } from '@/data/filters';


const GenresDropdown: FC = () => {
  return (
    <div className={styles.genresDropdown}>
      <div className={styles.sliderRow}>
        <GenresSlider />
      </div>
      <ul className={styles.content}>
        {genres.map((item, i) => <ListItem href='/' item={item.title} key={i} icon={BsCheckLg} />)}
      </ul>
    </div>
  );
};

export default GenresDropdown;
