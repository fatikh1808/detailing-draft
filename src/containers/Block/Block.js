import cx from "classnames";

export default function Block({ className = "py-6 md:py-12", children }) {
    return <div className={cx("block", className)}>{children}</div>;
}
