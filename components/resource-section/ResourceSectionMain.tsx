/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TypoH1, TypoLead, TypoP } from '../Typography';
import { CircleDollarSign, Info, Menu, ScrollText, Globe, PhoneCall } from 'lucide-react';

const ResourceSectionMain = () => {
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
          <img className='rounded-lg shadow-2xl w-[500px] h-[275px]' src="https://region8.deped.gov.ph/wp-content/uploads/2022/04/Web-Banner-1.png" width={500} height={375} alt='hello'></img>
        </div>
        <TypoH1>Resources</TypoH1>

        <TypoLead>Comprehensive Learning Material</TypoLead>
        <TypoP className=''>The 6 DepED Resources offer a diverse range of educational materials designed to enhance the learning experience for students and educators alike. These resources are aligned with the Department of Education's curriculum, ensuring that they meet the necessary educational standards.</TypoP>

        {/* <TypoLead>Comprehensive Learning Material</TypoLead> */}
        <TypoP className=''>Each resource includes interactive teaching aids that facilitate engaging classroom activities. These aids are crafted to promote active participation, making learning more enjoyable and effective for students.</TypoP>

        {/* <TypoLead>Comprehensive Learning Material</TypoLead> */}
        <TypoP className=''>The collection features various assessment tools that help educators evaluate student progress accurately. These tools are designed to provide immediate feedback, allowing teachers to tailor their instruction to meet individual student needs.</TypoP>

        {/* <TypoLead>Comprehensive Learning Material</TypoLead> */}
        <TypoP className=''>Incorporating technology, the 6 DepED Resources include digital materials that can be accessed online. This flexibility allows both teachers and students to utilize the resources anytime and anywhere, promoting a more dynamic learning environment.</TypoP>

        {/* <TypoLead>Comprehensive Learning Material</TypoLead> */}
        <TypoP className=''>The resources also encompass professional development materials for educators, equipping them with the latest teaching strategies and methodologies. This focus on continuous improvement ensures that teachers remain effective in their roles.</TypoP>

        {/* <TypoLead>Comprehensive Learning Material</TypoLead> */}
        <TypoP className=''>Finally, the 6 DepED Resources emphasize inclusive education, providing materials that cater to diverse learning needs. This commitment to inclusivity ensures that all students have access to quality education, fostering an equitable learning atmosphere.</TypoP>

      </article>
    </main>
  )
}

export default ResourceSectionMain
