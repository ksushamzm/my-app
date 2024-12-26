import styles from "./MediaQueries.module.css";
import HeaderSearch from "../components/Landing/Navbar/HeaderSearch";
import ArticleHeader from "../components/Article/ArticleHeader";
import History from "../components/Article/History";
import ArticleInfoBellow from "../components/Article/ArticleInfoBellow";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Landing/Footer/Footer";

function Article() {
  return (
    <div className={styles["example-1"]}>
      <Helmet>
        <title key="title">Article</title>
        <meta key="description" name="description" content="Article" />
        <meta key="keywords" name="keywords" content="Article,page,keywords" />
      </Helmet>
      <HeaderSearch />
      <ArticleHeader />
      <History />
      <ArticleInfoBellow />
      <Footer />
    </div>
  );
}

export default Article;
