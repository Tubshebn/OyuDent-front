import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { paths } from "src/routes/paths";
import Iconify from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import { useResponsive } from "src/hooks/use-responsive";
import Carousel, {
  useCarousel,
  CarouselDots,
  CarouselArrows,
} from "src/components/carousel";

import PostItem from "../../blog/elearning/elearning-post-item";
import HomeEventItem from "src/sections/home/components/subcomponents/home-tour-item";

// ----------------------------------------------------------------------

export default function HomeLatestPosts({ posts }) {
  const mdUp = useResponsive("up", "md");

  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 5 },
    }),
  });

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.oyudent.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      Бүгдийг харах
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
          //   display: "grid",
          //   gap: { xs: 3, md: 10 },
          //   gridTemplateColumns: {
          //     xs: "repeat(1, 1fr)",
          //     md: "repeat(1, 1fr)",
          //   },
          position: "relative",
          height: "200px",
          mb: 10,
        }}
      >
        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              mt: 8,
              left: 2,
              opacity: 1,
              color: "common.white",
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.main" },
            },
          }}
          rightButtonProps={{
            sx: {
              mt: 8,
              right: 0,
              opacity: 1,
              color: "common.white",
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.main" },
            },
          }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {posts.map((post) =>
              mdUp ? (
                <Box sx={{ paddingX: 2 }}>
                  <PostItem key={post.id} post={post} />
                </Box>
              ) : (
                <HomeEventItem key={post.id} post={post} />
              )
            )}
          </Carousel>
        </CarouselArrows>
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

HomeLatestPosts.propTypes = {
  posts: PropTypes.array,
};
