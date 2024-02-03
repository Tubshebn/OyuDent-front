"use client";

import { _members, _brandsColor, _testimonials } from "src/_mock";

import About from "./about/about";
import AboutOurVision from "./about/about-our-vision";
import AboutCoreValues from "./about/about-core-values";
import AboutStory from "./about/about-story";
import TeamAbout from "./team/team-about";
import Footer from "src/layouts/main/footer";
import TravelAboutOurVision from "./about/travel-about-our-mission";

// ----------------------------------------------------------------------

export default function AboutUs() {
  return (
    <>
      <About />

      {/* <TravelAboutOurVision /> */}

      <AboutCoreValues />

      {/* <AboutStory /> */}

      <TeamAbout members={_members} />
      <Footer />
    </>
  );
}
