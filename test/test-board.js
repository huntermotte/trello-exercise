import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
  it('should have a title and display a list container', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Board title={''} lists={[]} />)
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('board');

    const div = result.props.children;
    div.should.be.an('array');
  })
})
