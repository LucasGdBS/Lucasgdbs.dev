import { KeyboardArrowDown } from "@mui/icons-material";
import PropTypes from "prop-types";
import classNames from "classnames";

function ArrowDown({ className }) {
  return (
    <div className="absolute bottom-5 animate-bounce">
      <KeyboardArrowDown className={classNames("text-bl text-5xl", className)} />
    </div>
  );
}

ArrowDown.propTypes = {
  className: PropTypes.string,
};

export default ArrowDown;
