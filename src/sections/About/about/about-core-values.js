import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import SvgColor from "src/components/svg-color";

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: "Тоног төхөөрөмж",
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
    icon: "/assets/icons/ic_agreement.svg",
  },
  {
    title: "Эмчилгээний материал",
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
    icon: "/assets/icons/ic_transparency.svg",
  },
  {
    title: "Багаж хэрэгсэл",
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

    icon: "/assets/icons/ic_reputation.svg",
  },
];

// ----------------------------------------------------------------------

export default function AboutCoreValues() {
  return (
    <Container
      sx={{
        textAlign: "center",
        pt: { xs: 5, md: 15 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        Our Core Values
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 8,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}>
            <SvgColor
              src={value.icon}
              sx={{
                width: 64,
                height: 64,
                mx: "auto",
                color: "primary.main",
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              {" "}
              {value.description}{" "}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
