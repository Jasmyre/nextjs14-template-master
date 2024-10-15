/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TypoH1, TypoLead, TypoP } from '../Typography';
import { CircleDollarSign, Info, Menu, ScrollText, Globe, PhoneCall } from 'lucide-react';

const AboutSectionMain = () => {
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
          <img className='rounded-lg shadow-2xl w-[500px] h-[275px]' src="https://depedph.com/wp-content/uploads/2024/01/deped-logo-philippines.png" width={500} height={375} alt='hello'></img>
        </div>
        <TypoH1>About</TypoH1>
        <TypoLead>What we do</TypoLead>
        <TypoP>The Department of Education (DepED) is dedicated to providing quality education to all learners in the Philippines. It aims to promote access to education, enhance the quality of teaching and learning, and ensure the holistic development of students. Through various programs and initiatives, DepED strives to create an inclusive and equitable educational environment that fosters lifelong learning and prepares individuals for the challenges of the future. The department is committed to continuous improvement and innovation in the education sector, ensuring that every learner is equipped with the necessary skills and knowledge to succeed.</TypoP>
      </article>
    </main>
  )
}

export default AboutSectionMain
