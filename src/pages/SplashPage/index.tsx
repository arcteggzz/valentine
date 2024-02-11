import styles from "./SplashPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";

const SplashPage = () => {
  return (
    <AnimatedFadeInPage>
      <div className={styles.SplashPage}>
        <p className={styles.ppp}>Tega</p>
      </div>
    </AnimatedFadeInPage>
  );
};

export default SplashPage;
