"use client";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { fetchProductById } from "@/app/store/productSlice";

function page() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.products.singleProduct);

  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, [dispatch]);

  console.log(
    selectedProduct,
    "PARAMS-----------------------------------------"
  );
  return <div>{selectedProduct?.title}</div>;
}

export default page;
