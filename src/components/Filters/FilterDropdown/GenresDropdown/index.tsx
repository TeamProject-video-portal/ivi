import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import GenresMinSlider from "../../GenresMinSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { resetFilters, setGenres } from "@/Redux/filter/actions";
import { selectFilters } from "@/Redux/filter/selectors";
import { TiPencil } from "react-icons/ti";
import { GiSave } from "react-icons/gi";
import { Button } from "@/components/Button/Button";
import { editGenresAction } from "@/Redux/movies/actions";

const GenresDropdown: FC = () => {
  const { genres } = useAppSelector(selectMovies);
  const genresCopy = [...genres];
  const { genres: genresFilter } = useAppSelector(selectFilters);
  // связать с правами пользователя
  const [adminMode, setAdminMode] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editGenres, setEditGenres] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const toEditMode = (): void => {
    setEditMode(true);
    setEditGenres((state) => genresCopy);
  };

  const saveGenres = (): void => {
    setEditMode(false);
    // внести изменения в БД
    dispatch(editGenresAction(editGenres));
  };

  const editItemHandler = (index: number, value: string): void => {
    setEditGenres((state) => {
      state[index] = value;
      return state;
    });
  };

  return (
    <div className={styles.genresDropdown}>
      <div className={styles.sliderRow}>
        <GenresMinSlider />
      </div>
      <div className={styles.content}>
        {adminMode && (
          <div className={styles.btns}>
            {editMode && (
              <Button color="purple" className={styles.button} title="сохранить">
                <GiSave onClick={saveGenres} />
              </Button>
            )}
            {!editMode && (
              <Button color="purple" className={styles.button} title="редактировать">
                <TiPencil onClick={toEditMode} />
              </Button>
            )}
          </div>
        )}

        {editMode ? (
          <ul className={styles.list} key={0}>
            {editGenres.length &&
              editGenres.map((item, index) => (
                <ListItem
                  item={item}
                  key={`${index}_${item}`}
                  icon={BsCheckLg}
                  editItem={(value) => {
                    editItemHandler(index, value);
                  }}
                  editMode={editMode}
                />
              ))}
          </ul>
        ) : (
          <ul className={styles.list} key={1}>
            {genres.map((item, index) => (
              <ListItem
                item={item}
                key={`${index}_${item}`}
                icon={BsCheckLg}
                onClick={() => dispatch(setGenres(item))}
                activeFilter={genresFilter.includes(item)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GenresDropdown;
