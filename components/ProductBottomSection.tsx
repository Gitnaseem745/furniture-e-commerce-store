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
    <section className="w-full max-h-fit flex justify-center items-center flex-col px-8 mt-8 gap-10">
        <div className="flex flex-row gap-5 cursor-pointer">
            <div>
            <p onClick={handleDescription} className={`mb-2 ${description ? 'text-[#274C4F]' : ''}`}>DESCRIPTION</p>
            {description && <hr className="border-none h-1 bg-[#274C4F]"/>}
            </div>
            <div>
            <p onClick={handleInformation} className={`mb-2 ${info ? "text-[#274C4F]" : ""}`} >ADDITIONAL INFORMATION</p>
            {info && <hr className="border-none h-1 bg-[#274C4F]"/>}
            </div>
        </div>
        {description && <div className="min-h-[300px]">{desc}</div>}
        {info && <div>
                <p>Color: {information.color}</p>
                <p>Material: {information.material}</p>
                <p>Style: {information.style}</p>
            </div>}
    </section>
  )
}

export default ProductBottomSection
