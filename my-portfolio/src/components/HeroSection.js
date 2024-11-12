// HeroSection.js
import { motion } from "framer-motion";

const HeroSection = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Welcome to Arsalan Ahmed's Portfolio</h1>
        <p>Software Developer | Automation Expert | AI Enthusiast</p>
    </motion.div>
);
export default HeroSection;
