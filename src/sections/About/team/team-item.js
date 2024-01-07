import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { _socials } from "src/_mock";
import Image from "src/components/image";
import { bgGradient } from "src/theme/css";
import Iconify from "src/components/iconify";
import { varHover, varTranHover } from "src/components/animate";
import { useState } from "react";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs/custom-breadcrumbs";
import Dots from "src/assets/illustrations/pattern/dots";

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  "&:hover": { opacity: 1 },
}));

// ----------------------------------------------------------------------

export default function TeamItem({ member, ...other }) {
  return (
    <Stack {...other} sx={{ flexDirection: "row", gap: 5 }}>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(0.95)}
        transition={varTranHover()}
        sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}
      >
        <StyledOverlay>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ width: 1, zIndex: 9, bottom: 24, position: "absolute" }}
          >
            <Typography variant="body2" color={"white"} sx={{ p: 1 }}>
              Суурин болон зөөврийн бор машин, гэрлийн аппарат, сувгийн мотор,
              микроскоп зэрэг бүх тоног төхөөрөмжүүд, хиймэл шүдний лабораторийн
              тоон болон аналог бүх тоног төхөөрөмжүүдийг ХБНГУ-ын Ritter,
              Renfert, Dentaururm, Японы Yamahachy, NSK, БНХАУ-ын Woodpecker,
              Runeys, БНСУ-ын Genoray, Dmetec зэрэг компаниудаас импортлон
              оруулж ирж байна.
            </Typography>
          </Stack>
        </StyledOverlay>

        <Stack sx={{ width: "300px" }}>
          <m.div variants={varHover(1.15)} transition={varTranHover()}>
            <Image src="/assets/images/career/career_1.jpg" />
          </m.div>
        </Stack>
      </Box>
      {<Breader />}
    </Stack>
  );
}

TeamItem.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
  }),
};

const Breader = () => {
  const [isBrand, setbrands] = useState(false);
  let links = ["hello", "my", "name", "is", "tuvshin"];
  return (
    <Stack sx={{ flexDirection: "column", display: "flex" }}>
      <Stack sx={{ display: "flex", flexDirection: "row", height: "10%" }}>
        {links.map((i, index) => {
          return (
            <>
              <Stack
                onClick={() => {
                  setbrands(!isBrand);
                }}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f1f1f1",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                  borderRadius: 1,
                  px: 2,
                  py: 0.5,
                  transform: "skew(-20deg)",
                  margin: "0 5px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "capitalize", mr: 1 }}
                >
                  {i}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  margin: "auto",
                }}
              >
                <NavigateNextIcon fontSize="medium" />
              </Stack>
            </>
          );
        })}
      </Stack>
      {isBrand && <Brands />}
    </Stack>
  );
};

const Brands = () => {
  let brands = ["bmw", "hi", "yu", "bn"];
  return (
    <Stack
      sx={{
        justifyContent: "flex-start",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        m: 3,
      }}
    >
      {brands?.map((i, index) => {
        return (
          <Stack sx={{ flexDirection: "row" }}>
            <NavigateNextIcon />
            <Typography variant="subtitle1">{i}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
