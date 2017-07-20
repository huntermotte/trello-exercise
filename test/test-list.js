import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
  it('should render a list of cards', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<List cards={[]} />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('card-list');

    const div = result.props.children;
    div.should.be.an('array');
  })
})
