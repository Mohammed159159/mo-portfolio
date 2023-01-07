import React from "react";
import style from "./Header.module.scss"
import {motion} from "framer-motion"

function Header() {
    return (
        <div className={style["app__header app__flex"]}>
            <motion.div
                className={style["app__header-welcome"]}
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{duration: 0.5}}
            >
                <div style={{marginLeft: 300, paddingTop: 300}}>
                <span>👋</span>
                <p className="p-text">Hello, I am Mohammed</p>
                </div>
            </motion.div>
        </div>
    );
}

export default Header;
export {};
