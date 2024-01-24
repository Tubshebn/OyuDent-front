"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _tags, _mock, _categories, _careerPosts } from "src/_mock";

import PostSidebar from "../../blog/common/post-sidebar";
import CareerPosts from "../../blog/career/career-posts";
import PostSearchMobile from "../../blog/common/post-search-mobile";
import { Box, Tab, Tabs } from "@mui/material";

// ----------------------------------------------------------------------

export default function CareerPostsView() {
  return (
    <>
      <PostSearchMobile />
      <Box sx={{ px: 3, borderRadius: "3px" }}>
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

      <Container
        sx={{
          pt: { xs: 0, md: 5 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <CareerPosts posts={_careerPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _careerPosts.slice(-4) }}
              advertisement={{
                title: "Advertisement",
                description:
                  "Duis leo. Donec orci lectus, aliquam ut, faucibus non",
                imageUrl: _mock.image.career(10),
                path: "",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <CareerNewsletter />
    </>
  );
}
