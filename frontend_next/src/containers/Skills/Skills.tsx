/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import style from "./Skills.module.scss";
import { client, urlFor } from "../../api/client";
import { AppWrap, MotionWrap } from "../../wrapper";
import parse from "html-react-parser";
import { skillsText } from "../../constants/text";
import { delay, motion } from "framer-motion";

type Skill = {
    name: string;
    bgColor: string;
    icon: string;
};

type Experience = {
    year: string;
    works: { name: string; company: string; desc: string }[];
};
function Skills() {
    const [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        const query = "*[_type == 'skills']";
        client.fetch(query).then((skills) => setSkills(skills));
    }, []);

    const [experiences, setExperiences] = useState<Experience[]>([]);
    useEffect(() => {
        const query = "*[_type == 'experiences']";
        client.fetch(query).then((experiences) => setExperiences(experiences));
    }, []);

    return (
        <div className={style["app__skills"]}>
            <h1 className="head-text">{parse(skillsText)}</h1>
            <div className={style["app__skills-content"]}>
                <motion.div
                    className={`${style["app__skills-contentIcons"]} app__flex`}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            className={`${style["app__skills-contentIcon"]} app__flex`}
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            key={`${index}-${skill}`}
                        >
                            <div style={{ backgroundColor: skill["bgColor"] }}>
                                <img
                                    src={urlFor(skill["icon"]).url()}
                                    alt={skill["name"]}
                                ></img>
                            </div>

                            <p className="p-text">{skill["name"]}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.2 }}
                    className={style["app__skills-contentExperiences"]}
                >
                    {experiences.map((experience, index) => (
                        <motion.div
                            className={style["app__skills-contentExperience"]}
                            key={`${index}-${experience}`}
                        >
                            <p
                                className={`${style["app__skills-year"]} p-text bold-text`}
                            >
                                {experience["year"]}
                            </p>
                            <motion.div
                                className={style["app__skills-yearWorks"]}
                            >
                                {experience["works"].map((work, index) => (
                                    <motion.div
                                        id={work.desc}
                                        className={
                                            style["app__skills-yearWork"]
                                        }
                                        key={`${index}-${work}`}
                                    >
                                        <h4>{work.name}</h4>
                                        <p className="p-text">{work.company}</p>
                                        <Tooltip
                                            anchorId={work.desc}
                                            content={work["desc"]}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
