/**
 *
 * FrequencyCountTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { getFrequencyCount } from './helper';

/* eslint-disable react/prefer-stateless-function */
class FrequencyCountTable extends React.PureComponent {
  render() {
    const { people } = this.props;
    const counts = getFrequencyCount(people);
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <FormattedMessage {...messages.characterHeader} />
            </TableCell>
            <TableCell>
              <FormattedMessage {...messages.countHeader} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...counts].map(entry => (
            <TableRow key={entry[0]}>
              <TableCell>{entry[0]}</TableCell>
              <TableCell>{entry[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

FrequencyCountTable.propTypes = {
  people: PropTypes.array.isRequired,
};

export default FrequencyCountTable;
