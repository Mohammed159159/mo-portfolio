/* eslint-disable @next/next/no-img-element */
import parse from "html-react-parser";
import React, { BaseSyntheticEvent, useState } from "react";
import { client } from "../../api/client";
import images from "../../constants/images";
import {
    contactText,
    submitText,
    userEmail,
    userNumber,
} from "../../constants/text";
import { AppWrap, MotionWrap } from "../../wrapper";
import style from "./Footer.module.scss";

type FormData = {
    name: string;
    email: string;
    message: string;
};
type Contact = {
    _type: string;
    name: string;
    email: string;
    message: string;
};
function Footer() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = formData;

    const [isFormLoading, setIsFormLoading] = useState<boolean>(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const handleChangeInput = (e: BaseSyntheticEvent) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setIsFormLoading(true);



        const contact: Contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        };

        try {
            client.create(contact).then(() => {
                setIsFormLoading(false);
                setIsFormSubmitted(true);
                console.log("Contact Created");
            }).catch((e) => console.log(e))
        }
        catch (err) {
            console.log(err)
        }

        



    };
        return (
            <div className={`${style["app__footer"]}`}>
                <h2 className="head-text">{parse(contactText)}</h2>
                <div className={style["app__footer-cards"]}>
                    <div className={style["app__footer-card"]}>
                        <img src={images.email.src} alt="email" />
                        <a className="p-text" href={`mailto: ${userEmail}`}>
                            {userEmail}
                        </a>
                    </div>
                    <div className={style["app__footer-card"]}>
                        <img src={images.mobile.src} alt="mobile" />
                        <a className="p-text" href={`tel:${userNumber}`}>
                            {userNumber}
                        </a>
                    </div>
                </div>
                {!isFormSubmitted? <div className={`${style["app__footer-form"]} app__flex`}>
                    <div className="app__flex">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            type="text"
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="app__flex">
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            name="message"
                            value={message}
                            onChange={handleChangeInput}
                            cols={30}
                            rows={10}
                        ></textarea>
                    </div>
                    <button
                        className="p-text"
                        type="submit"
                        onClick={handleSubmit}
                    >
                    {isFormLoading ? "Sending..." : "Send Message"}</button>
                </div> : <h3 className="head-text">{submitText}</h3>}
            </div>
        );

}

export default AppWrap(
    MotionWrap(Footer),
    "contact",
    "app__whitebg"
);
