'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} flex-col lg:flex-row mx-auto flex gap-8`}
    >
      <TypingText 
        title="| People on the World"
        textStyles="text-center"
      />
      <TitleText 
        title={<>
          Track friends around you and intive them to play together in the same world
        </>}
      />
    </motion.div>
  </section>
);

export default World;
