import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useResponsive } from "src/hooks/use-responsive";

import ElearningPostItem from "../blog/elearning/elearning-post-item";
import HomeEventItem from "src/sections/home/components/subcomponents/home-tour-item";
import Image from "src/components/image/image";
import { Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function SupportContent({ posts }) {
  const mdUp = useResponsive("up", "md");

  return (
    <Container
      sx={{
        py: { xs: 10, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 2fr)",
          },
        }}
      >
        <Image src="/assets/images/career/career_1.jpg" />
        <Typography>
          Шүдний эмнэлгийн тоног төхөөрөмж: Суурин болон зөөврийн бор машин,
          гэрлийн аппарат, сувгийн мотор, микроскоп зэрэг бүх тоног
          төхөөрөмжүүд, хиймэл шүдний лабораторийн тоон болон аналог бүх тоног
          төхөөрөмжүүдийг ХБНГУ-ын Ritter, Renfert, Dentaururm, Японы Yamahachy,
          NSK, БНХАУ-ын Woodpecker, Runeys, БНСУ-ын Genoray, Dmetec зэрэг
          компаниудаас импортлон оруулж ирж байна.
        </Typography>
      </Box>
    </Container>
  );
}

SupportContent.propTypes = {
  posts: PropTypes.array,
};
