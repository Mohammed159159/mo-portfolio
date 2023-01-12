import React from "react";

function NavigationDots(active:string) {
    return (
        <div className="app__navdots">
            {["home", "about", "work", "skills", "testimonials", "contact"].map(
                (item, index) => (
                    <a
                        className="app__navdots-dot"
                        href={`#${item}`}
                        key={`${index}-${item}`}
                        style={
                            active === item
                                ? { backgroundColor: "#313BAC" }
                                : {}
                        }
                    ></a>
                )
            )}
        </div>
    );
}

export default NavigationDots;
