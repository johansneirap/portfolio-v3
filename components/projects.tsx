"use client";

import React from "react";
import Threshold from "./threshold";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const t = useTranslations("Projects");
  return (
    <section ref={ref} id="projects" className="w-full max-w-4xl scroll-mt-24 px-4">
      <Threshold
        section="Projects"
        title={t("Title")}
        context={t("Kicker")}
      />
      <p className="mb-6 font-mono text-xs text-fg-muted">
        $ ls ~/projects --sort=recent
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <Project key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
