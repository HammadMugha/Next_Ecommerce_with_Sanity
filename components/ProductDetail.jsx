
import { FaStar, FaStarHalfAlt, FaPlus, FaMinus } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { client, urlFor } from "@/lib/client";
import ImageProduct from "./ImageProduct";
import ProductContent from "./ProductContent";
import RelatedProducts from "./RelatedProducts";

// get data from sanity api
const getData = async () => {
  const query = `*[_type == "product"][0...3]`;
  const data = await client.fetch(query);
  return data;
};

// get single product from sanity api

const getSingleProduct = async (slug) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
      _id,
        image,
        price,
        name,
        details,
        quantity,
        "slug": slug.current,
        price_id
    }`;
  const data = await client.fetch(query);
  return data;
};

async function ProductDetail({ slug }) {

  // const [index,setIndex] = useState(product?.image[1])
  const product = await getSingleProduct(slug);
  const data = await getData();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-9 items-center pt-[60px]">
        <div className="col-span-2">
          <ImageProduct image={product?.image} />
        </div>
        <div className="col-span-3 flex flex-col items-start gap-4">
          <ProductContent product={product} />
        </div>
      </div>
      {/* also recommended products */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[30px] font-bold mb-5 mt-[50px] text-center">
          You may also like
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data && data.map((data, i) => <ProductCard key={i} data={data} />)}
        </div> */}
        {/* slider  */}
        <div>
        <RelatedProducts data={data}/>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
