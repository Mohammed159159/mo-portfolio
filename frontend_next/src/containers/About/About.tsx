/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import style from "./About.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {client, urlFor} from "../../api/client"

function About() {
    interface about {
        title: string,
        imageUrl: string,
        description: string
    }
    //dynamically populate abouts array from sanity
    const [abouts, setAbouts] = useState<about[]>([])
    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query)
        .then((data) => setAbouts(data))
    }, [])

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
                        <img alt={urlFor(about.title).url()} src={urlFor(about.imageUrl).url()}></img>
                        <h2 className="bold-text"
                            style={{ marginTop: 20 }}>
                            {urlFor(about.title).url()}
                        </h2> 
                        <p className="p-text"
                            style={{ marginTop: 10 }}>
                            {urlFor(about.description).url()}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default About;
