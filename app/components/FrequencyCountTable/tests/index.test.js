// import React from 'react';
// import { shallow } from 'enzyme';

import { getFrequencyCount } from '../helper';

describe('<FrequencyCountTable />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });
});

describe('Test Frequency Count', () => {
  it('Count should be equal', () => {
    const test = [{ emailAddress: 'a@a.a' }];
    const shouldReturn = new Map();
    shouldReturn.set('a', 3);
    shouldReturn.set('@', 1);
    shouldReturn.set('.', 1);
    const result = getFrequencyCount(test);
    expect(result).toEqual(shouldReturn);
  });
});
