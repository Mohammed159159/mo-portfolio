/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./About.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import images from "../../constants/images"

const abouts = [
    {
        title: "Front-end Developer",
        description: "Have 2years of front end experience",
        imageUrl: images.about01.src,
    },
    {
        title: "Back-end Developer",
        description: "Have 1year of back end expereince",
        imageUrl: images.about02.src,
    },
    {
        title: "Agile Professional",
        description: "Have over 20+ years of experience with agile frameworks",
        imageUrl: images.about03.src,
    },
];
function About() {
    return (
        <>
            <div className="head-text">
                A<span> Well-carfted website </span>
                means A<span> thriving business</span>
            </div>

            <div className={style["app__profiles"]}>
                {abouts.map((about, index) => (
                    <motion.div
                        className={style["app__profiles-item"]}
                        key={`about-${index}`}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img alt={about.title} src={about.imageUrl}></img>
                        <h2 className="bold-text"
                            style={{ marginTop: 20 }}>
                            {about.title}
                        </h2> 
                        <p className="p-text"
                            style={{ marginTop: 10 }}>
                            {about.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default About;
