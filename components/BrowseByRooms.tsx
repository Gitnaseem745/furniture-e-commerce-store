'use client';
import HomeCard from './HomeCard'

const BrowseByRooms: React.FC = () => {
  return (
    <div className="w-[94%] max-h-fit rounded-3xl p-12 bg-[#152420] flex flex-row gap-6 justify-center items-center">
        <div className="flex flex-col gap-10 items-start justify-start w-6/12 text-white">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Browse by rooms
                </h1>
                <p className="mt-3 tracking-wide">
                    Sit massa etiam urna id. Non pulvinar aenean ultrices lectus vitae imperdiet vulputate a eu. Aliquet ullamcorper leo mi vel sit pretium euismod eget.
                </p>
            </div>
            <HomeCard backgroundImgUrl={homeCardData[0].backgroundImgUrl} productTitle={homeCardData[0].productTitle} productPrice={homeCardData[0].productPrice} productPageLink={homeCardData[0].productPageLink} width={homeCardData[0].width} height={homeCardData[0].height} button={homeCardData[0].button} />
        </div>
        <div className="w-6/12 flex flex-col gap-8 justify-center items-start">
                <HomeCard backgroundImgUrl={homeCardData[1].backgroundImgUrl} productTitle={homeCardData[1].productTitle} productPrice={homeCardData[1].productPrice} productPageLink={homeCardData[1].productPageLink} width={homeCardData[1].width} height={homeCardData[1].height} button={homeCardData[1].button} />
            <div className='flex flex-row gap-8'>
                <HomeCard backgroundImgUrl={homeCardData[2].backgroundImgUrl} productTitle={homeCardData[2].productTitle} productPrice={homeCardData[2].productPrice} productPageLink={homeCardData[2].productPageLink} width={homeCardData[2].width} height={homeCardData[2].height} button={homeCardData[2].button} />
                <HomeCard backgroundImgUrl={homeCardData[3].backgroundImgUrl} productTitle={homeCardData[3].productTitle} productPrice={homeCardData[3].productPrice} productPageLink={homeCardData[3].productPageLink} width={homeCardData[3].width} height={homeCardData[3].height} button={homeCardData[3].button} />
            </div>
        </div>
    </div>
  )
}
const homeCardData = [
    {
        backgroundImgUrl: "/images/homeCard1.webp",
        productTitle: "Living Room",
        productPrice: "15 products",
        productPageLink: "/products/living-room",
        width: 580,
        height: 455,
        button: false,
    },
    {
        backgroundImgUrl: "/images/homeCard2.webp",
        productTitle: "Bedroom",
        productPrice: "24 products",
        productPageLink: "/products/bedroom",
        width: 580,
        height: 283,
        button: false,
    },
    {
        backgroundImgUrl: "/images/homeCard3.webp",
        productTitle: "Walk-in Closet",
        productPrice: "30 products",
        productPageLink: "/products/walk-in-closet",
        width: 275,
        height: 275,
        button: false,
    },
    {
        backgroundImgUrl: "/images/homeCard4.webp",
        productTitle: "Kitchen",
        productPrice: "24 products",
        productPageLink: "/products/kitchen",
        width: 275,
        height: 275,
        button: false,
    },
  ]

export default BrowseByRooms
