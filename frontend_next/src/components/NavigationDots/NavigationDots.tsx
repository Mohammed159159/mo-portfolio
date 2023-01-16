import React from "react";

function NavigationDots({active}: {active: string}) {
    return (
        <div className="app__navigation">
            {["home", "about", "work", "skills", "testimonials", "contact"].map(
                (item, index) => (
                    <a
                        className="app__navigation-dot"
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
