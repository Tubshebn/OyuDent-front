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
import TravelContactInfo from "./contact/travel-contact-info";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "src/config-global";
import CareerLandingTopCompanies from "../About/_career/landing/career-landing-top-companies";

// ----------------------------------------------------------------------

export default function HomeLandingView() {
  const [blog, setBlog] = useState([]);
  const [clients, setClients] = useState([]);
  const [banner, setBanner] = useState([]);
  const [specialProduct, setSpecialProduct] = useState([]);

  useEffect(() => {
    getBlogList();
    getClientList();
    getHero();
    getHotDeal();
  }, []);

  const getHero = () => {
    try {
      axios.get(`${BASE_URL}v1/banner`).then((res) => {
        setBanner(res?.data);
      });
    } catch (error) {
      return;
    }
  };
  const getHotDeal = () => {
    try {
      axios.get(`${BASE_URL}v1/content/special-product`).then((res) => {
        setSpecialProduct(res?.data);
      });
    } catch (error) {
      return;
    }
  };

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
      <HomeLandingHero banner={banner} />
      <HomeLandingHotDealToday specialProduct={specialProduct} />
      <CareerLandingTopCompanies clients={clients} />
      <SupportView tours={_tours.slice(0, 5)} />
      <HomeLandingPopularProducts posts={blog.slice(0, 8)} />
      <HomeLandingAbout />
      <TravelContactInfo />
    </>
  );
}
