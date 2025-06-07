import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilterValue } from '../../redux/filtersSlice';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBox() {
  const dispatch = useDispatch();

  const debouncedChange = useDebouncedCallback((value) => {
    dispatch(changeFilterValue(value));
  }, 500);

  return (
    <>
      <p className={styles.searchBoxDescr}>Find contacts by name</p>
      <input
        className={styles.inputSearchBox}
        type="text"
        onChange={(event) => debouncedChange(event.target.value)}
      />
    </>
  );
}
