/**
 *
 * ErrorMessage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

/* eslint-disable react/prefer-stateless-function */
class ErrorMessage extends React.PureComponent {
  render() {
    const { error } = this.props;
    return (
      <Typography variant="subheading" gutterBottom>
        {error}
      </Typography>
    );
  }
}

ErrorMessage.propTypes = {
  error: PropTypes.object,
};

export default ErrorMessage;
