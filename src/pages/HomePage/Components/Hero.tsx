import styles from "../Styles/Hero.module.scss";
import { heroVideoUrl } from "../../../utils";
import useApp from "../../../hooks/useApp";
import { useRef } from "react";

const Hero = () => {
  const { heroVideoMuted } = useApp();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <header className={styles.Hero}>
      <div
        className={styles.left_side_container}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.main_text_container}>
          <span className={styles.span}>ojo</span>
          <span className={styles.span_viz}>viz</span>
        </div>

        <p className={styles.design_text}>Design & Visualization Studio</p>

        <button className={styles.desktop_start_btn}>Start Your Project</button>
      </div>

      <div className={styles.main_video_container}>
        <video
          className={styles.video_element}
          autoPlay={true}
          loop
          muted={heroVideoMuted}
          src={heroVideoUrl}
          ref={videoRef}
        ></video>
      </div>

      <div className={styles.mobile_start_btn}>Start Your Project</div>
    </header>
  );
};

export default Hero;
