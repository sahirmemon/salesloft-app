/**
 *
 * DuplicatesTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class DuplicatesTable extends React.PureComponent {
  // Checks to see if the characters in both email addresses match or not. Note that this does not take
  // the order of the characters into account. This only looks at the number of different characters.
  // This is a very simple implementation. See link below for a better implementation.
  // TODO: Implement Levenshtein Algorithm for much more effective string duplicate
  // and string approximations
  // https://en.wikipedia.org/wiki/Levenshtein_distance
  // Possible implementation: https://coderwall.com/p/uop8jw/fast-and-working-levenshtein-algorithm-in-javascript
  checkForDuplicate(person1, person2) {
    const person1EmailChars = person1.email_address.split('');
    const person2EmailChars = person2.email_address.split('');
    for (let i = 0; i < person1EmailChars.length; i += 1) {
      for (let j = 0; j < person2EmailChars.length; j += 1) {
        const person1Char = person1EmailChars[i];
        const person2Char = person2EmailChars[j];
        if (person1Char === person2Char) {
          person1EmailChars.splice(i, 1);
          person2EmailChars.splice(j, 1);
          i -= 1;
          break;
        }
      }
    }
    if (person1EmailChars.length + person2EmailChars.length < 3) {
      return true;
    }
    return false;
  }

  findDuplicates(people) {
    const duplicates = [];
    for (let i = 0; i < people.length; i += 1) {
      for (let j = i + 1; j < people.length; j += 1) {
        if (this.checkForDuplicate(people[i], people[j])) {
          duplicates.push([people[i], people[j]]);
        }
      }
    }
    return duplicates;
  }
  render() {
    const { people } = this.props;
    const duplicates = this.findDuplicates(people);
    if (duplicates.length > 0) {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <FormattedMessage {...messages.header} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {duplicates.map(persons => (
              <TableRow key={uuidv1()}>
                <TableCell>
                  {persons.map(person => (
                    <span key={uuidv1()}>{person.email_address}&nbsp;</span>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
    return (
      <Typography variant="subheading" gutterBottom>
        <FormattedMessage {...messages.noDuplicates} />
      </Typography>
    );
  }
}

DuplicatesTable.propTypes = {
  people: PropTypes.array.isRequired,
};

export default DuplicatesTable;
