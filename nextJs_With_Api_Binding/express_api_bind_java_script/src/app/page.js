"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(productsData, "🦾🦾🦾🦾🦾🦾🦾🦾🦾🦾🦾");

  return (
    <div>
      {productsData.map((el) => (
        <div>
          <Link href={`/productDetails/${el.id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  );
}
