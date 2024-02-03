import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Image from "src/components/image";
import Iconify from "src/components/iconify";
import { fShortenNumber } from "src/utils/format-number";
import { paths } from "src/routes/paths";

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: "projects",
    total: 20,
    content:
      "Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.",
  },
  {
    label: "Happy clients",
    total: 32000,
    content:
      "Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.",
  },
  {
    label: "years of experience",
    total: 20,
    content:
      "Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.",
  },
];

// ----------------------------------------------------------------------

export default function HomeLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", mb: 10 }}>
        Бидний тухай
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-around"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Typography sx={{ color: "text.secondary" }}>
            “Оюудент ХХК нь 2001 оноос Шүдний эмчилгээ оношлогоо, жижиг мэс
            ажилбар, согог заслын эмнэлгийн тусгай зөвшөөрөл, 2006 оноос Шүдний
            эм, эмнэлгийн хэрэгсэл, тоног төхөөрөмж ханган нийлүүлэх тусгай
            зөвшөөрөлтэйгөөр өнөөдрийг хүртэл тасралтгүй үйл ажиллагаагаа явуулж
            байна
          </Typography>

          <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
            href={paths.oyudent.about}
          >
            Дэлгэрэнгүй
          </Button>
        </Grid>

        <Grid xs={2} md={3}>
          <img src={"/assets/Oyudent.svg"} />
        </Grid>
      </Grid>
    </Container>
  );
}
