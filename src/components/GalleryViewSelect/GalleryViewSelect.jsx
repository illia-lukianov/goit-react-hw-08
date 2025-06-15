import styles from './GalleryViewSelect.module.css';
import { HiViewGridAdd } from 'react-icons/hi';
import { HiViewList } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { changeView, openSelect } from '../../redux/galleryViewSelect/slice';
import {
  selectGalleryView,
  selectIsGalleryOpen,
} from '../../redux/galleryViewSelect/selectors';

export default function GalleryViewSelect() {
  const dispatch = useDispatch();
  const galleryView = useSelector(selectGalleryView);
  const galleryIsOpen = useSelector(selectIsGalleryOpen);
  return (
    <>
      {!galleryIsOpen ? (
        galleryView === 'list' ? (
          <HiViewList
            className={styles.galleryViewIcon}
            onClick={() => dispatch(openSelect())}
          />
        ) : (
          <HiViewGridAdd
            className={styles.galleryViewIcon}
            onClick={() => dispatch(openSelect())}
          />
        )
      ) : (
        <>
          <button
            className={styles.galleryViewBtn}
            onClick={() => dispatch(changeView('gallery'))}
          >
            <HiViewGridAdd className={styles.galleryViewIcon} />
          </button>
          <button
            className={styles.galleryViewBtn}
            onClick={() => dispatch(changeView('list'))}
          >
            <HiViewList className={styles.galleryViewIcon} />
          </button>
        </>
      )}
    </>
  );
}
