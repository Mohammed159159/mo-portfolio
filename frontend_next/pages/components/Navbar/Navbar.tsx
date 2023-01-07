import React, { useState } from "react";
import style from "./Navbar.module.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={style["app__navbar"]}>
            <div className={style["app__navbar-logo"]}>Mohammed</div>
            <ul className={style["app__navbar-links"]}>
                {[
                    "home",
                    "about",
                    "contacts",
                    "work",
                    "skills",
                    "testimonials",
                ].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className={style["app__navbar-menu"]}>
                <div className={style["app__navbar-menuIcon--open"]}>
                    <HiMenuAlt4 onClick={() => setToggle(true)} />
                </div>
                {toggle && (
                    <motion.div
                        className={style["app__navbar-menuBody"]}
                        animate={{ x: [300, 0]}}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                    >
                        <motion.div
                            className={style["app__navbar-menuIcon--close"]}
                            animate={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                        </motion.div>

                        <ul>
                            {[
                                "home",
                                "about",
                                "contacts",
                                "work",
                                "skills",
                                "testimonials",
                            ].map((item) => (
                                <li
                                    onClick={() => setToggle(false)}
                                    className="app__flex p-text"
                                    key={`menu-${item}`}
                                >
                                    <a href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
