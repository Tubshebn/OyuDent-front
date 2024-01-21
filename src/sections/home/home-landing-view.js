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
import HomeEvent from "./components/home-events";
import EcommerceCheckoutPaymentMethod from "../_ecommerce/checkout/ecommerce-checkout-payment-method";

// ----------------------------------------------------------------------

export default function HomeLandingView() {
  const [blog, setBlog] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getBlogList();
    getClientList();
  }, []);

  const getBlogList = () => {
    try {
      axios.get(`${BASE_URL}v1/blog`).then((res) => {
        setBlog(res?.data);
      });
    } catch (error) {
      return;
    }
  };

  const getClientList = () => {
    try {
      axios.get(`${BASE_URL}v1/content/partner`).then((res) => {
        setClients(res?.data);
      });
    } catch (error) {
      return;
    }
  };

  return (
    <>
      <HomeLandingHero />
      <HomeLandingHotDealToday />
      <HomeAboutOurClients clients={clients} />
      <SupportView tours={_tours.slice(0, 5)} />
      <HomeLandingPopularProducts posts={blog.slice(0, 8)} />
      <HomeLandingAbout />
      <TravelContactInfo />
    </>
  );
}
