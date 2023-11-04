import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";

const Data = () => {
  const { data: allProductsData, error, isLoading } = useGetAllProductsQuery();
  const { data: productData } = useGetProductQuery("iphone");
  console.log(allProductsData);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <div>Model:{productData?.products[0].title}</div>
      <img src={productData?.products[0].images[2]} alt="image" />
    </>
  );
};

export default Data;
