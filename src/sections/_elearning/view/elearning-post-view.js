"use client";

import { useState, useCallback, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import Iconify from "src/components/iconify";
import { fDate } from "src/utils/format-time";
import Markdown from "src/components/markdown";
import { _socials, _coursePosts } from "src/_mock";
import { useResponsive } from "src/hooks/use-responsive";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import PostTags from "../../blog/common/post-tags";
import PostPrevAndNext from "../../blog/common/post-prev-and-next";
import PostSocialsShare from "../../blog/common/post-socials-share";
import ElearningLatestPosts from "../../home/components/home-latest-posts";
import { useParams } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function ElearningPostView() {
  const { id } = useParams();

  const theme = useTheme();

  const mdUp = useResponsive("up", "md");
  const [data, setData] = useState({});

  const { title, createdAt, piture, content } = data;

  useEffect(() => {
    getBlogDetail();
  }, []);

  const getBlogDetail = () => {
    axios
      .get(`${BASE_URL}v1/blog/${id}`)
      .then((result) => {
        setData(result?.data);
      })
      .catch((err) => {
        return;
      });
  };

  return (
    <>
      <Divider />

      <Container sx={{ overflow: "hidden", mt: 20 }}>
        <CustomBreadcrumbs
          links={[{ name: "Нүүр хуудас", href: "/" }, { name: title }]}
          sx={{ my: 5 }}
        />

        <Grid container spacing={3} justifyContent={{ md: "center" }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                pb: 6,
                textAlign: "center",
                pt: { xs: 6, md: 5 },
              }}
            >
              <Typography variant="h2" component="h1">
                {title}
              </Typography>

              <Typography variant="h5">{content}</Typography>
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={content} firstLetter />

            <Divider sx={{ mt: 8 }} />
          </Grid>
        </Grid>
      </Container>

      <Divider />
    </>
  );
}
