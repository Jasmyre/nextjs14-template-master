/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { TypoLead, TypoP, TypoH1 } from '../Typography';
import { CircleDollarSign, Info, Menu, ScrollText, Globe, PhoneCall } from 'lucide-react';
import { CardWithForm } from '../Form';

const ContactSectionMain = () => {
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
          <img className='rounded-lg shadow-2xl w-[500px] h-[275px]' src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={375} alt='hello'></img>
        </div>
        <TypoH1>Contact</TypoH1>
        <TypoLead>Contact Us</TypoLead>

        <div className='w-full flex justify-center items-center pt-20'>
          <CardWithForm></CardWithForm>
        </div>

      </article>
    </main>
  )
}

export default ContactSectionMain
