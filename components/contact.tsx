"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const t = useTranslations("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t("Title")}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t.rich("Subtitle", {
          a: (chunk) => (
            <a className="underline" href="mailto:example@gmail.com">
              {chunk}
            </a>
          ),
        })}
      </p>

      <form
        id="contactForm"
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          console.log(data);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success(t("EmailSuccess"));
          (document.getElementById("contactForm") as HTMLFormElement).reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("EmailPlaceholder")}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t("MessagePlaceholder")}
          required
          maxLength={5000}
        />
        <SubmitBtn text={t("Submit")} />
      </form>
    </motion.section>
  );
}
