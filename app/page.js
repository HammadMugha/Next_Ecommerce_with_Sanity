import HeaderBanner from "@/components/HeaderBanner";
import HeaderOne from "@/components/HeaderOne";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { client } from "@/lib/client";
import Image from "next/image";
import { BannerData, BannerData2 } from "./data";

const getData = async () => {
  const query = `*[_type == "product"][0...6]`;
  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <HeroBanner />
      {/* headerBanner section */}
      <HeaderBanner data={BannerData} varient={"bg-primary"} />
      {/* product-display */}
      <div className="heading mb-[50px] mt-[50px]">
        <h2 className="text-[35px] font-semibold mb-2 text-center">
          Hot Deals Today
        </h2>
        <p className="text-center text-[14px]">
          There are some product that we featured for choose your best
        </p>
      </div>
      {/* container and grid */}
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data && data.map((data, i) => <ProductCard key={i} data={data} />)}
        </div>
      </div>
      <HeaderBanner data={BannerData2} varient={"bg-[#2dcc6f]"} />
      <HeaderOne />
    </>
  );
}
