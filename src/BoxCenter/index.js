import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './box-center.css';

export default function BoxCenter(props) {
  const { children, className } = props;
  return (
    <>
      <div className={cx(css.boxCenterColumn, 'boxCenterColumn', className)}>
        <div className={cx(css.boxCenterLine, 'boxCenterLine')}>{children}</div>
      </div>
    </>
  );
}

BoxCenter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
BoxCenter.defaultProps = {
  children: null,
  className: null,
};
