import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import PostItem from "../../blog/elearning/elearning-post-item";

// ----------------------------------------------------------------------

const TABS = ["Мэдээ мэдээлэл", "Эвент", "Бусад"];

// ----------------------------------------------------------------------

export default function HomeLandingPopularProducts({ posts }) {
  const [tab, setTab] = useState("Мэдээ мэдээлэл");

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: { xs: "center", md: "center" },
        }}
      >
        Блог
      </Typography>

      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ my: 5 }}
      >
        {TABS.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
      >
        {posts?.slice(0, 3).map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>
    </Container>
  );
}
