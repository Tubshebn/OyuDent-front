import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Image from "src/components/image";
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";
import TextMaxLine from "src/components/text-max-line";
import Carousel, { useCarousel, CarouselArrows } from "src/components/carousel";
import { IMAGE_URL } from "src/config-global";
import { Button, Stack } from "@mui/material";
import Iconify from "src/components/iconify/iconify";

// ----------------------------------------------------------------------

export default function CareerLandingTopCompanies({ clients }) {
  const theme = useTheme();

  const carousel = useCarousel({
    speed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pb: { xs: 7, md: 11 },
      }}
    >
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h3">Бидний харилцагчид</Typography>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {clients.map((client) => (
            <Box
              key={client.id}
              sx={{
                py: { xs: 8, md: 10 },
              }}
            >
              <CompanyItem client={client} />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Stack alignItems="center" spacing={3}>
        <Button
          variant="contained"
          rel="noopener"
          endIcon={<Iconify icon="carbon:chevron-right" />}
          href={paths.oyudent.client}
        >
          Дэлгэрэнгүй
        </Button>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

function CompanyItem({ client }) {
  const { name, picture, country } = client;
  return (
    <Box
      sx={{
        py: 5,
        px: 3,
        borderRadius: 2,
        cursor: "pointer",
        textAlign: "center",
        position: "relative",
        transition: (theme) =>
          theme.transitions.create("all", {
            duration: theme.transitions.duration.enteringScreen,
          }),
        "&:hover": {
          bgcolor: "background.paper",
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Image
        alt={name}
        src={`${IMAGE_URL}/${picture}`}
        sx={{
          mx: "auto",
          width: 56,
          height: 56,
          borderRadius: 1,
        }}
      />

      <TextMaxLine variant="subtitle2" persistent>
        {name}
      </TextMaxLine>
    </Box>
  );
}
