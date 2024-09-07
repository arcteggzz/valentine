import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { DesktopWarning } from "../../Components";
import heor_image_no from "../../assets/images/hero_image.png";
import heor_image_yes from "../../assets/images/hero_image_two.png";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
// import audio1 from "../../assets/sounds/really_trying.wav";
import audio2 from "../../assets/sounds/careless_wisper.wav";

const HomePage = () => {
  const { width, height } = useWindowSize();
  const [saidYes, setSaidYes] = useState(false);

  const playAudio = () => {
    new Audio(audio2).play();
  };

  useEffect(() => {
    if (saidYes) playAudio();
  }, [saidYes]);

  return (
    <AnimatedFadeInPage>
      <main className={styles.HomePage}>
        <DesktopWarning />

        <div className={styles.Mobile}>
          <div className={styles.hero_image_container}>
            <img
              src={saidYes ? heor_image_yes : heor_image_no}
              alt=""
              className={styles.herom_image}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="000"
            />
          </div>

          <p
            className={styles.everyday_text}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Chaque jour avec toi c'est
          </p>
          <h4
            className={styles.valentine_text}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            La Saint-Valentin pour moi...
          </h4>

          <h4
            className={styles.question_text}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            Serez-vous le Val de Tega ?
          </h4>
          <p
            className={styles.mild_diss}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            French is the language of love so you can only say Oui.😂😂
          </p>

          <div className={styles.button_container}>
            <button className={styles.yes_btn} onClick={() => setSaidYes(true)}>
              <p className={styles.yes_text}>Oui</p>
            </button>
          </div>

          <div className={styles.semi_circle_bg}></div>

          {saidYes && (
            <div className={styles.confetti_container}>
              <Confetti width={width} height={height} />
            </div>
          )}
        </div>
      </main>
    </AnimatedFadeInPage>
  );
};

export default HomePage;
