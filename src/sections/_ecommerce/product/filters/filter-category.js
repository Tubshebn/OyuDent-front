import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";

import Iconify from "src/components/iconify";
import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import { BASE_URL } from "src/config-global";
import axios from "axios";

// ----------------------------------------------------------------------

export default function FilterCategory({
  options,
  filterCategories,
  onChangeCategories,
  open2,
  ...other
}) {
  const [sub, setsub] = useState([]);

  useEffect(() => {
    getSubCategoryList;
  }, [filterCategories]);

  const getSubCategoryList = () => {
    try {
      axios
        .get(`${BASE_URL}v1/category/sub/`, {
          params: { id: filterCategories },
        })
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res);
        });
    } catch (error) {
      return;
    }
  };
  return (
    <Stack spacing={1} alignItems="flex-start" {...other}>
      {options.map((option) => (
        <>
          <Stack
            key={option.id}
            direction="row"
            alignItems="center"
            onClick={() => onChangeCategories(option.id)}
            sx={{
              typography: "body2",
              cursor: "pointer",
              ...(filterCategories === option.id && {
                fontWeight: "fontWeightBold",
              }),
            }}
          >
            {filterCategories === option?.id && open2 === true ? (
              <Iconify icon="carbon:chevron-down" width={12} sx={{ mr: 1 }} />
            ) : (
              <Iconify icon="carbon:chevron-right" width={12} sx={{ mr: 1 }} />
            )}

            {option.name}
          </Stack>
          {filterCategories === option?.id && open2 === true && (
            <Sub open={open2} />
          )}
        </>
      ))}
    </Stack>
  );
}

FilterCategory.propTypes = {
  filterCategories: PropTypes.string,
  onChangeCategories: PropTypes.func,
  options: PropTypes.array,
};

const Sub = ({ open }) => {
  return (
    <>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack>sss</Stack>
      </Collapse>
    </>
  );
};
