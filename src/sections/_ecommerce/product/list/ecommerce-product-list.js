import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination, { paginationClasses } from "@mui/material/Pagination";

import EcommerceProductViewListItem from "../item/ecommerce-product-view-list-item";
import EcommerceProductViewGridItem from "../item/ecommerce-product-view-grid-item";
import EcommerceProductViewListItemSkeleton from "../item/ecommerce-product-view-list-item-skeleton";
import EcommerceProductViewGridItemSkeleton from "../item/ecommerce-product-view-grid-item-skeleton";
import { useEffect, useState, useCallback } from "react";
import { Tab, Tabs } from "@mui/material";
import { _categories } from "src/_mock";

// ----------------------------------------------------------------------

export default function EcommerceProductList({
  viewMode,
  products,
  currentPage,
  handlePageChange,
}) {
  //   useEffect(() => {
  //     getProductList();
  //   }, []);

  //   let body = {
  //     size: 12,
  //     page: 0,
  //   };
  //   const getCategoryList = () => {
  //     try {
  //       axios
  //         .get(`${BASE_URL}v1/content/product`, { params: body })
  //         .then((res) => {
  //           setProducts(res?.data);
  //         });
  //     } catch (error) {
  //       return;
  //     }
  //   };

  return (
    <>
      {viewMode === "grid" ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
        >
          {products?.result?.map((product, index) => {
            return (
              <EcommerceProductViewGridItem
                key={product.id}
                product={product}
              />
            );
          })}
        </Box>
      ) : (
        <Stack spacing={4}>
          {products?.result?.map((product, index) => {
            return (
              <EcommerceProductViewListItem
                key={product.id}
                product={product}
              />
            );
          })}
        </Stack>
      )}

      <Pagination
        count={10}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{
          mt: 10,
          mb: 5,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
}

EcommerceProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
  viewMode: PropTypes.string,
};
