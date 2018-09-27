/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

import LoadingMessage from 'components/LoadingMessage/Loadable';
import ErrorMessage from 'components/ErrorMessage/Loadable';
import PeopleTable from 'components/PeopleTable/Loadable';
import FrequencyCountTable from 'containers/FrequencyCountTable/Loadable';
import DuplicatesTable from 'containers/DuplicatesTable/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPeople,
} from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { loadPeopleAction } from './actions';

const Background = styled(Paper)`
  && {
    margin: 0px;
    padding: 25px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.handleFrequencyCountClick = this.handleFrequencyCountClick.bind(this);
    this.handleDuplicatesClick = this.handleDuplicatesClick.bind(this);
    this.state = {
      toggleFrequencyCountTable: false,
      toggleDuplicatesTable: false,
    };
  }

  // Fetch People on load
  componentDidMount() {
    this.props.onLoad();
  }

  handleFrequencyCountClick() {
    const { toggleFrequencyCountTable } = this.state;
    this.setState({
      toggleFrequencyCountTable: !toggleFrequencyCountTable,
    });
  }

  handleDuplicatesClick() {
    const { toggleDuplicatesTable } = this.state;
    this.setState({
      toggleDuplicatesTable: !toggleDuplicatesTable,
    });
  }

  render() {
    const { loading, error, people } = this.props;
    const { toggleFrequencyCountTable, toggleDuplicatesTable } = this.state;
    if (loading) {
      return (
        <Background>
          <LoadingMessage />
        </Background>
      );
    }

    if (error) {
      return (
        <Background>
          <ErrorMessage error={error} />
        </Background>
      );
    }

    return (
      <div>
        <Background>
          <Grid container spacing={24}>
            <Grid item xs>
              <Typography variant="display2" gutterBottom>
                <FormattedMessage {...messages.header} />
              </Typography>
              <PeopleTable people={people} />
            </Grid>
          </Grid>
        </Background>
        <Background>
          <Grid container spacing={24}>
            <Grid item xs>
              <Typography variant="display1" gutterBottom>
                <FormattedMessage {...messages.frequencyCount} />
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleFrequencyCountClick}
              >
                {!toggleFrequencyCountTable && (
                  <FormattedMessage {...messages.showFrequencyCountButton} />
                )}
                {toggleFrequencyCountTable && (
                  <FormattedMessage {...messages.hideFrequencyCountButton} />
                )}
              </Button>
              {toggleFrequencyCountTable && <FrequencyCountTable />}
            </Grid>
          </Grid>
        </Background>
        <Background>
          <Grid container spacing={24}>
            <Grid item xs>
              <Typography variant="display1" gutterBottom>
                <FormattedMessage {...messages.duplicates} />
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleDuplicatesClick}
              >
                {!toggleDuplicatesTable && (
                  <FormattedMessage {...messages.showDuplicatesButton} />
                )}
                {toggleDuplicatesTable && (
                  <FormattedMessage {...messages.hideDuplicatesButton} />
                )}
              </Button>
              {toggleDuplicatesTable && <DuplicatesTable people={people} />}
            </Grid>
          </Grid>
        </Background>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  people: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoad: PropTypes.func,
};

HomePage.defaultProps = {
  loading: null,
  error: null,
  people: null,
  onLoad: null,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  people: makeSelectPeople(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadPeopleAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
