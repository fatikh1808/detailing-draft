import { createElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Heading.scss";

export default function Heading({
    type = "h2",
    text = "",
    subText = "",
    className = "",
    underline,
    light,
    center,
    left,
    right,
    subTextStyle = {},
    subTextClassName = "",
}) {
    const headingMap = {
        h1: "h1",
        h2: "h2",
    };

    return (
        <div
            className={cx(
                "heading flex flex-col",
                { "items-start": left },
                { "items-center": center && !left && !right },
                { "items-right": right }
            )}
        >
            {createElement(
                type,
                {
                    className: cx(
                        {
                            "mb-6": !subText,
                        },
                        {
                            "mb-4": !!subText,
                        },
                        // { heading__underline: underline },
                        headingMap[type],
                        className
                    ),
                },
                [text]
            )}
            {subText && (
                <span
                    className={cx("heading__sub block mb-6", subTextClassName)}
                    style={subTextStyle}
                >
                    {subText}
                </span>
            )}
            {underline && <span className={"heading__underline flex mb-6"} />}
        </div>
    );
}

Heading.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.object,
    subText: PropTypes.string,
    className: PropTypes.string,
    underline: PropTypes.bool,
    light: PropTypes.bool,
    center: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
};

Heading.defaultProps = {
    type: "h2",
    text: {},
    subText: "",
    className: "",
    underline: true,
    light: false,
    center: true,
    left: false,
    right: false,
};
