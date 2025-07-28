import { motion as Motion } from "framer-motion";

const wordAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.4,
    },
  }),
};

const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  return (
    <p className="animated-paragraph">
      {words.map((word, i) => (
        <Motion.span
          key={i}
          variants={wordAnimation}
          initial="hidden"
          animate="visible"
          custom={i}
          style={{ display: "inline-block", marginRight: "6px" }}
        >
          {word}
        </Motion.span>
      ))}
    </p>
  );
};

export default AnimatedText;
