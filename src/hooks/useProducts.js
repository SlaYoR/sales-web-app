import { useQuery } from "react-query";

export default function useProducts() {
  return useQuery(["products"], () =>
    // TODO : localhost:3001/products ?
    fetch("http://localhost:3001/products").then((response) => response.json()),
  );
}
