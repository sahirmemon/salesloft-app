/**
 *
 * PeopleTable
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

/* eslint-disable react/prefer-stateless-function */
class PeopleTable extends React.PureComponent {
  render() {
    const { people } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Email Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map(person => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.jobTitle}</TableCell>
              <TableCell>{person.emailAddress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

PeopleTable.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleTable;
