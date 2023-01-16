import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Socials() {
    return (
        <div className="app__social">
            <div>
                <FaFacebookF />
            </div>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <   BsGithub />
            </div>
        </div>
    );
}

export default Socials;
