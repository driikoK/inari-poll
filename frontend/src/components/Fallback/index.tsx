import styles from './Fallback.module.scss';

const FallbackComponent = () => {
  return (
    <div className={`${styles.fallbackSpinner} ${styles.appLoader}`}>
      <div className={styles.fallbackBlob}>
        <div className={styles.logo} />
      </div>
    </div>
  );
};

export default FallbackComponent;
