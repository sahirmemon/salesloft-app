/**
 *
 * LoadingMessage
 *
 */

import React from 'react';
import { Typography } from '@material-ui/core';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class LoadingMessage extends React.PureComponent {
  render() {
    return (
      <Typography variant="subheading" gutterBottom>
        <FormattedMessage {...messages.loading} />
      </Typography>
    );
  }
}

LoadingMessage.propTypes = {};

export default LoadingMessage;
