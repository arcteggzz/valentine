import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import ojoviz_logo from "../../assets/images/ojoviz_logo.png";
import { routePaths } from "../../utils";
import useApp from "../../hooks/useApp";
import open_hamburger_icon from "../../assets/images/open_hamburger_icon.png";
import close_hamburger_icon from "../../assets/images/close_hamburger_icon.png";
import mute_icon from "../../assets/images/mute_icon.png";
import unmute_icon from "../../assets/images/unmute_icon.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const {
    mobileNavbarOpen,
    toggleMobileNavbar,
    setHeroVideoMuted,
    heroVideoMuted,
  } = useApp();
  const { pathname } = useLocation();

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.Navbar_container}>
          <Link to={routePaths.HOME} className={styles.logo_icon}>
            <img src={ojoviz_logo} alt="Ojoviz home logo" />
          </Link>

          {/* desktop right hand side */}
          <div className={styles.desktop_right}>
            {/* desktop navlinks  */}

            {pathname === "/" && (
              <button
                className={styles.mute_btn}
                onClick={() => setHeroVideoMuted(!heroVideoMuted)}
              >
                <img
                  src={heroVideoMuted ? unmute_icon : mute_icon}
                  alt={heroVideoMuted ? "unmute icon" : "muted icon"}
                  className={styles.mute_icon}
                />
              </button>
            )}

            <div className={styles.navLinks_Desktop}>
              <NavLink
                to={`${routePaths.HOME}${routePaths.HASH_ID.aboutVals}`}
                className={styles.inactive_NavLink}
              >
                About Vals
              </NavLink>
              <NavLink
                to={`${routePaths.HOME}${routePaths.HASH_ID.beMyVals}`}
                className={({ isActive }) =>
                  isActive ? styles.active_NavLink : styles.inactive_NavLink
                }
              >
                Be My Vals
              </NavLink>
            </div>

            {/* mobile hamburger controller */}
            <button
              onClick={() => toggleMobileNavbar()}
              className={styles.hamburger}
            >
              <img
                src={
                  mobileNavbarOpen ? close_hamburger_icon : open_hamburger_icon
                }
                alt={
                  mobileNavbarOpen
                    ? "Close Hamburger Icon"
                    : "Open Hamburger Icon"
                }
              />
            </button>
          </div>
        </div>

        {/* add the mobile navbar that slides in here */}
        <div
          className={
            mobileNavbarOpen ? styles.mobile_Nav_Open : styles.mobile_Nav_Closed
          }
        >
          <section className={styles.Navlinks_Mobile}>
            <NavLink
              to={`${routePaths.HOME}${routePaths.HASH_ID.aboutVals}`}
              className={styles.mobile_single_NavLink}
            >
              About ValS
            </NavLink>
            <NavLink
              to={`${routePaths.HOME}${routePaths.HASH_ID.beMyVals}`}
              className={styles.mobile_single_NavLink}
            >
              Be My val
            </NavLink>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
