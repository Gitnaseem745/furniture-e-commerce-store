import HomeCard from '@/components/HomeCard'
import PageIntro from '@/components/PageIntro'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Furniture",
    description: "Your one way to shop for furniture :)",
  };
const About = () => {
  return (
    <div className='px-[90px]'>
        <PageIntro sectionName={'About Us'} sectionBgImage={'images/aboutSectionBg.webp'}/>
        <div className='flex flex-col gap-8 w-full justify-center items-center py-10 mt-5'>
            <h1 className='text-2xl font-semibold text-center'>Adipiscing ullamcorper ultricies massa scelerisque magnis quisque <br/> eget parturient nam</h1>
            <div className='flex justify-center items-start gap-10 flex-row text-neutral-600'>
                <div className='flex flex-col gap-6'>
                <p>Lorem ipsum dolor sit amet consectetur. Blandit at maecenas dui sed amet sit enim vitae. Amet purus dictum urna sagittis dignissim. At fermentum nisl ullamcorper orci. Pellentesque id tempor lacus aliquet tempus vitae nibh habitasse consectetur. </p>
                <p>Augue quis cras blandit habitant neque. Faucibus vestibulum id nisi ligula ultricies et vehicula. Et adipiscing mattis egestas mi placerat duis congue id. Scelerisque integer pulvinar justo sed eget.</p>
                </div>
                <div className='flex flex-col gap-6'>
                <p>Lorem ipsum dolor sit amet consectetur. Blandit at maecenas dui sed amet sit enim vitae. Amet purus dictum urna sagittis dignissim. At fermentum nisl ullamcorper orci. Pellentesque id tempor lacus aliquet tempus vitae nibh habitasse consectetur. </p>
                <p>Augue quis cras blandit habitant neque. Faucibus vestibulum id nisi ligula ultricies et vehicula.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-6 mt-4 justify-center items-center'>
            <h1 className='font-semibold text-2xl'>Our team</h1>
            <p className='text-neutral-600 text-center text-sm mb-2'>Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget nullam <br/> non nisi elementum sagittis vitae et leo duis ut diam quam.</p>
            <div className='flex flex-row gap-6 flex-wrap justify-center items-center'>
                {
                    teamMembers.map((member, i) => <HomeCard key={i} width={415} height={415} button={false} productTitle={member.name} backgroundImgUrl={member.img} productPrice={member.position} />)
                }
            </div>
        </div>
        <div className='flex flex-row gap-10 justify-center items-center w-full my-20 px-10'>
            <div className='flex flex-col gap-5 justify-start items-start w-5/12'>
                <h1 className='text-2xl font-semibold'>Furniture that will last a lifetime</h1>
                <p className='text-neutral-600 leading-[28px] pr-6'>Sit massa etiam urna id. Non pulvinar aenean ultrices lectus vitae imperdiet vulputate a eu. Aliquet ullamcorper leo mi vel sit pretium euismod eget libero. Nullam iaculis vestibulum arcu id urna. In pellentesque volutpat quis condimentum lectus</p>
                <Link
                className="bg-white rounded-3xl max-w-fit px-6 py-3 hover:bg-[#274C4F] text-black hover:text-white transition-all ease-in delay-50 shadow-lg mt-4"
                href={'/'}
            >
                Learn More
                </Link>
            </div>
            <Image alt='none' src="/images/about-us-cta-image.webp" width={800} height={800}  />
        </div>
    </div>
  )
}
const teamMembers = [
    {
        name: 'Libby Lynch',
        position: 'Seller',
        img: 'images/team-member-1.webp',
    },
    {
        name: 'Elvis Morgan',
        position: 'Seller',
        img: 'images/team-member-2.webp',
    },
    {
        name: 'Aron Bowers',
        position: 'Seller',
        img: 'images/team-member-3.webp',
    },
    {
        name: 'Melany Ellis',
        position: 'Manager',
        img: 'images/team-member-4.webp',
    },
    {
        name: 'Jordyn Beck',
        position: 'Boss',
        img: 'images/team-member-5.webp',
    },
    {
        name: 'Emilie Beck',
        position: "Boss's Wife",
        img: 'images/team-member-6.webp',
    },
]
export default About
