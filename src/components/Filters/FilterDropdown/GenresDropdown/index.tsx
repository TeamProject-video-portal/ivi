import { FC } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import GenresMinSlider from "../../GenresMinSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { setGenres } from "@/Redux/filter/actions";
import { selectFilters } from "@/Redux/filter/selectors";

const GenresDropdown: FC = () => {
  const { genres } = useAppSelector(selectMovies);
  const { genres: genresFilter } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.genresDropdown}>
      <div className={styles.sliderRow}>
        <GenresMinSlider />
      </div>
      <ul className={styles.content}>
        {genres.map((item, i) => (
          <ListItem
            item={item}
            key={item}
            icon={BsCheckLg}
            onClick={() => dispatch(setGenres(item))}
            activeFilter={genresFilter.includes(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default GenresDropdown;
