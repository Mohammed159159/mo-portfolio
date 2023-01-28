/* eslint-disable @next/next/no-img-element */
import { easeIn, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { client, urlFor } from "../../api/client";
import { AppWrap, MotionWrap } from "../../wrapper";
import style from "./Testimonials.module.scss";

type Testimonial = {
    name: string;
    company: string;
    imgurl: string;
    feedback: string;
};

type Brand = {
    name: string;
    imgUrl: string;
};

export function Testimonials() {
    //Get testimonials from sanity
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    //watch active testimonial
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    useEffect(() => {
            const query = '*[_type == "testimonials"]';
            client.fetch(query).then((data) => setTestimonials(data));
    });

    const handleCardNav = (index: number): void => {
        setCurrentIndex(index);
    };

    //Get brands from sanity
    const [brands, setBrands] = useState<Brand[]>([]);
    useEffect(() => {
        return () => {
            const query = '*[_type == "brands"]';
            client.fetch(query).then((data) => setBrands(data));
        };
    });

    return (
        <div className={style["app__testimonials"]}>
            {testimonials.length && (
                <>
                <div
                    className={`${style["app__testimonial-card"]} app__flex`}
                >
                    <img
                        src={urlFor(testimonials[currentIndex]["imgurl"]).url()}
                        alt={testimonials[currentIndex]["name"]}
                    />
                    <div className={`${style["app__testimonial-content"]}`}>
                        <p className="p-text">
                            {testimonials[currentIndex]["feedback"]}
                        </p>
                        <h4 className="bold-text">
                            {testimonials[currentIndex]["name"]}
                        </h4>
                        <h5 className="p-text">
                            {testimonials[currentIndex]["company"]}
                        </h5>
                    </div>
                </div>

                <div
                    className={`${style["app__testimonial-nav"]} app__flex`}
                >
                    <motion.div
                        whileInView={{ x: [-30, 0] }}
                        transition={{type: easeIn}}
                        className="app__flex"
                        onClick={() => {
                            handleCardNav(
                                currentIndex === 0
                                    ? testimonials.length - 1
                                    : currentIndex - 1
                            );
                        }}
                    >
                        <HiChevronLeft />
                    </motion.div>
                    <motion.div
                        whileInView={{ x: [30, 0] }}
                        transition={{type: easeIn}}
                        className="app__flex"
                        onClick={() =>
                            handleCardNav(
                                (currentIndex + 1) % testimonials.length
                            )
                        }
                    >
                        <HiChevronRight />
                    </motion.div>
                </div>
            </>
            )}

            <div className={`${style["app__testimonials-brands"]} app__flex`}>
                {
                    brands.map((brand, index) => 
                        <motion.div key={`${index}-${brand}`}
                            whileInView={{ opacity: [0, 1] }}
                            transition={{duration: 0.5, type: "tween"}}
                        >
                            <img src={urlFor(brand["imgUrl"]).url()} alt={brand["name"]} />
                    </motion.div>
                    )
                }
            </div>
        </div>
    );
}

export default AppWrap(
    MotionWrap(Testimonials, "app__testimonials"),
    "testimonials",
    "app__primarybg"
);
