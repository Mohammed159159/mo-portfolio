import React from "react";
import { pageSections } from "../../constants/text";
import style from "./NavigationDots.module.scss"
function NavigationDots({active}: {active: string}) {
    return (
        <div className={style["app__navigation"]}>
            {pageSections.map(
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
