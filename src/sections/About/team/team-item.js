import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { _socials } from "src/_mock";
import { useEffect, useState } from "react";
import {
  Box,
  StepButton,
  Stepper,
  Step,
  StepContent,
  Link,
} from "@mui/material";
import { paths } from "src/routes/paths";

// ----------------------------------------------------------------------

export default function TeamItem({ data, member, ...other }) {
  return (
    <Stack {...other} sx={{ flexDirection: "row", gap: 5 }}>
      {<Breader data={data} />}
    </Stack>
  );
}

const Breader = ({ data }) => {
  const [activeStep, setActiveStep] = useState(-1);
  const [completed, setCompleted] = useState({});
  const [open, setopen] = useState(false);
  useEffect(() => {
    if (!open) {
      setActiveStep(-1);
    }
  }, [open]);

  let links = data.map((data1, i) => ({
    link: data1?.title,
    brands: data1?.brands,
  }));

  const handleStep = (step) => () => {
    setActiveStep(step);
    setopen(!open);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {links.map((label, index) => (
          <Step key={label.link} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <Typography sx={{ fontSize: 13 }}> {label.link}</Typography>
            </StepButton>
            {open && (
              <StepContent>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  {label.brands.map((brand, brandIndex) => (
                    <li key={brandIndex}>
                      <Link
                        href={`${paths.oyudent.products}`}
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
