import HeaderSearch from "../components/Landing/Navbar/HeaderSearch";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import styles from "./MediaQueries.module.css";
import { Helmet } from "react-helmet-async";

export default function Error() {
  return (
    <div className={styles["example-1"]}>
      <Helmet>
        <title key="title">Error</title>
        <meta key="description" name="description" content="bla" />
        <meta key="keywords" name="keywords" content="error,page,keywords" />
      </Helmet>
      <HeaderSearch />
      <SplashScreen />
    </div>
  );
}
