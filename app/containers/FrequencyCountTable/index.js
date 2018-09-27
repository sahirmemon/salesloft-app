/**
 *
 * FrequencyCountTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import LoadingMessage from 'components/LoadingMessage/Loadable';
import ErrorMessage from 'components/ErrorMessage/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectFrequencyCountTable,
} from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { loadFrequencyCountAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class FrequencyCountTable extends React.PureComponent {
  // Fetch People on load
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { frequencyCount, loading, error } = this.props;
    const data = frequencyCount.data.frequencyCount;

    if (loading) {
      return <LoadingMessage />;
    }

    if (error) {
      return <ErrorMessage error={error} />;
    }
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
          {Object.keys(data).map(key => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{data[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

FrequencyCountTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  frequencyCount: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoad: PropTypes.func,
};

FrequencyCountTable.defaultProps = {
  loading: null,
  error: null,
  frequencyCount: null,
  onLoad: null,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  frequencyCount: makeSelectFrequencyCountTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadFrequencyCountAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'frequencyCountTable', reducer });
const withSaga = injectSaga({ key: 'frequencyCountTable', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FrequencyCountTable);
