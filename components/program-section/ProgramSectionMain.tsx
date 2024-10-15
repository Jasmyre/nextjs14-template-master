/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TypoLead, TypoP, TypoH1 } from '../Typography';
import { CircleDollarSign, Info, Menu, ScrollText, Globe, PhoneCall } from 'lucide-react';

const ProgramSectionMain = () => {
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
          <img className='rounded-lg shadow-2xl w-[500px] h-[275px]' src="https://www.deped.gov.ph/wp-content/uploads/PHOTO-1-142-1250x700.jpg" width={500} height={375} alt='hello'></img>
        </div>
        <TypoH1>Programs</TypoH1>
        <TypoLead>Our Plans</TypoLead>
        <TypoP>The DepED Program is designed to enhance the educational landscape by providing comprehensive training and resources for educators. This initiative focuses on improving teaching methodologies, integrating technology in the classroom, and fostering a collaborative learning environment. By equipping teachers with the necessary skills and knowledge, the program aims to elevate the quality of education and ensure that students receive a well-rounded learning experience.</TypoP>
        <TypoP>In addition to teacher development, the DepED Program emphasizes the importance of student engagement and participation. Through innovative curriculum design and interactive learning activities, the program seeks to inspire students to take an active role in their education. By promoting critical thinking, creativity, and problem-solving skills, the DepED Program prepares students to thrive in an ever-evolving global landscape.</TypoP>
      </article>
    </main>
  )
}

export default ProgramSectionMain
