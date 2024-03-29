import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

import { bgBlur } from "src/theme/css";
import Logo from "src/components/logo";
import { paths } from "src/routes/paths";
import Label from "src/components/label";
import { useResponsive } from "src/hooks/use-responsive";
import { useOffSetTop } from "src/hooks/use-off-set-top";

import { HEADER } from "../config-layout";
import HeaderShadow from "../common/header-shadow";

import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import { navConfig } from "./config-navigation";
import { RouterLink } from "src/routes/components";

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive("up", "md");

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: "common.white",
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: "text.primary",
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            <Link
              component={RouterLink}
              href="/"
              color="inherit"
              aria-label="go to homepage"
              sx={{ lineHeight: 0 }}
            >
              <Box
                sx={{
                  lineHeight: 0,
                  cursor: "pointer",
                  display: "inline-flex",
                }}
              >
                <Logo />
              </Box>
            </Link>
          </Box>
          <Box>{mdUp && <NavDesktop data={navConfig} />}</Box>

          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            {mdUp && (
              <>
                <Button
                  variant="contained"
                  href={paths.loginIllustration}
                  target="_blank"
                  rel="noopener"
                >
                  Нэвтрэх
                </Button>
              </>
            )}
          </Stack>

          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
