import { FC } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import GenresMinSlider from "../../GenresMinSlider";
import { genres } from "@/data/filters";

const GenresDropdown: FC = () => {
  return (
    <div className={styles.genresDropdown}>
      <div className={styles.sliderRow}>
        <GenresMinSlider />
      </div>
      <ul className={styles.content}>
        {genres.map((item, i) => (
          <ListItem href="/" item={item.title} key={item.id} icon={BsCheckLg} />
        ))}
      </ul>
    </div>
  );
};

export default GenresDropdown;
