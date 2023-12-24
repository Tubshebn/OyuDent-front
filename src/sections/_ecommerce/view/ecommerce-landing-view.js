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
import EcommerceLandingTopProducts from "../landing/ecommerce-landing-top-products";
import EcommerceLandingSpecialOffer from "../landing/ecommerce-landing-special-offer";
import EcommerceLandingHotDealToday from "../landing/ecommerce-landing-hot-deal-today";
import EcommerceLandingFeaturedBrands from "../landing/ecommerce-landing-featured-brands";
import EcommerceLandingPopularProducts from "../landing/ecommerce-landing-popular-products";
import EcommerceLandingFeaturedProducts from "../landing/ecommerce-landing-featured-products";
import MarketingAboutOurClients from "src/sections/_marketing/marketing-about-our-clients";
import ElearningLatestPosts from "src/sections/blog/elearning/elearning-latest-posts";
import CareerLatestPosts from "src/sections/blog/career/career-latest-posts";
import TravelLandingHero from "src/sections/_travel/landing/travel-landing-hero";
import CareerLandingHotCategories from "src/sections/_career/landing/career-landing-hot-categories";
import MarketingAboutView from "src/sections/_marketing/view/marketing-about-view";
import MarketingLandingAbout from "src/sections/_marketing/landing/marketing-landing-about";
import MarketingNewsletter from "src/sections/_marketing/marketing-newsletter";

// ----------------------------------------------------------------------

export default function EcommerceLandingView() {
  return (
    <>
      <EcommerceLandingHero />

      <MarketingAboutOurClients brands={_brandsColor} />

      <ElearningLatestPosts posts={_coursePosts.slice(0, 8)} />

      <CareerLatestPosts posts={_careerPosts.slice(0, 5)} />

      <TravelLandingHero tours={_tours.slice(0, 5)} />

      <MarketingLandingAbout />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <EcommerceLandingHotDealToday />

      <EcommerceLandingFeaturedProducts />

      <EcommerceLandingSpecialOffer />

      <EcommerceLandingFeaturedBrands />

      <EcommerceLandingPopularProducts />

      <EcommerceLandingTopProducts />

      <MarketingNewsletter />
    </>
  );
}
