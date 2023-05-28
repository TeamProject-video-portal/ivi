import { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useAppSelector } from "@/hooks/hooks";
import { selectPersons } from "@/Redux/persons/selectors";
import { IPerson } from "@/types/types";

type SearchProps = {
  className?: string;
  placeholder?: string;
};

const resultsItem = [
  "Михалков",
  "Тарковский",
  "Бондарчук",
  "Кончаловский",
  "Данелия",
  "Соколов",
  "Васильев",
  "Михалков",
  "Тарковский",
  "Бондарчук",
  "Кончаловский",
  "Данелия",
  "Соколов",
  "Васильев",
];

const Search: FC<SearchProps> = ({ className, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<IPerson[]>([]);

  const { actors } = useAppSelector(selectPersons);

  useEffect(() => {
    if (searchValue) {
      setResults((state) =>
        actors.filter((item) =>
          item.personLang[0].personName.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else {
      setResults([]);
    }
  }, [searchValue]);

  return (
    <div className={className}>
      <SearchInput
        placeholder={placeholder}
        className={styles.search}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <SearchResults placeholder={placeholder} className={styles.search} results={results} />
    </div>
  );
};

export default Search;
