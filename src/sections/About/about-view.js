"use client";

import { _members, _brandsColor, _testimonials } from "src/_mock";

import About from "./about/about";
import AboutOurVision from "./about/about-our-vision";
import AboutCoreValues from "./about/about-core-values";
import AboutStory from "./about/about-story";
import TeamAbout from "./team/team-about";
import Footer from "src/layouts/main/footer";

// ----------------------------------------------------------------------

export default function AboutUs() {
  return (
    <>
      {/* <About /> */}

      {/* <AboutOurVision /> */}

      <AboutCoreValues />

      <AboutStory />

      <TeamAbout members={_members} />
      <Footer />
    </>
  );
}
