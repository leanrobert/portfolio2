import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { useEffect } from "react"
import { useActiveSectionContext } from "@/context/active-section-context";

export function useSectionView(sectionName: SectionName, threshold = 0.75) {
	const { ref, inView } = useInView({
		threshold
	})

	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
	}, [inView, setActiveSection, sectionName, timeOfLastClick])
	
	return {
		ref
	}
}