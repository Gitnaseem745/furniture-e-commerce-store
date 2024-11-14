import { useState } from "react";

interface ProductBottomSectionProps {
    desc?: string;
    information?: {
        color?: string;
        material?: string;
        style?: string;
    };
}
const ProductBottomSection: React.FC<ProductBottomSectionProps> = ({
    desc = "",
    information = {
        color: "",
        material: "",
        style: "None",
    }
}) => {
    const [description, setDescription] = useState<boolean>(true);
    const [info, setInfo] = useState<boolean>(false);

    const handleDescription = () => {
        setDescription(true);
        setInfo(false);
    }
    const handleInformation = () => {
        setDescription(false);
        setInfo(true);
    }
  return (
    <div className="w-full max-h-fit flex justify-center items-center flex-col px-8 mt-8 gap-10">
        <div className="flex flex-row gap-5 cursor-pointer">
            <div>
            <p onClick={handleDescription} className={`mb-2 ${description && 'text-[#274C4F]'}`}>DESCRIPTION</p>
            {description && <hr className="border-none h-1 bg-[#274C4F]"/>}
            </div>
            <div>
            <p onClick={handleInformation} className={`mb-2 ${info && "text-[#274C4F]"}`} >ADDITIONAL INFORMATION</p>
            {info && <hr className="border-none h-1 bg-[#274C4F]"/>}
            </div>
        </div>
        {description && <div className="min-h-[300px]">{desc}</div>}
        {info && <div className="w-full">
                <table className="w-full table-auto border-collapse border border-gray-200">
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Color</td>
                        <td className="border border-gray-300 px-4 py-2">{information.color}</td>
                    </tr>
                    <tr className="bg-[#F6F7F9]">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Material</td>
                        <td className="border border-gray-300 px-4 py-2">{information.material}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Style</td>
                        <td className="border border-gray-300 px-4 py-2">{information.style}</td>
                    </tr>
                </table>

            </div>}
    </div>
  )
}

export default ProductBottomSection
