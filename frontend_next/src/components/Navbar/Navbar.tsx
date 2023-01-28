import React, { useEffect, useRef, useState } from "react";
import style from "./Navbar.module.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { pageSections, username } from "../../constants/text";
function Navbar({ refs }: { refs: (HTMLDivElement)[] }) {
    const [toggle, setToggle] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");
    const navRef = useRef<HTMLElement | null>(null)
    const handleScroll = () => {
        refs.forEach((ref) => {
            const sectionTop = ref?.offsetTop;
            const navHeight = navRef.current?.clientHeight != undefined? navRef.current?.clientHeight : 100;
            if ((scrollY + navHeight) >= sectionTop) {
                setActiveSection(ref?.id as string);
            }
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return (
        <nav className={style["app__navbar"]} ref={navRef != undefined? navRef :null}>
            <a
                className={style["app__navbar-logo"]}
                href={`#${pageSections[0]}`}
            >
                {username}
            </a>
            <ul className={style["app__navbar-links"]}>
                {pageSections.map((item) => (
                    <li
                        className={`app__flex p-text ${
                            item === activeSection ? style["activeSection"] : ""
                        }`}
                        key={`link-${item}`}
                    >
                        <div></div>
                        <a
                            href={`#${item}`}
                        >
                            {item}
                        </a>
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
                        animate={{ x: [300, 0] }}
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
                            {pageSections.map((item) => (
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
