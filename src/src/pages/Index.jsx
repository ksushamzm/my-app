import HeaderSearch from "../components/Landing/Navbar/HeaderSearch";
import FeedTitle from "../components/Landing/Header/Content";
import PostGrid from "../components/Landing/posts/PostsGrid";
import Footer from "../components/Landing/Footer/Footer";

export default function Index() {
  return (
    <div>
      <HeaderSearch />
      <FeedTitle />
      <PostGrid />
      <Footer />
    </div>
  );
}
