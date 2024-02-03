import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";

import Image from "src/components/image";
import Iconify from "src/components/iconify";
import CountUp from "src/components/count-up";
import { useResponsive } from "src/hooks/use-responsive";
import { fShortenNumber } from "src/utils/format-number";

// ----------------------------------------------------------------------

const COLORS = ["primary", "secondary", "warning", "success"];

const SUMMARY = [
  { title: "Years of experience", total: 12, icon: "carbon:increase-level" },
  { title: "Awards", total: 20, icon: "carbon:trophy" },
  { title: "Projects", total: 150, icon: "carbon:data-vis-4" },
  { title: "Happy clients", total: 32000, icon: "carbon:user-certification" },
];

// ----------------------------------------------------------------------

const StyledIcon = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  position: "relative",
  justifyContent: "center",
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  "&:before": {
    zIndex: 8,
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    width: "calc(100% - 48px)",
    height: "calc(100% - 48px)",
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  "& svg": {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  const mdUp = useResponsive("up", "md");

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
        mt: 10,
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="teams" src={"/assets/Oyudent.svg"} />
          </Grid>
        )}

        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography sx={{ mt: 3, mb: 5, color: "text.secondary" }}>
            Манай компани нь зөвхөн шүдний эмнэлгийн материал тоног төхөөрөмж
            ханган нийлүүлэх чиглэлээр дагнан ажилладаг мэргэшсэн байгууллага
            бөгөөд шүдний эмнэлгийн тоног төхөөрөмжийг ХБНГУ-ын Ritter, Renfert,
            Kulzer, Dentaururm, Японы Yamahachy, БНХАУ-ын Woodpecker, Runeys,
            БНСУ-ын Genoray, Dmetec, Италийн Trident зэрэг компани, шүдний
            эмчилгээний материал, хиймэл шүдний материал хэрэгслийн ХБНГУ-ын
            Kultzer, Dentaurum dental, Швейцарийн PD, АНУ-ын Neodental, ОХУ-ын
            Технодент, Енигма, Кмиз, Украйны Стома, Бразилын DFL, Австрийн
            Edelweiss, Италийн Medesy, БНСУ-ын Metаbiomed, CK Dental, Vericom,
            Японы Mani, БНХАУ-ын SND зэрэг компани, нийтдээ 30 гаран улсын 100
            гаран компаний чанарын өндөр шаардлага хангасан олон улсын ISO, CE
            сертификаттай бүтээгдэхүүнийг Монгол улсад албан ёсны борлуулах
            эрхтэйгээр, мэргэжлийн байгууллагуудын хяналттай зохих зөвшөөрөлтэй
            импортлон оруулж ирж 350 гаруй эрүүл мэндийн байгууллагууд, шүдний
            эмнэлгүүдэд ханган нийлүүлж байна. Монголын зах зээлд шинэ техник
            технологи, сүүлийн үеийн шинэ чанартай материал тоног төхөөрөмжийг
            боломжийн үнээр нийлүүлэх тэдгээрийг эмч мэргэжилтэн нарт таниулан
            сургах талаар санаачилга гарган ажилладаг.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
