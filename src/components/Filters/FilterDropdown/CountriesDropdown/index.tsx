import { FC } from "react";
import styles from "./index.module.scss";
import ListItem from "../ListItem";
import { BsCheckLg } from "react-icons/bs";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { Button } from "@/components/Button/Button";
import CountriesSlider from "../../CountriesSlider";
import { countries } from "@/data/filters";

const CountriesDropdown: FC = () => {
  return (
    <div className={styles.countriesDropdown}>
      <div className={styles.sliderRow}>
        <CountriesSlider />
      </div>
      <ul className={styles.content}>
        {countries.map((item, i) => (
          <ListItem item={item} key={i} icon={BsCheckLg} />
        ))}
      </ul>
    </div>
  );
};

export default CountriesDropdown;
