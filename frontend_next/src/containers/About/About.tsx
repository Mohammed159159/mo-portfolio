/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import style from "./About.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../api/client";
import { AppWrap} from "../../wrapper";
//TODO: Add environmental variables to client.ts
function About() {
    //dynamically populate abouts array from sanity
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => setAbouts(data));
    }, []);

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
                        <img
                            alt={about["title"]}
                            src={urlFor(about["imgUrl"]).url()}
                        ></img>
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {about["title"]}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {about["description"]}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default AppWrap(About, "about");
