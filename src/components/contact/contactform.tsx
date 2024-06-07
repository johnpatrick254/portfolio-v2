"use client";
import React, { useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
export default function ContactForm({
  handleSendMail,
}: {
  handleSendMail: any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const mailSchema = z.object({
    name: z.string().trim().min(1, "Required"),
    subject: z.string().trim().min(1, "Required"),
    email: z.string().trim().email({ message: "Please enter a valid email" }),
    body: z.string().trim().min(1, "Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      body: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const {
        body,
        email: senderMail,
        name: senderName,
        subject,
      } = mailSchema.parse(data);
      await handleSendMail({ body, senderMail, senderName, subject }).then(async () => { await handleSendMail({ body: null, senderMail, senderName, subject }) }),

        toast.success("Email sent!");
      setIsLoading(false);
    } catch (error) {
      toast.error("something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-6 text-sm font-bold uppercase tracking-wider"
    >
      <div className="space-y-4" key={1}>
        <label htmlFor="name" className="ml-4">
          Your full name <span className="text-mainGreen">*</span>
        </label>
        <span className=" ml-2 text-red-600">
          <small>{errors.name?.message}</small>
        </span>
        <input
          type="text"
          {...register("name")}
          className="h-16 w-full rounded-3xl border-2 border-foreground bg-card px-8 text-base focus:outline-none "
          name="name"
        />
      </div>
      <div className="space-y-4" key={2}>
        <label htmlFor="email" className="ml-4">
          Your email <span className="text-mainGreen">*</span>
        </label>
        <span className=" ml-2 text-red-600">
          <small>{errors.email?.message}</small>
        </span>
        <input
          type="text"
          {...register("email")}
          className="h-16 w-full rounded-3xl border-2 border-foreground bg-card px-8 text-base focus:outline-none"
          name="email"
        />
      </div>
      <div className="space-y-4" key={3}>
        <label htmlFor="subject" className="ml-4">
          Your subject <span className="text-mainGreen">*</span>
        </label>
        <span className=" ml-2 text-red-600">
          <small>{errors.subject?.message}</small>
        </span>
        <input
          type="text"
          {...register("subject")}
          className="h-16 w-full rounded-3xl border-2 border-foreground bg-card px-8 text-base focus:outline-none"
          name="subject"
        />
      </div>
      <div className="space-y-4" key={4}>
        <label htmlFor="body" className="ml-4">
          Your Message <span className="text-mainGreen">*</span>
        </label>
        <span className=" ml-2 text-red-600">
          <small>{errors.body?.message}</small>
        </span>
        <textarea
          rows={6}
          {...register("body")}
          className="w-full rounded-3xl border-2 border-foreground bg-card  px-4 py-2 text-base focus:outline-none"
          name="body"
        />
      </div>
      {isLoading ? (
        <div className="mx-auto my-2 h-12 w-max ">
          <SyncLoader color="hsl(153, 27%, 52%)" speedMultiplier={2} />
        </div>
      ) : (
        <button
          type="submit"
          className=" hero-pill mx-auto my-2  flex w-max items-center justify-center  space-x-2 rounded-3xl border-2 border-card-foreground bg-transparent px-6 py-3 text-sm font-bold uppercase shadow-pill transition-shadow duration-200 ease-in-out hover:shadow-none"
        >
          Send Message
        </button>
      )}
    </form>
  );
}
