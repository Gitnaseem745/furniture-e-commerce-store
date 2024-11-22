'use client';
import Button from "./Button";
import HomeCard from "./HomeCard";

const HeroCard: React.FC = () => {
  return (
    <div className="w-full max-h-fit rounded-3xl px-10 py-14 bg-[#EEF4F5] flex flex-row gap-10 justify-center items-center">
        <div className="flex flex-col gap-8 items-start justify-start w-5/12">
            <h1 className="text-6xl font-bold tracking-tight leading-[72px]">
                Exquisite design combined with functionalities
            </h1>
            <p className="pr-16 text-lg leading-[30px] tracking-wide text-neutral-700">
                Pellentesque ullamcorper dignissim condimentum volutpat consequat mauris nunc lacinia quis.
            </p>
            <div className="bg-[#E2EDEF] w-8/12 px-4 py-5 rounded-full justify-center items-center flex flex-row mb-4 gap-2">
                <img src="images/home-avatar-1.webp" alt="" className="rounded-full w-[30px]" />
                <img src="images/home-avatar-2.webp" alt="" className="rounded-full w-[30px]" />
                <img src="images/home-avatar-3.webp" alt="" className="rounded-full w-[30px]" />
                <p className="text-neutral-600">Contact with our expert</p>
            </div>
            <Button buttonText="Shop Now" link="/" />
        </div>
        <div className="w-7/12 flex flex-row gap-6 justify-center items-start">
            <HomeCard backgroundImgUrl={heroCardData[0].backgroundImgUrl} productTitle={heroCardData[0].productTitle} productPrice={heroCardData[0].productPrice} productPageLink={heroCardData[0].productPageLink} width={heroCardData[0].width} height={heroCardData[0].height} button={heroCardData[0].button} />
            <div>
                <HomeCard backgroundImgUrl={heroCardData[1].backgroundImgUrl} productTitle={heroCardData[1].productTitle} productPrice={heroCardData[1].productPrice} productPageLink={heroCardData[1].productPageLink} width={heroCardData[1].width} height={heroCardData[1].height} button={heroCardData[1].button} />
                <div className="px-14 py-8 rounded-xl bg-[#274C4F] flex flex-col justify-center items-center gap-4 text-center text-white mt-6">
                    <h1 className="text-xl font-semibold">
                        25% OFF
                    </h1>
                    <p className="mt-[-10px] mb-5">
                        Donec ac odio tempor dapibus.
                    </p>
                    <Button buttonText="Explore Now" link="products/"/>
                </div>
            </div>
        </div>
    </div>
  )
}
const heroCardData = [
    {
        backgroundImgUrl: "/images/heroCard1.webp",
        productTitle: "Wooden Chair",
        productPrice: "$199",
        productPageLink: "/product-category/chairs",
        width: 333,
        height: 535,
        button: true,
    },
    {
        backgroundImgUrl: "/images/heroCard2.webp",
        productTitle: "Pretium Elite",
        productPrice: "$130",
        productPageLink: "/product-category/chairs",
        width: 331,
        height: 303,
        button: true,
    },
  ]
export default HeroCard
