import { FC, useState, useRef, ChangeEvent } from 'react';
import styles from './index.module.scss';
import { MdSearch } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';

type SearchInputProps = {
  className?: string;
  placeholder?: string
}

const SearchInput: FC<SearchProps> = ({ className, placeholder }) => {
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickClear = () => {
    setSearch('');
    inputRef.current?.focus();
  };

  const onFocusHandler = () => {
    inputRef.current?.focus();
    labelRef.current?.classList.add(`${styles.active}`);
  };

  return (
    <div className={[styles.search, className].join(' ')} onFocus={onFocusHandler}>
      <div className={`${styles.search__placeholder}`} ref={labelRef} onClick={onFocusHandler}>{placeholder}</div>
      <input
        className={styles.search__input}
        onChange={onChangeInput}
        value={search}
        type="text"
        ref={inputRef}
      />
      {search ? <TfiClose className={styles.search__close} onClick={onClickClear} /> : <MdSearch className={styles.search__icon} />}

    </div>
  );
};

export default SearchInput;