import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import Image from "src/components/image";
import { fDate } from "src/utils/format-time";
import { RouterLink } from "src/routes/components";

import PostTimeBlock from "../common/post-time-block";
import { BASE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function ElearningFeaturedPost({ post }) {
  return (
    <Box
      sx={{
        bgcolor: "background.neutral",
        py: { xs: 8, md: 10 },
        mt: 20,
      }}
    >
      <Container>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Image
            src={`${BASE_URL}/${post?.picture}`}
            alt={post?.title}
            sx={{ flexGrow: 1, height: 560, borderRadius: 2 }}
          />

          <Stack
            spacing={1}
            sx={{
              mx: "auto",
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            <PostTimeBlock createdAt={fDate(post?.createdAt)} />

            <Link
              component={RouterLink}
              href={`${paths.oyudent.post}/${post?.id}`}
              color="inherit"
              variant="h3"
            >
              {post?.title}
            </Link>

            <Typography sx={{ color: "text.secondary", flexGrow: 1 }}>
              {post?.content}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

ElearningFeaturedPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    author: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
  }),
};
