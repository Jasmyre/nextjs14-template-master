/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TypoLead, TypoP, TypoH1 } from '../Typography';
import { CircleDollarSign, Info, Menu, ScrollText, Globe, PhoneCall } from 'lucide-react';

const K212SectionMain = () => {
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
      <article className='py-20 px-6 max-w-screen-lg container mx-auto max-h-[90vh] overflow-y-scroll'>
      <div className='flex justify-center items-center m-6'>
          <img className='rounded-lg shadow-2xl w-[500px] h-[275px]' src="https://depedclub.com/wp-content/uploads/2023/08/DepEd-K-to-12-Curriculum-Guides.webp" width={500} height={375} alt='hello'></img>
        </div>
        <TypoH1>K to 12</TypoH1>
        <TypoLead>Grade 1 to 12</TypoLead>
        <TypoP>The DepED Kto12 Page serves as a comprehensive resource for educators, students, and parents involved in the K to 12 educational system in the Philippines. It provides essential information, updates, and guidelines related to the curriculum, teaching methodologies, and assessment strategies. This platform aims to enhance the learning experience by promoting transparency and accessibility to educational materials, ensuring that all stakeholders are well-informed and equipped to support student success.</TypoP>
      </article>
    </main>
  )
}

export default K212SectionMain
