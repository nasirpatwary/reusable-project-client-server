import { motion } from "framer-motion";

const Motion1 = () => {
    const parent = {
        hidden: { opacity: 0, sclae: 0.9 },
        show: { opacity: 1, sclae: 1}
    }
    const chileConten = {
        hidden: { opacity: 0, sclae: 0.5 },
        show: { opacity: 1, sclae: 1}
    }
    return (
        <motion.div 
        variants={parent}
        initial="hidden"
        animate="show"
        transition={{duration: 2, ease: "easeInOut", delayChildren: 1, staggerChildren:1}}
        // transition={{duration: 5, type: "tween", ease: "linear"}}
        className="size-64 bg-indigo-500 rounded-lg mx-auto flex-wrap flex p-4 gap-4 items-center justify-center">
            {/* child container */}
            < motion.div
            variants={chileConten}
             className="size-24 bg-cyan-500 rounded-sm">
            </ motion.div>
            < motion.div
            variants={chileConten}
             className="size-24 bg-cyan-500 rounded-sm">
            </ motion.div>
            < motion.div
            variants={chileConten}
             className="size-24 bg-cyan-500 rounded-sm">
            </ motion.div>
            < motion.div
            variants={chileConten}
             className="size-24 bg-cyan-500 rounded-sm">
            </ motion.div>
        </motion.div>
    );
};

export default Motion1;