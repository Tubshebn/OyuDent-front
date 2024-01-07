"use client";

import {
  _brandsColor,
  _careerPosts,
  _coursePosts,
  _jobsByCategories,
  _testimonials,
  _tours,
} from "src/_mock";

import SupportView from "src/sections/support/view/support-view";
import HomeLandingHero from "./components/home-landing-hero";
import HomeLandingHotDealToday from "./components/home-landing-hot-deal-today";
import HomeLandingPopularProducts from "./components/home-landing-popular-products";
import HomeLandingAbout from "src/sections/home/components/home-landing-about";
import HomeAboutOurClients from "src/sections/home/components/home-about-our-clients";
import HomeLatestPosts from "src/sections/home/components/home-latest-posts";
import HomeContact from "src/sections/home/components/home-contact";
import TravelContactInfo from "./contact/travel-contact-info";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "src/config-global";
import CareerContactInfo from "../contact/career-contact-info";
import MarketingFeaturedPosts from "../blog/marketing/marketing-featured-posts";

// ----------------------------------------------------------------------

export default function HomeLandingView() {
  const [blog, setBlog] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = () => {
    try {
      setLoader(true);
      axios.get(`${BASE_URL}v1/blog`).then((res) => {
        setBlog(res?.data);
      });
    } catch (error) {
      return;
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <HomeLandingHero />
      <HomeLandingHotDealToday />
      {/* 
      <HomeEvent posts={_careerPosts.slice(0, 5)} /> */}
      <HomeAboutOurClients brands={_brandsColor} />
      <HomeLatestPosts posts={blog.slice(0, 8)} />
      <SupportView tours={_tours.slice(0, 5)} />
      <HomeLandingPopularProducts posts={blog.slice(0, 8)} />
      <HomeLandingAbout />
      <HomeContact />
    </>
  );
}
