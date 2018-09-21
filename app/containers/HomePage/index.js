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
import { Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

import PeopleTable from 'components/PeopleTable/Loadable';
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
  // Fetch People on load
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { loading, error, people } = this.props;
    if (loading) {
      return (
        <Background>
          <Typography variant="subheading" gutterBottom>
            <FormattedMessage {...messages.loading} />
          </Typography>
        </Background>
      );
    }

    if (error) {
      return (
        <Background>
          <Typography variant="subheading" gutterBottom>
            {error}
          </Typography>
        </Background>
      );
    }

    return (
      <Background>
        <Grid container spacing={12}>
          <Grid item xs>
            <Typography variant="display2" gutterBottom>
              <FormattedMessage {...messages.header} />
            </Typography>
            <PeopleTable people={people.data} />
          </Grid>
        </Grid>
      </Background>
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
