import HeaderSearch from "../components/Landing/Navbar/HeaderSearch";
import FeedTitle from "../components/Landing/Header/Content";
import PostGrid from "../components/Landing/posts/PostsGrid";
import Footer from "../components/Landing/Footer/Footer";
import { Helmet } from "react-helmet-async";

export default function Index() {
  return (
    <div>
      <Helmet>
        <title key="title">Main Page</title>
        <meta key="description" name="description" content="bla" />
        <meta key="keywords" name="keywords" content="main,page,keywords" />
      </Helmet>
      <HeaderSearch />
      <FeedTitle />
      <PostGrid />
      <Footer />
    </div>
  );
}
