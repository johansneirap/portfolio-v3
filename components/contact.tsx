"use client";

import React from "react";
import Threshold from "./threshold";
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
    <section
      id="contact"
      ref={ref}
      className="w-full max-w-2xl scroll-mt-24 px-4 pb-4"
    >
      <Threshold section="Contact" title={t("Title")} context={t("Kicker")} />

      <motion.div
        className="bevel-inset bg-graphite-900 p-5 sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="leading-relaxed text-steel-400">
          {t.rich("Subtitle", {
            a: (chunk) => (
              <a
                className="text-brass-300 underline underline-offset-2"
                href="mailto:johansneirap@gmail.com"
              >
                {chunk}
              </a>
            ),
          })}
        </p>

        <form
          id="contactForm"
          className="mt-8 flex flex-col gap-5"
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
          <label className="flex flex-col gap-2">
            <span className="plaque-label text-steel-400">
              {t("EmailPlaceholder")}
            </span>
            <input
              className="h-12 border border-steel-600 bg-void px-4 text-steel-200 outline-none transition-colors placeholder:text-steel-400 focus:border-brass-500"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder={t("EmailPlaceholder")}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="plaque-label text-steel-400">
              {t("MessagePlaceholder")}
            </span>
            <textarea
              className="h-40 resize-none border border-steel-600 bg-void p-4 text-steel-200 outline-none transition-colors placeholder:text-steel-400 focus:border-brass-500"
              name="message"
              placeholder={t("MessagePlaceholder")}
              required
              maxLength={5000}
            />
          </label>

          <SubmitBtn text={t("Submit")} />
        </form>
      </motion.div>
    </section>
  );
}
