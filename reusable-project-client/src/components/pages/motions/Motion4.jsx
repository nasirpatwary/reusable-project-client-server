import {motion, useCycle} from "framer-motion"
const Motion4 = () => {
    const animates = [
        {x: 0, y: 0, opacity: 1},
        {x: 100, y: 100, opacity: 0.5},
        {x: -100, y: 100, opacity: 0.25},
        {x: -100, y: -100, opacity: 0},
    ]
    const [animate, cycle] = useCycle(... animates)
    return (
        <div className='border border-sky-500 size-[500px] flex flex-col justify-center items-center mx-auto'>
            <motion.div className="bg-indigo-500 size-44 rounded flex flex-wrap gap-4 p-4 justify-center items-center"
            animate={animate}
            transition={{duration: 2, delay: 0.5}}
            onTap={() => cycle()}
            >
            </motion.div>
        </div>
    );
};

export default Motion4;