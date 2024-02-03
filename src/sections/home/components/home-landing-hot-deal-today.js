import { add } from "date-fns";
import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { _products } from "src/_mock";
import { useResponsive } from "src/hooks/use-responsive";
import Carousel, {
  useCarousel,
  CarouselDots,
  CarouselArrows,
} from "src/components/carousel";

import HomeProductItemHot from "./subcomponents/home-product-item-hot";
import { Tab, Tabs, ToggleButton, ToggleButtonGroup } from "@mui/material";

// ----------------------------------------------------------------------

export default function HomeLandingHotDealToday({ specialProduct }) {
  const theme = useTheme();
  const [tab, setTab] = useState("1");

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  const mdUp = useResponsive("up", "md");

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 3,
    slidesToScroll: 3,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
    responsive: [
      {
        // Down md
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        // Down sm
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
    ],
  });

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={3}
        sx={{
          mb: 8,
        }}
      >
        <ToggleButtonGroup
          color="secondary"
          value={tab}
          exclusive
          onChange={handleChangeTab}
          aria-label="Platform"
        >
          <ToggleButton value="1">Онцлох бүтээгдэхүүн</ToggleButton>
          <ToggleButton value="2">Хямдарсан бүтээгдэхүүн</ToggleButton>
        </ToggleButtonGroup>

        {mdUp && (
          <CarouselArrows
            onNext={carousel.onNext}
            onPrev={carousel.onPrev}
            flexGrow={1}
            spacing={2}
            justifyContent="flex-end"
          />
        )}
      </Stack>

      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {specialProduct.map((product) => (
          <Box
            key={product.id}
            sx={{
              py: 0.5,
              px: { xs: 1, md: 1.5 },
            }}
          >
            <HomeProductItemHot product={product} hotProduct />
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}
