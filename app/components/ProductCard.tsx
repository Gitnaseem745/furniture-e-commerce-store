import { FaRegHeart, FaShuffle } from "react-icons/fa6";
import { GoEye } from "react-icons/go";

interface ProductCardProps {
    productImgUrl?: string;
    productName?: string;
    productCategory?: string;
    productPrice?: string;
    isFavorite?: boolean;
    addToCart?: boolean;
}
const ProductCard: React.FC<ProductCardProps> = ({
    productImgUrl = "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-41-500x500.webp",
    productName = "Commodo Amcorper",
    productCategory = "BEDS",
    productPrice = "$1,250.00",
    isFavorite = false,
    addToCart = false,
}) => (
    <div className="relative w-[300px] h-[456px] text-black flex flex-col shadow-xl rounded-xl">
        <div>
            <div className="w-full flex justify-center items-center overflow-hidden rounded-xl">
                <img className="cursor-pointer hover:scale-110 w-fit ease-linear delay-10 transition-all" src={productImgUrl} alt="" />
            </div>
            <div className="absolute top-[15px] right-[15px] flex flex-col gap-4">
                {icons.map((icon, i) =>
                    <p className="rounded-full hover:text-white p-2 text-sm bg-white hover:bg-[#274C4F] cursor-pointer" key={i}>
                        {icon.icon}
                    </p>
                )}
            </div>
        </div>
        <div className="h-[20%] flex justify-center items-center flex-col">
            <h1 className="text-[18px] hover:text-[#456A6D] cursor-pointer">{productName}</h1>
            <p className="text-xs font-semibold mt-1 text-neutral-500 cursor-pointer hover:text-[#456A6D]">{productCategory}</p>
        </div>
        <hr />
        <div className="flex flex-row justify-between items-center h-[14.2%] px-6">
            <p>{productPrice}</p>
            <p className="text-neutral-500 hover:text-[#456A6D] cursor-pointer">{addToCart ? "Go" : "Add"} to cart</p>
        </div>
    </div>
)
const icons = [
    {
        icon: <FaRegHeart />
    },
    {
        icon: <FaShuffle />
    },
    {
        icon: <GoEye />
    },
];
export default ProductCard
