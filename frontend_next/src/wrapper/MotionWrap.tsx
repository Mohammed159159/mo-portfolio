import React from 'react'
import { motion } from 'framer-motion';

const MotionWrap = (Component: React.FunctionComponent, classNames?: string) => function HOC() {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1]}}
            viewport={{margin: '-50px', once: true}}
            transition={{duration: 0.5}}
            className={`${classNames}`}
            style={{width: "100%"}}
        >
            
            <Component/>
        </motion.div>
    )
}

export default MotionWrap;
