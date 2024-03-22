import { useContext } from "react"
import { CustomNavigationContext } from "../App"
import { animateScroll } from "react-scroll";

export const useCustomNavigation = () => {
  const context = useContext(CustomNavigationContext);

  const navigateTo = (index: number) => {
    animateScroll.scrollToTop()
    context?.scrollTo(index)
  }

  return { navigateTo }
}