import styles from "./DesktopWarning.module.scss";

const DesktopWarning = () => {
  return (
    <div className={styles.DesktopWarning}>
      <h1 className={styles.only_viewed}>
        This Website can only be viewed on a Mobile Device. Kindly switch to
        such a device.
      </h1>
    </div>
  );
};

export default DesktopWarning;
