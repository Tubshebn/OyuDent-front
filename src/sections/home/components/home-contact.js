import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import SvgColor from "src/components/svg-color";
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function HomeContact({ sx, ...other }) {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, bgcolor: "background.default", ...sx }} {...other}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <SvgColor
              src="/assets/icons/ic_newsletter.svg"
              sx={{ width: 80, height: 80, color: "primary.light" }}
            />

            <Stack spacing={1}>
              <Typography variant="h4">Шинэ мэдээллүүд авах</Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                И-мэйл хаягаа бүртгүүлээд шинэ мэдээллүүдээ цаг алдалгүй аваарай
              </Typography>
            </Stack>
          </Stack>

          <TextField
            fullWidth
            label="И-мэйл оруулах"
            color="primary"
            InputLabelProps={{
              sx: { color: theme.palette.primary.main }, // Set your desired label color here
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    size="large"
                    color="inherit"
                    variant="contained"
                    sx={{
                      height: 54,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    Илгээх
                  </Button>
                </InputAdornment>
              ),
              sx: { pr: 0 },
            }}
            sx={{ maxWidth: 466, backgroundColor: "white" }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

HomeContact.propTypes = {
  sx: PropTypes.object,
};
