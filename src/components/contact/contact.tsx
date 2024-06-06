import { Caveat } from "next/font/google";
import React from "react";
import ContactCard from "./contactcard";
import { contacts } from "@/lib/constants";
import ContactForm from "./contactform";
import TransitionContainer from "../transitioncontainer";
import { handleSendMail } from "@/lib/mail";
const caveat = Caveat({ subsets: ["latin"] });
export default function Contact() {
  return (
    <section
      id="contact"
      className="h-max w-full space-y-8 bg-gradient-center px-8 pb-6 "
    >
      <div className="text-center uppercase tracking-wider ">
        <h2 className="my-2 text-2xl font-bold">Contact Me</h2>
        <div className="flex items-center justify-center space-x-3 align-middle">
          <p className="text-mainGreen ">Let's</p>
          <span
            className={`${caveat.className} font-caveat relative bottom-0.5 text-center text-2xl font-extrabold lowercase tracking-normal `}
          >
            Talk About Ideas
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-6 md:flex-row md:items-center md:justify-center md:gap-6">
        <div className="flex flex-col gap-y-6 self-start">
          <TransitionContainer variant="LEFT">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.title}
                title={contact.title}
                description={contact.description}
                Icon={contact.Icon}
              />
            ))}
          </TransitionContainer>
        </div>

        <div>
          <TransitionContainer variant="RIGHT">
            <ContactForm handleSendMail={handleSendMail} />
          </TransitionContainer>
        </div>
      </div>
    </section>
  );
}
