/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TypoH1, TypoLead } from '../Typography';
import { CircleDollarSign, Info, Menu, ScrollText, Globe, PhoneCall } from 'lucide-react';

const HeroSectionMain = () => {
  return (
    <main className="bg-box min-h-[90vh] h-[90vh] w-full flex">
      <aside className='group border h-full w-max px-10 py-6 hover:w-[375px] backdrop-blur-md dark:backdrop-brightness-90 backdrop-brightness-125'>
        <Menu></Menu>
        <nav>
          <ul className='flex flex-col gap-6 pt-6'>
            <li><a href="https://www.deped.gov.ph/about-deped/careers/" className='flex items-center gap-6 text-foreground hover:text-primary'> <Info /> <span className='hidden group-hover:block'>About US</span></a></li>
            <li><a href="https://www.deped.gov.ph/deped-orders/" className='flex items-center gap-6 text-foreground hover:text-primary'> <CircleDollarSign/> <span className='hidden group-hover:block'>Inssuance</span></a></li>
            <li><a href="https://www.deped.gov.ph/category/procurement/bid-opportunities" className='flex items-center gap-6 text-foreground hover:text-primary'> <ScrollText/> <span className='hidden group-hover:block'>Procurement</span></a></li>
            <li><a href="https://www.deped.gov.ph/regions/region-iv-a/" className='flex items-center gap-6 text-foreground hover:text-primary'> <Globe/> <span className='hidden group-hover:block'>Region</span></a></li>
            <li><a href="https://www.deped.gov.ph/feedback" className='flex items-center gap-6 text-foreground hover:text-primary'> <PhoneCall/> <span className='hidden group-hover:block'>Feedback</span></a></li>
          </ul>
        </nav>
      </aside>
      <article className='py-20 px-6 max-w-screen-lg container mx-auto'>
        <div className='flex justify-center items-center m-6'>
          <img className='rounded-lg shadow-2xl w-[500px] h-[275px]' src="https://the-post-assets.sgp1.digitaloceanspaces.com/2023/03/DEPED_thumbnail.png" width={500} height={375} alt='hello'></img>
        </div>
        <TypoH1 className='text-center'>Dep<strong className="text-primary">ED</strong> Department of Education.</TypoH1>
        <TypoLead className='text-center leading-7 pt-7'>Through various initiatives, the department strives to improve teaching methodologies, curriculum development, and infrastructure, ultimately contributing to the nation's educational advancement.</TypoLead>
      </article>
    </main>
  )
}

export default HeroSectionMain
