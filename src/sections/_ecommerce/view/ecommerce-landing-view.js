"use client";

import {
  _brandsColor,
  _careerPosts,
  _coursePosts,
  _jobsByCategories,
  _testimonials,
  _tours,
} from "src/_mock";

import EcommerceLandingHero from "../landing/ecommerce-landing-hero";
import EcommerceLandingSpecialOffer from "../landing/ecommerce-landing-special-offer";
import EcommerceLandingHotDealToday from "../landing/ecommerce-landing-hot-deal-today";
import EcommerceLandingPopularProducts from "../landing/ecommerce-landing-popular-products";
import MarketingAboutOurClients from "src/sections/_marketing/marketing-about-our-clients";
import ElearningLatestPosts from "src/sections/blog/elearning/elearning-latest-posts";
import CareerLatestPosts from "src/sections/blog/career/career-latest-posts";
import MarketingLandingAbout from "src/sections/_marketing/landing/marketing-landing-about";
import MarketingNewsletter from "src/sections/_marketing/marketing-newsletter";
import SupportView from "src/sections/support/view/support-view";

// ----------------------------------------------------------------------

export default function EcommerceLandingView() {
  return (
    <>
      <EcommerceLandingHero />

      <EcommerceLandingHotDealToday />

      <CareerLatestPosts posts={_careerPosts.slice(0, 5)} />

      <EcommerceLandingPopularProducts />

      <MarketingLandingAbout />

      <MarketingAboutOurClients brands={_brandsColor} />

      <EcommerceLandingSpecialOffer />

      <ElearningLatestPosts posts={_coursePosts.slice(0, 8)} />

      <SupportView tours={_tours.slice(0, 5)} />

      <MarketingNewsletter />
    </>
  );
}
