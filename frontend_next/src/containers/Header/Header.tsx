/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Header.module.scss";
import { motion } from "framer-motion";
import images from "../../constants/images"

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

function Header() {
    return (
        <div id={style["home"]} className={`app__flex ${style["app__header"]}`}>
            <motion.div
                className={style["app__header-info"]}
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <div className={style["app__header-badge"]}>
                    <div
                        className={`badge-cmp app__flex ${style["badge-cmp"]}`}
                    >
                        <span>👋</span>
                        <div style={{ marginLeft: 30 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Mohammed</h1>
                        </div>
                    </div>
                    <div className={`tag-cmp app__flex ${style["tag-cmp"]}`}>
                        {[
                            "Web Developer",
                            "Full-Stack Developer",
                            "Freelancer",
                            "Engineering Student",
                        ].map((badge) => (
                            <p className="p-text" key={`badge-${badge}`}>
                                {badge}
                            </p>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                className={style["app__header-img"]}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
            >
                <img src={images.profile.src} alt="profile-pic" />
                <motion.img
                    className={style["overlay_circle"]}
                    src={images.circle.src}
                    alt="profile_circle"
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </motion.div>

            <motion.div
                className={style["app__header-floatings"]}
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
            >
                {[images.flutter.src, images.redux.src, images.sass.src].map(
                    (circle, index) => (
                        <div
                            className="circle-cmp app__flex"
                            key={`circle-${index}`}
                        >
                            <img src={circle} alt="circle" />
                        </div>
                    )
                )}
            </motion.div>
        </div>
    );
}

export default Header;
export {};
