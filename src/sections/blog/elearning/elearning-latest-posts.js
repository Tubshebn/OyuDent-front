import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import Iconify from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import { useResponsive } from "src/hooks/use-responsive";

import PostItemMobile from "../common/post-item-mobile";

import PostItem from "./elearning-post-item";
import TravelTourItem from "src/sections/_travel/list/travel-tour-item";

// ----------------------------------------------------------------------

export default function ElearningLatestPosts({ posts }) {
  const mdUp = useResponsive("up", "md");

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.eLearning.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h3">Мэдээ мэдээлэл</Typography>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {posts.slice(0, 3).map((post) =>
          mdUp ? (
            //   <TravelTourItem key={post.id} post={post} />
            <PostItem key={post.id} post={post} />
          ) : (
            <TravelTourItem key={post.id} post={post} />
          )
        )}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

ElearningLatestPosts.propTypes = {
  posts: PropTypes.array,
};
