import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Image from "src/components/image";

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: "Тоног төхөөрөмж",
    description: `
  Шүдний эмнэлгийн тоног төхөөрөмж:
  Суурин болон зөөврийн бор машин,
  гэрлийн аппарат, сувгийн мотор,
  микроскоп зэрэг бүх тоног
  төхөөрөмжүүд, хиймэл шүдний
  лабораторийн тоон болон аналог бүх
  тоног төхөөрөмжүүдийг ХБНГУ-ын
  Ritter, Renfert, Dentaururm, Японы
  Yamahachy, NSK, БНХАУ-ын
  Woodpecker, Runeys, БНСУ-ын Genoray,
  Dmetec зэрэг компаниудаас
  импортлон оруулж ирж байна.
`,
  },
  {
    name: "Эмчилгээний материал",
    description: `Шүдний эмчилгээнд зориулсан бүх
төрлийн материал оруулж ирж
байна. Манай компани нь дэлхийд
эм үйлдвэрлэлийн технологиоороо
тэргүүлдэг Франц улсын Septodont
компаний бүх төрлийн
бүтээгдэхүүнийг 2022 оноос албан
ёсны эрхтэйгээр оруулж ирж байгааг
онцолж байна. Энэхүү компаний
хэсгийн мэдээ алдауулах Lignospan
тариа нь маш чанартай үйлчилгээ
сайтай байдаг.`,
  },
  {
    name: "Багаж хэрэгсэл",
    description: `Бид үнэ болон чанарын
олон сонголттойгоор Итали,
Герман, Пакистан, Орос,
Солонгос, Хятад улссас
эмчилгээ, гажиг засал,
лабораторид зориулсан гар
багаж, хэрэгсэл, нэг
удаагийн бүтээгдэхүүнийг
Монгол улсын зах зээл дээр
ханган нийлүүлж байна`,
  },
];

// ----------------------------------------------------------------------

export default function TravelAboutOurVision() {
  return (
    <Container
      sx={{
        overflow: "hidden",
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 8, md: 3 }}
        justifyContent="space-between"
        alignItems={{ md: "center" }}
      >
        <Grid xs={12} md={3} lg={3}>
          <Image
            alt="vision"
            src="/assets/illustrations/illustration_vision.svg"
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack alignItems={{ md: "flex-end" }} sx={{ position: "relative" }}>
            {VISIONS.map((vision, index) => {
              const { name, description } = vision;

              const firstVision = index === 0;

              const secondVision = index === 1;

              const thirdVision = index === 2;

              return (
                <Card
                  key={name}
                  sx={{
                    p: 4,
                    mt: 4,
                    width: { md: "calc(80% - 16px)" },
                    ...(firstVision && {
                      top: { md: 0 },
                      left: { md: 0 },
                      bottom: { md: 0 },
                      my: { md: "auto" },
                      boxShadow: { md: 0 },
                      maxHeight: { md: 304 },
                      display: { md: "flex" },
                      position: { md: "absolute" },
                      flexDirection: { md: "column" },
                      justifyContent: { md: "center" },
                    }),
                    ...(secondVision && {
                      boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                    }),
                    ...(thirdVision && {
                      boxShadow: { md: 0 },
                    }),
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{ color: "text.disabled", opacity: 0.24, mb: 3 }}
                  >
                    {`0${index + 1}`}
                  </Typography>

                  <Typography variant="h4" paragraph>
                    {name}
                  </Typography>

                  <Typography sx={{ color: "text.secondary" }}>
                    {description}
                  </Typography>
                </Card>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
