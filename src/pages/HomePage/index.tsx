import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage, PublicPageLayout } from "../../utils";

const HomePage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.HomePage}>
        <PublicPageLayout>Tega</PublicPageLayout>
      </main>
    </AnimatedFadeInPage>
  );
};

export default HomePage;
