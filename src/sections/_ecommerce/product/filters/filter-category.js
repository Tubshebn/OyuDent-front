import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";

import Iconify from "src/components/iconify";
import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import { BASE_URL } from "src/config-global";
import axios from "axios";
import { MenuItem } from "@mui/material";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
// ----------------------------------------------------------------------

export default function FilterCategory({
  options,
  filterCategories,
  onChangeCategories,
  ...other
}) {
  const [checkedItems, setCheckedItems] = useState([]);
  const handleCheckboxToggle = (optionId) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(optionId)
        ? prevCheckedItems.filter((id) => id !== optionId)
        : [...prevCheckedItems, optionId]
    );
  };
  useEffect(() => {
    onChangeCategories(checkedItems);
  }, [checkedItems]);
  return (
    <Stack alignItems="flex-start" {...other}>
      {options.map((option) => (
        <>
          <MenuItem
            key={option.id}
            value={option.id}
            sx={{
              fontSize: 13,
              whiteSpace: "normal",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Checkbox
              size="medium"
              checked={checkedItems.includes(option.id)}
              onChange={() => handleCheckboxToggle(option.id)}
              sx={{
                [`&.${checkboxClasses.root}`]: {},
              }}
            />
            {option.name}
          </MenuItem>
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
