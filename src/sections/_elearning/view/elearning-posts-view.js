"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _coursePosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import ElearningPosts from "../../blog/elearning/elearning-posts";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASE_URL } from "src/config-global";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs/custom-breadcrumbs";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import MarketingPosts from "src/sections/blog/marketing/marketing-posts";

// ----------------------------------------------------------------------

export default function ElearningPostsView() {
  const [blog, setBlog] = useState([]);
  const [tab, setTab] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getBlogList();
  }, []);
  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
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
      <Box sx={{ px: 3, borderRadius: "3px", my: 8 }}>
        <Tabs
          value={tab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeTab}
        >
          <Tab key={0} value={""} label={"Бүгд"} />
          {_categories.map((category) => (
            <>
              <Tab
                key={category.id}
                value={category.label}
                label={category.label}
              />
            </>
          ))}
        </Tabs>
      </Box>

      <Stack sx={{ my: 8, px: 3 }}>
        <PostSearchMobile />
      </Stack>

      <Container
        sx={{
          pt: 5,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={12}>
            <MarketingPosts posts={blog} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
