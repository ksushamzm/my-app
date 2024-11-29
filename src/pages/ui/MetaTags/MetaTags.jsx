import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function MetaTags({
  title = "Main Page",
  description = "Main page description",
  keywords = "main,page,keywords",
}) {
  const [meta, setMeta] = useState({
    title,
    description,
    keywords,
  });

  return meta ? (
    <Helmet>
      {meta?.title ? <title key="title">ECHO</title> : null}
      {meta?.description ? (
        <meta key="description" name="description" content="Project" />
      ) : null}
      {meta?.keywords ? (
        <meta key="keywords" name="keywords" content="echo" />
      ) : null}

      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      {title ? <meta property="og:title" content="Echo" /> : null}
      {description ? (
        <meta property="og:description" content="The app" />
      ) : null}

      <meta property="og:image" content="./icons/ECHO.svg" />
      <meta property="og:image.type" content="image/svg" />
      <meta property="og:image:width" content="192" />
      {title ? (
        <meta property="og:image:all" content={`Image og Echo site`} />
      ) : null}
    </Helmet>
  ) : null;
}
