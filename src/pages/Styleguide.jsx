import styles from "./MediaQueries.module.css";
import React from "react";
import TitleHeader from "../components/Styleguide/TitleHeader";
import IdentityFeature from "../components/Styleguide/IdentityFeature";
import LogoBlock from "../components/Styleguide/LogoBlock";
import TypographySection from "../components/Styleguide/FontSection";
import Grid from "../components/Styleguide/Grid";
import ColorPalette from "../components/Styleguide/ColorPalette";
import PatternsSection from "../components/Styleguide/Patterns";
import Photos from "../components/Styleguide/Photos";

import "../components/Styleguide/Styleguide.css";
import { Helmet } from "react-helmet-async";

function Styleguide() {
  return (
    <div className={styles["example-1"]}>
      <Helmet>
        <title key="title">Style Guide</title>
        <meta key="description" name="description" content="styleguide" />
        <meta
          key="keywords"
          name="keywords"
          content="styleguide,page,keywords"
        />
      </Helmet>
      <TitleHeader />
      <IdentityFeature />
      <LogoBlock />
      <TypographySection />
      <Grid />
      <ColorPalette />
      <Photos />
      <PatternsSection />
    </div>
  );
}

export default Styleguide;
