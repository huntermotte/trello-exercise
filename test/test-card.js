import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
  it('should return a card', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Card cards={'example text'} />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('card');
  })
})
