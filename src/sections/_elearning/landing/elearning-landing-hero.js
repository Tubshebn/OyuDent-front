import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { _mock } from "src/_mock";
import { bgGradient } from "src/theme/css";
import { useBoolean } from "src/hooks/use-boolean";
import { PlayerDialog } from "src/components/player";
import { useResponsive } from "src/hooks/use-responsive";
import ElearningHeroIllustration from "src/assets/illustrations/elearning-hero-illustration";

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: "Learners", color: "warning" },
  { value: 1050, label: "Courses", color: "error" },
  { value: 59000, label: "Graduates", color: "success" },
];

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const videoOpen = useBoolean();

  return (
    <>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: "/assets/background/overlay_1.jpg",
          }),
          overflow: "hidden",
          mt: 11,
        }}
      >
        <Container
          sx={{
            py: 15,
            display: { md: "flex" },
            alignItems: { md: "center" },
            height: { md: `100vh` },
          }}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5}>
              <Stack
                sx={{
                  textAlign: { xs: "center", md: "unset" },
                }}
              >
                <Typography variant="h1" sx={{ mt: 5 }}>
                  Мэдээ, мэдээллүүд
                </Typography>

                <Typography sx={{ color: "text.secondary", mt: 3, mb: 5 }}>
                  Сургалт,Эвент болон мэдээ мэдээллүүдийг эндээс
                </Typography>
              </Stack>
            </Grid>

            {mdUp && (
              <Grid xs={12} md={6} lg={7}>
                <ElearningHeroIllustration />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      <PlayerDialog
        open={videoOpen.value}
        onClose={videoOpen.onFalse}
        videoPath={_mock.video(0)}
      />
    </>
  );
}
