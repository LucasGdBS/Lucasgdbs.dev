import { KeyboardArrowDown } from "@mui/icons-material";
import PropTypes from "prop-types";
import classNames from "classnames";

function ArrowDown({ className }) {
  return (
    <div className="absolute bottom-5 animate-bounce">
      <KeyboardArrowDown 
        className={classNames(className)}
        fontSize="large"
        style={{fontSize: "50"}}
      />
      
    </div>
  );
}

ArrowDown.propTypes = {
  className: PropTypes.string,
};

export default ArrowDown;
