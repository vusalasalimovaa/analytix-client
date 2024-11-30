import "./curve.scss";
import { motion } from "framer-motion";

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className="svgCurve">
      <motion.path
        variants={pathAnimation}
        animate="enter"
        initial="initial"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
