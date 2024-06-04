import { Caveat } from 'next/font/google';
import React from 'react'
import ContactCard from './contactcard';
import { contacts } from '@/lib/constants';
import ContactForm from './contactform';
const caveat = Caveat({ subsets: ["latin"] });
export default function Contact() {
    return (
        <section id='contact' className='w-full h-max bg-gradient-center px-8 space-y-8 pb-6'>
            <div className='uppercase text-center tracking-wider '>
                <h2 className='font-bold text-2xl my-2'>Contact Me</h2>
                <div className='flex space-x-3 items-center justify-center align-middle'>
                    <p className='text-mainGreen '>Let's</p>
                    <span
                        className={`${caveat.className} font-caveat relative bottom-0.5 text-2xl text-center font-extrabold lowercase tracking-normal `}
                    >
                        Talk About Ideas
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-y-6 '>
                {
                    contacts.map(contact => <ContactCard key={contact.title} title={contact.title} description={contact.description} Icon={contact.Icon} />)
                }
            </div>
            <div>
                <ContactForm />
            </div>
        </section>
    )
}
