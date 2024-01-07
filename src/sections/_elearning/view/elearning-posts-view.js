"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _coursePosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import ElearningPosts from "../../blog/elearning/elearning-posts";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "src/config-global";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs/custom-breadcrumbs";
import { Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function ElearningPostsView() {
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
    <Container>
      <Typography variant="h3" sx={{ textAlign: "center", mt: 15 }}>
        Блог
      </Typography>

      <PostSearchMobile />

      <Container
        sx={{
          pt: 5,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={12}>
            <PostSidebar categories={_categories} />
          </Grid>
          <Grid xs={12} md={12}>
            <ElearningPosts posts={blog} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
