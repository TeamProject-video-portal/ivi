import { FC, useState, useEffect } from 'react';
import styles from './index.module.scss';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

type SearchProps = {
  className?: string;
  placeholder?: string;
};

const resultsItem = [
  'Михалков',
  'Тарковский',
  'Бондарчук',
  'Кончаловский',
  'Данелия',
  'Соколов',
  'Васильев',
  'Михалков',
  'Тарковский',
  'Бондарчук',
  'Кончаловский',
  'Данелия',
  'Соколов',
  'Васильев',
];

const Search: FC<SearchProps> = ({ className, placeholder }) => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (searchValue) {
      setResults((state) => resultsItem.filter((item) => item.toLowerCase().includes(searchValue.toLowerCase())));
    } else {
      setResults([])
    }
  }, [searchValue]);

  return (
    <div className={className}>
      <SearchInput placeholder={placeholder} className={styles.search} searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResults placeholder={placeholder} className={styles.search} results={results} />
    </div>
  );
};

export default Search;
