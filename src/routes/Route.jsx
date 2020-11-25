import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
  const signed = true;
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
