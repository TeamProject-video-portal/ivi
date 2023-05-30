import { FC } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { Button } from "@/components/Button/Button";
import CountriesSlider from "../../CountriesSlider";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { selectMovies } from "@/Redux/movies/selectors";
import { setCountries } from "@/Redux/filter/actions";
import { selectFilters } from "@/Redux/filter/selectors";

const CountriesDropdown: FC = () => {
  const { countries } = useAppSelector(selectMovies);
  const { countries: countriesFilter } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.countriesDropdown}>
      <div className={styles.sliderRow}>
        <CountriesSlider />
      </div>
      <ul className={styles.content}>
        {countries.map((item, i) => (
          <ListItem
            item={item}
            key={item}
            icon={BsCheckLg}
            onClick={() => dispatch(setCountries(item))}
            activeFilter={countriesFilter.includes(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountriesDropdown;
