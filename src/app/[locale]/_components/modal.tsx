"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

import type { Project } from "~/lib/types";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface Props {
  modal: {
    active: boolean;
    index: number;
  };
  projects: Project[];
}

export function Modal({ modal: { active, index }, projects }: Props) {
  const modalContainer = useRef(null);

  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", ({ pageX, pageY }) => {
      xMoveContainer(pageX);
      yMoveContainer(pageY);

      xMoveCursor(pageX);
      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute flex h-[350px] w-[300px] items-center justify-center overflow-hidden bg-white"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="transition-modalSlider absolute h-full w-full"
        >
          {projects.map(({ title, image, color, link }, index) => {
            if (!image) {
              return null
            }

            return (
              <Link
                href={link}
                className="flex h-full w-full items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={`/_static/images/projects/${image}`}
                  className="h-full object-cover"
                  width={300}
                  height={0}
                  alt={title}
                />
              </Link>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="pointer-events-none absolute z-[2] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-transparent text-sm font-light text-white"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="pointer-events-none absolute z-[2] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-transparent text-sm font-light text-white"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
    </>
  );
}
