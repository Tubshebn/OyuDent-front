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
import Searchbar from "../common/searchbar";
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
                  width: 64,
                  lineHeight: 0,
                  cursor: "pointer",
                  display: "inline-flex",
                }}
              >
                <Logo />
              </Box>
            </Link>
          </Box>

          {mdUp && <NavDesktop data={navConfig} />}

          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Stack spacing={1} direction="row" alignItems="center"></Stack>

            {mdUp && (
              <>
                <Button
                  variant="outlined"
                  href={paths.loginIllustration}
                  target="_blank"
                  rel="noopener"
                  color="primary"
                >
                  Нэвтрэх
                </Button>
                <Button
                  variant="contained"
                  href={paths.registerBackground}
                  target="_blank"
                  rel="noopener"
                  //   color="primary"
                >
                  Бүртгүүлэх
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
