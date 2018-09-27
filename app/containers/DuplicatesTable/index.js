/**
 *
 * DuplicatesTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import uuidv4 from 'uuid/v4';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import LoadingMessage from 'components/LoadingMessage/Loadable';
import ErrorMessage from 'components/ErrorMessage/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectDuplicatesTable,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadDuplicatesAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class DuplicatesTable extends React.PureComponent {
  // Fetch People on load
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { duplicates, loading, error } = this.props;
    if (loading) {
      return <LoadingMessage />;
    }

    if (error) {
      return <ErrorMessage error={error} />;
    }

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
              <TableRow key={uuidv4()}>
                <TableCell>
                  {persons.map(person => (
                    <span key={uuidv4()}>{person.emailAddress}&nbsp;</span>
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
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  duplicates: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoad: PropTypes.func,
};

DuplicatesTable.defaultProps = {
  loading: null,
  error: null,
  duplicates: null,
  onLoad: null,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  duplicates: makeSelectDuplicatesTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadDuplicatesAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'duplicatesTable', reducer });
const withSaga = injectSaga({ key: 'duplicatesTable', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DuplicatesTable);
