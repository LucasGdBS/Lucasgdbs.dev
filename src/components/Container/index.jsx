import PropTypes from "prop-types";
import classnames from 'classnames';

function Container({ children, className }) {
  return(
    <div className={classnames("flex items-center justify-center py-16 flex-col h-screen gap-10 relative overflow-x-hidden", className)}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;