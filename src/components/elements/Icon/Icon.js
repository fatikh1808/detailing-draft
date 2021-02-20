import PropTypes from "prop-types";
import cx from "classnames";

export default function Icon({ type, className }) {
    return !!type && <i className={cx(`dk-${type}`, className)} />;
}

Icon.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
};

Icon.defaultProps = {
    type: "",
    className: "",
};

Icon.displayname = "Icon";
