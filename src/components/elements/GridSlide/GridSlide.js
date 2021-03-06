import cx from "classnames";

import "./GridSlide.scss";

export default function GridSlide({ items, even }) {
    return (
        <div className={"grid-slide"}>
            <div
                className={cx(
                    "grid-slide__item flex",
                    { "flex-wrap": even },
                    { "flex-wrap-reverse": !even }
                )}
            >
                {items.map(({ src, url, alt, title }, idx) => {
                    const TagName = url ? "a" : "div";

                    return (
                        <TagName
                            className={"grid-slide__img relative"}
                            href={url}
                            key={url}
                        >
                            <img key={idx} src={src} alt={alt} title={title} />
                            <span
                                className={
                                    "grid-slide__description flex flex-col-reverse px-10 py-8"
                                }
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </span>
                        </TagName>
                    );
                })}
            </div>
        </div>
    );
}
