import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "./Layout";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

const AnimationLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </Layout>
  );
};

export default AnimationLayout;
