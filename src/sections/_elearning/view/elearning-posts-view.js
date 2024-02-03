"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _coursePosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import ElearningNewsletter from "../elearning-newsletter";
import ElearningPosts from "../../blog/elearning/elearning-posts";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import ElearningFeaturedPost from "../../blog/elearning/elearning-featured-post";
import ElearningLandingHero from "../landing/elearning-landing-hero";

// ----------------------------------------------------------------------

export default function ElearningPostsView() {
  return (
    <>
      <ElearningLandingHero />
      <ElearningFeaturedPost post={_coursePosts[1]} />

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={12}>
            <ElearningPosts posts={_coursePosts} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
