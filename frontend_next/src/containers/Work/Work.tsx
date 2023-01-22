/* eslint-disable @next/next/no-img-element */
import React from "react";
import { portfolioItems, portfolioText } from "../../constants/text";
import style from "./Work.module.scss";
import { useState, useEffect } from "react";
import { AiFillGithub, AiFillEye } from "react-icons/Ai";
import { motion } from "framer-motion";
import { client, urlFor } from "../../api/client";
import { AppWrap, MotionWrap } from "../../wrapper";
import parse from "html-react-parser";

type WorkData = {
    title: string;
    description: string;
    projectLink: string;
    codeLink: string;
    imgUrl: string;
    tags: string[];
};

type FilterWork = {
    title: string;
    description: string;
    projectLink: string;
    codeLink: string;
    imgUrl: string;
    tags: string[];
};

function Work() {
    //define animation for portfolio cards
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    //fetch portfolio data from sanity.io
    const [workData, setWorkData] = useState<WorkData[]>([]);
    const [filterWork, setFilterWork] = useState<FilterWork[]>([]);
    useEffect(() => {
        const query = "*[_type == 'works']";
        client.fetch(query).then((data) => {
            setWorkData(data);
            setFilterWork(data);
        });
    }, []);

    //define portfolio filter active indicator
    const [activeFilter, setActiveFilter] = useState<string>("All");

    //handle filter logic
    const portfolioItemsFilter = (item: string): void => {
        setActiveFilter(item);
        setAnimateCard({ y: 100, opacity: 0 });
        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });
            if (item === "All") {
                setFilterWork(workData);
            } else {
                setFilterWork(
                    workData.filter((work) =>
                        work["tags"].includes(item)
                    )
                );
            }
        }, 500);
    };

    return (
        <div className={style["app__work"]}>
            <h2 className="head-text">
                {parse(portfolioText)}
            </h2>

            <div className={style["app__work-filter"]}>
                {portfolioItems.map((item, index) => (
                    <div
                        className={`${
                            style["app__work-filterItem"]
                        } p-text app__flex ${
                            activeFilter === item ? style["active"] : ""
                        }`}
                        onClick={() => {
                            portfolioItemsFilter(item)
                        }}
                        key={`${index}-${item}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                className={style["app__work-items"]}
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
            >
                {
                    //display work-items from filterwork array coming from sanity
                    filterWork.map((item, index) => (
                        <div
                            className={`${style["app__work-item"]} app__flex`}
                            key={`${index}-${item}`}
                        >
                            <div
                                className={`${style["app__work-itemImage"]} app__flex`}
                            >
                                <img
                                    src={urlFor(item["imgUrl"]).url()}
                                    alt={item["title"]}
                                />
                                <motion.div
                                    className={`${style["app__work-itemHover"]} app__flex`}
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                        staggerChildren: 0.5,
                                    }}
                                >
                                    <a
                                        href={item["projectLink"]}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>
                                    <a
                                        href={item["codeLink"]}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>
                            <div
                                className={`${style["app__work-itemContent"]} app__flex`}
                            >
                                <h4 className="bold-text">{item["title"]}</h4>
                                <p className="p-text">{item["description"]}</p>
                                <div
                                    className={`${style["app__work-itemTags"]} app__flex`}
                                >
                                    {[...item["tags"]].map((tag, index) => (
                                        <div
                                            className={`${style["app__work-itemTag"]} p-text app__flex`}
                                            key={`${index}-${tag}`}
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    );
}

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");
