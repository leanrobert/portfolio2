"use client"

import { useSectionView } from "@/lib/hooks"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function About() {
	const { ref } = useSectionView("About")

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After 5 years working as a {" "}
        <span className="font-medium">Sysadmin & Network Engineer</span>, I decided to pursue my
        passion for programming. I enrolled into many courses, tutorials and bootcamps and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
			</p>

			<p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        card games, watching movies, and sharing time with my family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I&apos;m also
       guitar player and a singer.
      </p>
		</motion.section>
	)
}