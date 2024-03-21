"use client";

import { useState } from "react";
import Link from "next/link";

import type { Project } from "~/lib/types";
import { Modal } from "~/app/[locale]/_components/modal";
import { cn } from "~/lib/utils";

interface Props {
  title: string;
  locale: string;
  projects: Project[];
}

export function Projects({ projects, locale, title }: Props) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className="mx-auto w-full max-w-2xl px-10 sm:px-0">
        <h2 className="text-center font-monument text-2xl uppercase sm:text-5xl">
          {title}
        </h2>
        <div className="py-10">
          {projects.map((project, index) => {
            return (
              <Link key={index} href={project.link}>
                <ProjectItem
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  total={projects.length - 1}
                  image={project.image}
                  color={project.color}
                  service={
                    locale === "en" ? project.service : project.service_fr ?? ""
                  }
                  link={project.link}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Modal modal={modal} projects={projects} />
    </>
  );
}

interface ProjectItemProps extends Project {
  index: number;
  setModal: any;
  total: number;
}

function ProjectItem({
  index,
  title,
  service,
  setModal,
  total,
}: ProjectItemProps) {
  const last = total === index;

  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={cn(
        "border-t-[rgb(201, 201, 201)] group flex w-full cursor-pointer items-center justify-between border-t-[1px] py-[50px] transition-all duration-[0.2s] hover:opacity-50",
        last && "border-t-[rgb(201, 201, 201)] border-t-[1px]",
      )}
    >
      <h2 className="m-0 text-sm font-semibold transition-all duration-[0.4s] group-hover:translate-x-[-10px]">
        {title}
      </h2>
      <p className="text-right text-xs font-light text-gray-400 transition-all duration-[0.4s] group-hover:translate-x-[10px] sm:text-left sm:text-sm">
        {service}
      </p>
    </div>
  );
}
