import styles from "./SplashPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { Link } from "react-router-dom";
import { routePaths } from "../../utils";
import love_icon from "../../assets/images/love.png";
import { DesktopWarning } from "../../Components";
import love_heart from "../../assets/images/heart_image.png";

const SplashPage = () => {
  return (
    <AnimatedFadeInPage>
      <div className={styles.SplashPage}>
        <DesktopWarning />

        <div className={styles.Mobile}>
          <img src={love_heart} alt="" className={styles.love_heart_one} />

          <img src={love_heart} alt="" className={styles.love_heart_two} />

          <div className={styles.first_message}>
            <p className={styles.vals_text}>Joyeuse Saint-Valentin Maggie...</p>
            <img src={love_icon} alt="" className={styles.love_icon_message} />
          </div>

          <div className={styles.second_message}>
            <p className={styles.vals_text}>You too, my baby...</p>
            <img src={love_icon} alt="" className={styles.love_icon_message} />
          </div>

          <div className={styles.link_container}>
            <Link className={styles.continue_btn} to={routePaths.HOME}>
              <p className={styles.contine_text}>{`${`Continuez`}   😏😏`}</p>
              {/* <img src={love_icon} alt="" className={styles.love_icon} /> */}
            </Link>
          </div>

          <div className={styles.footer_container}>
            <p className={styles.footer_text}>
              ©Oghenetega. Tous droits réservés, 2024.
            </p>
          </div>
        </div>
      </div>
    </AnimatedFadeInPage>
  );
};

export default SplashPage;
