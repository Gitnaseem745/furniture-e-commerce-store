'use client';

import BreadCrumb from "./BreadCrumb";

interface PageIntroProps {
  sectionName: string;
  sectionBgImage: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ sectionBgImage, sectionName }) => {
  return (
    <div
      className={`w-full min-h-[350px] relative rounded-3xl overflow-hidden bg-cover bg-center flex justify-center items-center flex-col text-white`}
      style={{backgroundImage: `url(${sectionBgImage})`}}
    >
        <div className="w-full opacity-45 h-[350px] bg-black"></div>
        <div className="absolute">
            <h1 className="text-3xl font-semibold mb-4">
                {sectionName}
            </h1>
            <BreadCrumb hoverColor={'white'}/>
        </div>
    </div>
  );
};

export default PageIntro;