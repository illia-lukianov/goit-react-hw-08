import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilterValue } from '../../redux/filters/slice';
import { useDebouncedCallback } from 'use-debounce';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import clsx from 'clsx';

export default function SearchBox() {
  const dispatch = useDispatch();

  const debouncedChange = useDebouncedCallback((value) => {
    dispatch(changeFilterValue(value));
  }, 500);

  const [searchBoxIsOpen, setSearchBoxIsOpen] = useState(false);

  const toggleSeachBox = () => setSearchBoxIsOpen((prevState) => !prevState);

  const activeStyleSearchBox = clsx(searchBoxIsOpen && styles.container);

  return (
    <>
      {!searchBoxIsOpen ? (
        <FcSearch
          className={styles.searchBoxIcon}
          onClick={() => toggleSeachBox()}
        />
      ) : (
        <div className={activeStyleSearchBox}>
          <FcSearch
            className={styles.searchBoxIcon}
            onClick={() => toggleSeachBox()}
          />
          <input
            className={styles.inputSearchBox}
            id="filter"
            type="text"
            onChange={(event) => debouncedChange(event.target.value)}
          />
        </div>
      )}
    </>
  );
}
