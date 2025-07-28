import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section1 from '../components/homeComponents/Section1';
import Section2 from '../components/homeComponents/Section2';
import Section3 from '../components/homeComponents/Section3';
import Section4 from '../components/homeComponents/Section4';
import useIsMobile from '../utils/UseViewportIsMobile';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
      delay: 0
    }
  }
};

const HomeView = () => {
  const isMobile = useIsMobile();
  const viewportSettings = { once: true, amount: isMobile ? 0.1 : 0.3 };


  return (
    <div className="home-view">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <Section1 />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <Section2 />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <Section3 />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <Section4 />
      </motion.div>
    </div>
  );
};

export default HomeView;
