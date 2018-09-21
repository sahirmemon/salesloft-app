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

/* eslint-disable react/prefer-stateless-function */
class FrequencyCountTable extends React.PureComponent {
  // Get the frequency of each character in the email addresses of all the
  // people.
  // Returns a Map(key, value) where key is the character and value is the
  // count.
  getFrequencyCount(people) {
    const counts = new Map();
    people.forEach(person => {
      const characters = person.email_address.split('');
      characters.forEach(char => {
        if (counts.has(char)) {
          counts.set(char, counts.get(char) + 1);
        } else {
          counts.set(char, 1);
        }
      });
    });
    const countsDescending = new Map(
      [...counts.entries()].sort((a, b) => b[1] - a[1]),
    );
    return countsDescending;
  }

  render() {
    const { people } = this.props;
    const counts = this.getFrequencyCount(people);
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
